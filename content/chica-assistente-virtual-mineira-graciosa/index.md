---
title: "CHICA - A assistente virtual mineira e graciosa \U0001F916"
description: "Oi meus trem bão, tudo bem com vocês? Pois eu tô, bem e animada para trazer um conteúdo fresquinho juntando o que já ensinei por aqui e no twitter..."
date: "2021-12-11T01:24:32.124Z"
categories: []
published: true
---

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fgbq99aupa8x05mfwzmu.png)

Oi meus trem bão, tudo bem com vocês? Pois eu tô, bem e animada para trazer um conteúdo fresquinho juntando o que já ensinei por aqui e no twitter, mas para vocês não ficarem no escuro eu vou dar um breve resumo sobre essas "coisas".
A cada ano que passa está cada vez mais fácil ser preguiçoso e pedir para um assistente virtual realizar tarefas simples para você:
— Alexa, toca aquela lá da Marília
— Alexa, que dia é hoje?
— Siri, ligue para mamãe.
Mas vocês já se perguntaram como esses assistentes virtuais funcionam? Não? Vou te contar um pouco como funciona e te ensinar a fazer uma assistente personalizada baseada na [CHICA](https://github.com/thaisribeiro/chica), minha assistente mineirinha e graciosa.

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mywm5g5ow1bfhe8rnr1z.png)

Longe de ser uma siri ou uma Alexa, mas usando os mesmos conceitos, criei a Chica para ajudar as pessoas entenderem como funciona esse tipo de IA.
O foco principal hoje é falarmos sobre reconhecimento de voz de forma resumida, porque uma discussão completa caberia em um livro, ou vários. 
O reconhecimento de voz tem suas raízes em pesquisas feitas nos anos 50 e os primeiros sistemas eram limitados a um vocabulário de uma dúzia de palavras, até chegarmos ao ponto que estamos hoje, esses sistemas percorreram um grande caminho desde então, e como eles trabalham por debaixo do capô?

O primeiro componente do reconhecimento de fala, é a fala 🗣️, ela é convertida de som físico em sinal elétrico com um microfone, e em seguida, em dados digitais com um conversor analógico-digital. Uma vez digitalizado, pode-se usar vários modelos para transcrever o áudio em texto.
A maioria dos sistemas atuais usam um modelo conhecido como [Modelo Oculto de Markov](https://en.wikipedia.org/wiki/Hidden_Markov_model)(HMM), que funciona supondo que um sinal de voz, quando visto em uma escala de tempo curta o suficiente (dez milisegundos), pode ser razoavelmente aproximado como um processo estacionário, no qual as estatísticas não mudam ao longo do tempo.

Em um modelo HMM, o sinal de voz é dividido em fragmentos de 10 milisegundos, o espectro de potência* de cada fragmento é mapeado para um vetor de números reais conhecido como coeficientes cepstrais. A dimensão desse vetor é pequena e a saída final do HMM é uma sequência desses vetores. Para decodificar o que foi falado em texto, grupos desses vetores são combinados com um ou mais fonemas e um algoritmo especial é aplicado para determinar a palavra/frase mais provável produzida. Esses fonemas exige treinamento, já que um som varia de pessoa para pessoa.

Sugiro que vocês pesquisem mais a fundo sobre esse modelo para entender como os cálculos e os treinamentos são feitos. A boa notícia para o *pythonista* é que para tudo na vida hoje em dia tem biblioteca.Hoje existem vários serviços de reconhecimento de voz disponíveis por meio de API, e nós usaremos o **SpeechRecognition**.

## SpeechRecognition
SpeechRecognition é um recurso importante usado na automação residencial e em dispositivos de inteligência artificial. 
A principal função desta biblioteca é fazer o que explicamos ali em cima: tentar entender tudo o que os humanos falam e converter a fala em texto.
A flexibilidade e facilidade de uso do pacote, o tornam uma escolha excelente para qualquer projeto Python. 

### Instalando 
```
pip install SpeechRecognition
```
No nosso caso vamos precisar instalar também o PyAudio para capturarmos a entrada do microfone.

## Criando a Chica
Na assistente acoplei um nlp para identificar a intenção do usuário, eu expliquei [como fazer um bot usando aprendizado profundo](https://dev.to/thaisribeiro/como-criar-um-bot-usando-deep-learning-e-python-2d55) aqui no dev.to e lá no medium, é importante vocês lerem para entender como nosso modelo é treinado e como são classificadas as intenções.
Supondo que temos nosso modelo treinado e nossas intenções definidas, vamos criar nosso arquivo principal que será o cara responsável por capturar a voz do seu microfone e identificar o que você quis dizer, a explicação está comentada no código.

```python
import os
import pathlib
import random
import pytz
import speech_recognition as sr
import wikipedia
import pyjokes
from datetime import datetime, timezone
from speech import to_speak
from nlp.extract import get_response, class_prediction
from pydub import AudioSegment
from pydub.playback import play
from youtube import run_youtube

wikipedia.set_lang("pt")
path = pathlib.Path(__file__).parent.resolve()
IST = pytz.timezone('America/Sao_Paulo')

listener = sr.Recognizer()


def listening():
    # captura o som do microfone
    with sr.Microphone() as src:
        print('listening...')
        listener.adjust_for_ambient_noise(src)
        voice = listener.listen(src)
        try:
            event = listener.recognize_google(voice, language='pt-BR')
            event = event.lower()
        except:
            event = 'anything_else'

    return event


def voice_chica(tag):
    song = AudioSegment.from_mp3(f'{path}/audios/{tag}.mp3')
    play(song)

def run():
    """
        Método que irá iniciar nossa assistente virtual e o reconhecimento de voz
        nesse momento a voz da chica será o default.
        Quem enjoar da minha voz, pode usar o
        to_speak passando o random.choices(response) no lugar de voice_chica

    """
    event = listening()
    # retorna a voz transcrita, que foi falada ao microfone
    print(f'evento: {event}')
    
    # é enviado para a classe de predição, para identificar as intenções e assim buscar a resposta mais coerente se existir, caso não exista cai no fallback.
Esse processo de NLP foi explicado no outro artigo.
    intents = class_prediction(event)
    response, context, tag = get_response(intents)

    if tag == 'song':
        voice_chica(tag)
        run_youtube(event)
    elif tag == 'hours':
        voice_chica(tag)
        hours_speak = f'{datetime.now(IST).hour} horas e {datetime.now(IST).minute} minutos'
        to_speak(hours_speak)
        voice_chica(f'{tag}2')
    elif tag == 'days':
        voice_chica(tag)
        days_speak = f'{datetime.now(IST).day}'
        to_speak(days_speak)
    elif tag == 'search':
        voice_chica(tag)
        voice_chica(f'{tag}2')
        info = wikipedia.summary(event, 1)
        to_speak(info)
    else:
        # voice_chica é um método que irá reproduzir os áudios com a minha voz haha e to_speak com a voz do google.
        voice_chica(tag)

while True:
    run()

```
Esse foi um exemplo de como ficou a classe principal, o projeto é open source e está no meu [repositório](https://github.com/thaisribeiro/chica).
Bom, vou deixar vocês colocarem a mão na massa e executarem o código, assim como tentar entendê-lo também haha, vou ficando por aqui, espero que tenham gostado e peço gentilmente que leve esse e os outros artigos aos seus amigos, assim você estará compartilhando informação e incentivando o meu trabalho.
Até mais.