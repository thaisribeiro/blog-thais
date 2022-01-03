import React, { Component } from 'react'
import 'react-chat-widget/lib/styles.css'
import './chatbot.css'
import logo from './thais-avatar.png'
let ReactChat
class ChatBot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      context: {},
      buttons: [],
      options: [],
      display: 'block',
      clicked: false,
      reactchat: false
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      ReactChat = require('react-chat-widget')
      this.setState({ reactchat: true })
      this.getWatsonMessage()
    }

  }

  getWatsonMessage = (text = '') => {
    const uri = 'https://shrouded-wave-96094.herokuapp.com/conversation/';

    let context = this.state.context
    fetch(uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        context,
      })
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const messages = data.output.text ? data.output.text : ''

        messages.forEach(msg => {
          this.setState({ options: [] })
          ReactChat.addResponseMessage(msg)
          let params = []
          const options = data.output.options || []
          const elem = document.getElementsByClassName('quick-buttons')

          if (options.length) {
            options.forEach((option) => {
              params = [...params, { label: option.label, value: option.value.input.text }]
            })

            this.setState({ options: params })
            ReactChat.setQuickButtons(this.state.options)
            if (elem.length) {
              this.setState({ display: 'flex' })
              elem[0].style.display = this.state.display
            }
            if (!elem.length) {
              this.setState({ display: 'none' })
            }
          }

          if (!elem.length) {
            this.setState({ display: 'none' })
          }
        })
      })

  }

  handleNewUserMessage = (newMessage) => {
    this.getWatsonMessage(newMessage)
  }

  handleQuickButtonClicked = (event) => {
    const result = this.state.options.filter(item => item.value == event)
    if (result.length) {
      let [{ label }] = this.state.options.filter(item => item.value == event)
      this.handleNewUserMessage(label)
      const elem = document.getElementsByClassName('quick-buttons')
      this.setState({ display: 'none' })
      this.setState({ clicked: 'true' })
      elem[0].style.display = this.state.display
    }

  }
  render() {
    return (
      <div className="avatar-container">
        {
          this.state.reactchat ? (<ReactChat.Widget
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar={logo}
            title=""
            subtitle=""
            senderPlaceHolder="Digite aqui sua mensagem..."
            handleQuickButtonClicked={this.handleQuickButtonClicked}
          />) : ''
        }

      </div>
    );
  }
}

export default ChatBot