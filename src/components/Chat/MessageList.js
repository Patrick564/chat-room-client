import socket from '../../socket/socket.js'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Container from '../Container.js'
import Messages from '../Messages.js'

const Form = styled.form`
  display: flex;
  margin-top: 10px;
  gap: 15px;
`

const SendBtn = styled.button`
  border: 2px solid #00E047;
  background: #00E047;
  border-radius: 15px;
  outline: red;
  color: white;
  padding: 0 15px;
  font-weight: 700;
  font-size: 1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #0ea5e9;
  border-radius: 15px;
  outline: none;
  color: white;
  background-color: #334155;
`

const Msg = styled.li`
  border: 1px solid #1d4ed8;
  padding: 10px 15px;
  border-radius: 15px 15px ${props => props?.alignDir ? '5px' : '15px'} ${props => props?.alignDir ? '15px' : '5px'};
  background: #2563eb;
  color: white;
  max-width: 400px;
  text-align: ${props => props?.alignDir ? 'right' : 'left'};
  align-self: ${props => props?.alignDir ? 'flex-end' : 'flex-start'};
`

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    socket.on('message', ({ msg, user }) => {
      setMessages((prevArr) => [...prevArr, { sender: user, content: msg }])
    })

    socket.on('user-info', ({ id, username }) => {
      setUser({ username, id })
    })
  }, [])

  const handleSendMsg = (e) => {
    e.preventDefault()

    socket.emit(
      'send-message',
      e.target.input.value
    )

    e.target.reset()
  }

  return (
    <Container>
      <Messages>
        {messages?.map((message, id) => {
          let content = message.sender.username === user.username ? message.content : `${message.sender.username}: ${message.content}`

          return (
            <Msg
              alignDir={message.sender.username === user.username}
              key={id}
            >
              <span>
                {content}
              </span>
            </Msg>
          )
        })}
      </Messages>

      <Form id={'sendMsg'} action="" onSubmit={handleSendMsg}>
        <Input id={'input'} type={'text'} />
        <SendBtn type={'submit'}>Send</SendBtn>
      </Form>
    </Container>
  )
}

export default MessageList
