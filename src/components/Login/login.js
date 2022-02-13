import { Link } from 'react-router-dom'
import { useState } from 'react'

import socket from '../../socket/socket.js'

const Login = () => {
  const [user, setUser] = useState('')

  const handleInput = (e) => {
    setUser(e.target.value)
  }

  const handleSubmit = () => {
    socket.emit('user-connected', user)
    socket.emit('join-room', 'general')
  }

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <Link to={'/chat'} onClick={handleSubmit}>Go</Link>
    </div>
  )
}

export default Login
