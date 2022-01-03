---
title: "Criando o jogo da cobrinha com python. \U0001F40D"
description: "Olá pessoas maravilhosas desse site, hoje eu vou ensinar para vocês de uma forma bem detalhada como usar a biblioteca curses"
date: "2021-07-12T20:30:32.124Z"
categories: []
published: true
---

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0mdmbipf5rudyeh5ac7i.jpg)

Olá pessoas maravilhosas desse site, hoje eu vou ensinar para vocês de uma forma bem detalhada como usar a biblioteca **curses** do python para fazer um jogo clássico no terminal, antes de começar a codar, vamos entender o que é essa lib e suas funções básicas.
Vou deixar o [link](https://docs.python.org/3/library/curses.html) da documentação da lib para vocês irem mais fundo no assunto, mas resumindo, esse módulo fornece uma API para criar interfaces de usuários textuais (TUI), um exemplo, se quisermos escrever aplicativos de linha de comando devemos considerar o uso de curses para implementarmos. Esse pacote vem junto com a instalação do python e existem conceitos importantes que devemos entender para começarmos a usá-la, alguns desses conceitos são:
* O que são janelas
* Como iniciar e deligar curses
* Como adicionar caracteres, atualizar e limpar janelas.
Também é necessário entendermos o conceito de coordenadas x e y, para conseguirmos posicionar nossos elementos no terminal.

Sem mais delongas, para não estendermos demais aqui, vamos começar a desenvolver nosso jogo e a medida que formos criando, vou explicando o que utilizei e porque usei daquela forma.
Nosso jogo precisa de um menu, e vamos criar esse daqui:

![menu](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k7tpxrmgiq7xeydeomty.jpeg)

Para começarmos nosso projeto vamos iniciar o curses e definirmos as configurações iniciais, vou usar também a extensão **panel** que é um recurso adicional de profundidade nas janelas, para que elas possam ser empilhadas uma sobre as outras, vamos usar o panel para criamos nossa janela de menu e assim que o jogo for iniciado ainda termos essa janela sendo sobreposta.

```python
#!/usr/bin/env python
import sys
import curses
from curses import panel
from snake import Snake


screen = curses.initscr()
curses.noecho()
curses.curs_set(0)
curses.start_color()
screen.keypad(1)
_panel = panel.new_panel(screen)
panel.update_panels()
```

Nota-se que usamos alguns métodos como *initscr*, _noecho_, *curs_set*, *start_color*, _keypad_, *new_panel* e *update_panels*, vou explicar o que é cada um:
* **initscr** é a função irá inicializar a biblioteca e retornar um objeto de janela que representa a tela inteira;
* **noecho** desativa o eco automático de pressionamentos de tecla (evita que o programa insira cada tecla duas vezes);
* **curs_set** usamos para desabilitar um cursor piscando;
* **start_color** usamos para definir cor para nosso terminal, no nosso caso vamos usar as cores padrões;
* **new_panel** e **update_panels** tem a ver com nossos painéis mencionados anteriormente, vamos criar uma janela empilhada

Agora vamos criar nossa função de display, vou deixar o comentário no código explicando o que está acontecendo em cada etapa, nesse método vamos fazer o processo de montar o menu com título e dar funcionalidade para seus itens, criei um menu com duas opções, de start que irá iniciar o jogo e exit para sair da janela.

```python
def display():
    position = 0
    _panel.top()
    _panel.show()
    screen.clear()

    # adicionamos um título para o menu
    screen.addstr(1, 50, '========== Snake ==========', curses.A_BOLD)

    while True:
        screen.refresh()
        curses.doupdate()

        # verificamos a quantidade de itens no menu, e de acordo com a posição,
        # se for igual ao index, define o modo do cursor
        # na tela como normal ou reverso, assim como monta com ajuda do addstr o texto do menu,
        # usando os nomes que definimos e as posições
        # de coordenadas (y,x) que queremos, nesse caso para cada item eu usei o 3
        # como ponto inicial e durante o for incremento o y para as opções
        # ficarem uma embaixo da outra
        for i, item in enumerate(MENU):
            mode = curses.A_NORMAL
            if i == position:
                mode = curses.A_REVERSE

            screen.addstr(3 + i, 50, f'{i}. {item}', mode)

         # a função getch é usada para aguardar a capturar o pressionamento da tecla
        key = screen.getch()

        # aqui incremento a posição, caso eu dê enter em algum item do menu 
        # é com a variável position que consiguirei definir o que vai ser feito
        if key == curses.KEY_UP:
            position = 0
        elif key == curses.KEY_DOWN:
            position = len(MENU) - 1
        elif key in [curses.KEY_ENTER, ord('\n')]:
            if position == len(MENU) - 1:
                # como defini o exit no fim do menu, 
                # aqui verifico se ele é o indice final 
                # e se sim eu saio do programa
                sys.exit()
            else:
                # inicia o jogo da cobra
                screen.clear()
                # snake()
                break
    
    # limpa a tela anterior ao pressionar a tecla e atualiza a exibição com base na pos, 
    # fecho o painel e atualizo a tela física para corresponder à tela virtual.
    screen.clear()
    _panel.hide()
    panel.update_panels()
    curses.doupdate()
```

Após nossa função de display criada, vamos criar uma função para rodarmos nosso código, só para ficar separado e o arquivo menu.py ficará assim:

```python
#!/usr/bin/env python
import sys
import curses
from curses import panel
from cobra import snake


screen = curses.initscr()
curses.noecho()
curses.curs_set(0)
curses.start_color()
screen.keypad(1)
_panel = panel.new_panel(screen)
panel.update_panels()
MENU = ['Start', 'Exit']


def display():
    position = 0
    _panel.top()
    _panel.show()
    screen.clear()

    # adicionamos um título para o menu
    screen.addstr(1, 50, '========== Snake ==========', curses.A_BOLD)

    while True:
        screen.refresh()
        curses.doupdate()

        # verificamos a quantidade de itens no menu, e de acordo com a posição,
        # se for igual ao index, define o modo do cursor
        # na tela como normal ou reverso, assim como monta com ajuda do addstr o texto do menu,
        # usando os nomes que definimos e as posições
        # de coordenadas (y,x) que queremos, nesse caso para cada item eu usei o 3
        # como ponto inicial e durante o for incremento o y para as opções
        # ficarem uma embaixo da outra
        for i, item in enumerate(MENU):
            mode = curses.A_NORMAL
            if i == position:
                mode = curses.A_REVERSE

            screen.addstr(3 + i, 50, f'{i}. {item}', mode)

         # a função getch é usada para aguardar a capturar o pressionamento da tecla
        key = screen.getch()

        # aqui incremento a posição, caso eu dê enter em algum item do menu 
        # é com a variável position que consiguirei definir o que vai ser feito
        if key == curses.KEY_UP:
            position = 0
        elif key == curses.KEY_DOWN:
            position = len(MENU) - 1
        elif key in [curses.KEY_ENTER, ord('\n')]:
            if position == len(MENU) - 1:
                # como defini o exit no fim do menu, 
                # aqui verifico se ele é o indice final 
                # e se sim eu saio do programa
                sys.exit()
            else:
                # inicia o jogo da cobra
                screen.clear()
                snake()
                break
    
    # limpa a tela anterior ao pressionar a tecla e atualiza a exibição com base na pos, 
    # fecho o painel e atualizo a tela física para corresponder à tela virtual.
    screen.clear()
    _panel.hide()
    panel.update_panels()
    curses.doupdate()


def run(object):
    display()
  
if __name__ == '__main__':
    curses.wrapper(run)
```

Com isso fechamos o menu e vamos para nosso jogo, no mesmo esquema do código acima, em todo o código há comentários para facilitar o entendimento.
Começamos iniciando o curses porque eu fiz o código em arquivo separado, mas no projeto final iniciamos apenas uma vez, criamos então uma nova janela com o *newin* setando as coordenadas y e x, sim, nesse caso a função recebe o argumento y antes do x e criamos um método para iniciar o jogo.

```python
import curses
from random import randint

ESC = 27  # a tecla esc é a nr 27

curses.initscr()
curses.noecho()
curses.curs_set(0)
screen = curses.newwin(20, 50, 0, 0) #y,x
screen.keypad(1)
screen.border(0)
screen.nodelay(1)

def snake():
    # defino aqui as posições x,y e a quantidade de nós da minha cobra,
    # cada nó parte da mesma posição no eixo y
    # e em posições diferentes no eixo x, para criar o "000"
    snake = [(1, 3), (1, 2), (1, 1)]

    # defino aqui a posição inicial da comida na janela, qual será seu posicionamento.
    food = (10, 20)
    
    #inicia a comida na posição escolhida
    screen.addch(food[0], food[1], 'ѽ')
    
    score = 0  # a pontuação do jogo começa em 0

    # defino a key com o pressionamento da seta para a direita,
    # para iniciar o movimento da cobra
    key = curses.KEY_RIGHT

    while key != ESC:
        # adicionando um texto com nossa pontuação, que a medida que formos 
        # jogando e acertando, será incrementado o score
        screen.addstr(0, 2, f'Pontuação {str(score)} ')
        
        # velocidade da cobra na janela
        screen.timeout(150 - (len(snake)) // 5 + len(snake)//10 % 120)
        old_key = key
        event = screen.getch()  # aguarda e recupera o pressionamento do usuário na tela
        key = event if event != -1 else old_key

        if key not in [curses.KEY_LEFT, curses.KEY_RIGHT, curses.KEY_UP, curses.KEY_DOWN, ESC]:
            key = old_key

        # Aqui verificamos a posição inicial do primeiro nó da cobra 
        # e de acordo com a key pressionada pelo usuário, ou seja, quando as setas
        # são pressionadas, verificamos quais são e incrementamos os eixos x e y
        y = snake[0][0]
        x = snake[0][1]

        if key == curses.KEY_DOWN:
            y += 1
        elif key == curses.KEY_UP:
            y -= 1
        elif key == curses.KEY_RIGHT:
            x += 1
        elif key == curses.KEY_LEFT:
            x -= 1

        snake.insert(0, (y, x))

        # vamos checar se nosso x e y não corresponde as bordas que iniciamos lá em cima no curses.newwin(20, 50, 0, 0), 
        # se corresponder, significa que os nós da cobra bateram na parede, se isso acontecer temos que sair do jogo.
        if y == 0 or y == 19:
            break
        if x == 0 or x == 49:
            break

        # se a posição do ultimo nó for correspondente ao nó inicial, significa que a cabeça da cobra bateu na calda, 
        # devemos sair do jogo.
        if snake[0] in snake[1:]:
            break

        if snake[0] == food:
            # nesse momento verificamos se a posição do primeiro nó da cobra está nos eixos da comida, se for no inicio,
            # vai verificar se está na posição (10,20) que definimos, se sim, significa que a cobra comeu o alimento,
            # então vamos zerar a tupla da comida e fazemos um laço para que enquanto essa tupla estiver vazia,
            # com ajuda da lib random, denifimos novos posicionamentos para esse objeto,
            # a lib vai criar posicionamentos randomicos dentro do limite da janela que estipulamos no começo,
            # por isso dentre 1,18 e 1,48. Se a comida for gerada em cima de uma posição que a cobra estiver 
            # a tupla é zerada novamente e o laço é continuado, caso contrário, damos um addch
            # passando as novas posições da comida e inserindo o caracter escolhido novamente nessa posição
            score += 1
            food = ()
            while food == ():
                food = (randint(1, 18), randint(1, 48))
                if food == snake:
                    food = ()
            screen.addch(food[0], food[1], 'ѽ')
        else:
            # caso contrário vamos remover o ultimo caracter ● adicionado e mover a cobra na janela.
            last = snake.pop()
            screen.addch(last[0], last[1], ' ')

        # Sempre inserimos o caracter na cobra
        screen.addch(snake[0][0], snake[0][1], '●')

```

Voltando ao nosso primeiro código de menu, importamos lá o nosso arquivo do jogo e onde deixamos #snake comentado removemos o comentário e damos um python menu.py para jogarmos.
Para não deixar o artigo gigante, vamos concluir por aqui, mas o projeto está no [replit](https://replit.com/@ThaisRibeiro3/snake) para vocês analisarem. 
Bom pessoal, a ideia foi compartilhar com vocês como funciona o módulo do python de uma maneira divertida, jogando! Atualmente quase não vemos nenhuma interface em terminal, mas como eu sempre falo, sempre bom absorver conteúdo, vai que uma hora precisamos, então é isso, fico por aqui, um beijo e até mais!