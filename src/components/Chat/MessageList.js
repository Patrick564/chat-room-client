import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Container from '../Container.js'
import Input from '../Input.js'
import Message from '../Message.js'
import Messages from '../Messages.js'
import SendBtn from '../SendBtn.js'
import SendMessageForm from './SendMessageForm.js'

import socket from '../../socket/socket.js'
import styled from 'styled-components'

const ContentMsg = styled.span`
  display: block;
  max-width: 390px;
  word-wrap: break-word;
`

const TimeMsg = styled.span`
  font-weight: lighter;
  font-size: x-small;
`

const MessageList = () => {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState({ username: '', id: '' })

  const handleSendMsg = (e) => {
    e.preventDefault()

    if (!e.target.input.value) {
      return
    }

    socket.emit('send-message', e.target.input.value)

    e.target.reset()
  }

  const handleScrollMessages = () => {
    let messagesList = document.getElementById('scrollMessages')

    messagesList.scrollTop = messagesList.scrollHeight
  }

  useEffect(() => {
    const getCurrentUser = ({ username, id }) => {
      if (!username && !id) {
        navigate('/')
      }

      setUser({ username, id })
    }

    const getNewMessages = ({ user, message, sendTime }) => {
      setMessages(
        (prevArr) => [...prevArr, { sender: user, content: message, time: sendTime }]
      )
      handleScrollMessages()
    }

    if (!user.username) {
      socket.emit('get-user')
    }

    socket.on('send-user', getCurrentUser)
    socket.on('message', getNewMessages)

    return () => {
      socket.off('send-user', getCurrentUser)
      socket.off('message', getNewMessages)
    }
  }, [])

  console.log(messages)

  return (
    <Container>
      <div id={'scrollMessages'} style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
        <Messages>
          {messages?.map((message, id) => {
            let content = message.sender.username === user.username ?
              message.content :
              `${message.sender.username}: ${message.content}`

            return (
              <Message
                alignDir={message.sender.username === user.username}
                key={id}
              >
                <ContentMsg>
                  {content}
                </ContentMsg>
                <TimeMsg>
                  {message.time}
                </TimeMsg>
              </Message>
            )
          })}
        </Messages>
      </div>

      <SendMessageForm id={'sendMsg'} action="" onSubmit={handleSendMsg}>
        <Input id={'input'} type={'text'} />
        <SendBtn type={'submit'}>Send</SendBtn>
      </SendMessageForm>
    </Container>
  )
}

export default MessageList
