import socket from '../../socket/socket.js'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const User = styled.div`
  grid-column: 1;
  margin: 2rem;
  border: 2px black solid;
  border-radius: 15px;
  padding: 3rem;
`

const UserInfo = (user) => {
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   socket.on('user-info', ({ id, username }) => {
  //     setUser({ username, id })
  //   })
  // }, [])

  return (
    <User>
      <span>Username: {user.username}</span>
    </User>
  )
}

export default UserInfo
