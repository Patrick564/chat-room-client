import { useState, useEffect } from 'react'
import MessageList from './MessageList.js'

import socket from '../../socket/socket.js'

const ChatRoom = () => {
  const [user, setUser] = useState({})

  const handleSendMsg = (e) => {
    e.preventDefault()

    socket.emit(
      'send-message',
      e.target.input.value
    )
  }

  // socket.on('user-info', (userData) => {
  //   setUser({ username: userData.username, uuid: userData.uuid })
  // })

  useEffect(() => {
    socket.on('user-info', (userData) => {
      setUser({ username: userData.username, uuid: userData.uuid })
    })
  }, [user])

  return (
    <div className="App">
      <span>{user.username} -> {user.uuid}</span>
      <MessageList />

      <form action="" onSubmit={handleSendMsg}>
        <input id={'input'} type={'text'} />
        <button type={'submit'}>Send</button>
      </form>
    </div>
  )
}

export default ChatRoom
