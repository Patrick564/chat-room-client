import { useState, useEffect } from 'react'

import Span from '../Span.js'
import UsersContainer from './UsersCotainer.js'

import socket from '../../socket/socket.js'

const UsersConnected = ({ isVisible }) => {
  const [usersList, setUserList] = useState([])

  useEffect(() => {
    const setNewUser = (usersList) => {
      setUserList(usersList)
    }

    const logUserDisconnected = () => {
      console.log('chau')
    }

    socket.on('user-info-public', setNewUser)
    socket.on('logout', logUserDisconnected)

    return () => {
      socket.off('user-info-public', setNewUser)
      socket.off('logout', logUserDisconnected)
    }
  }, [])

  return (
    <UsersContainer visible={isVisible}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Users</span>
        <span>{usersList.length}</span>
      </div>

      <ul style={{ padding: '0', textAlign: 'right' }}>
        {usersList?.map((user, id) => {
          return (
            <Span key={id}>
              <li style={{ listStyleType: 'none', padding: '0 10px' }} key={id}>{user.username}</li>
            </Span>
          )
        })}
      </ul>
    </UsersContainer>
  )
}

export default UsersConnected
