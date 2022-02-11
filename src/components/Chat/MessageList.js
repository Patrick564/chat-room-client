import socket from '../../socket/socket.js'
import { useEffect, useState } from 'react'

const MessageList = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevArr) => [...prevArr, msg])
    })
  }, [])

  return (
    <ul>
      {messages?.map((message, id) => {
        return (
          <div key={id}>
            <li>{message}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default MessageList
