import socket from '../../socket/socket.js'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Users = styled.div`
  grid-column: 3;
  grid-row: 2;
  border-radius: 15px;
  border: 1px solid black;
  margin: 2rem;
  padding: 2rem;
  box-shadow: 0 0 3px #0f172a;
  text-align: right;
  justify-self: end;
  background: #334155;
  color: white;
  width: 100px;
  visibility: ${props => props?.visible ? 'visible' : 'hidden'};

  @media (max-width: 1024px) and (min-width: 426px) {
    position: absolute;
    right: 0;
    //left: 0;
    //top: 0;
    margin-right: 10rem;
    margin-top: 5rem;
    //margin-top: 5rem;
    //margin-right: 10rem;
  }

  @media (max-width: 425px) and (min-width: 320px) {
    position: absolute;
    right: 0;
    //left: 0;
    //top: 0;
    margin-right: 5rem;
    margin-top: 5rem;
    //margin-top: 5rem;
    //margin-right: 10rem;
  }
`

const Span = styled.span`
  display: block;
  margin: 15px 10px;
  border-bottom: 1px solid black;
`

const UsersConnected = ({ isVisible }) => {
  const [usersList, setUserList] = useState([])

  useEffect(() => {
    socket.on('user-info-public', (usersList) => {
      // setUser((prevArr) => [...prevArr, username])
      setUserList(usersList)
    })

    socket.on('logout', (delUser) => {
      // setUser(usersList)
    })
  }, [])

  return (
    <Users visible={isVisible}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Users</span>
        <span>#</span>
      </div>

      <ul style={{ padding: '0', textAlign: 'right' }}>
        {usersList?.map((user, id) => {
          return (
            <Span>
              <li style={{ listStyleType: 'none', padding: '0 10px' }} key={id}>{user.username}</li>
            </Span>
          )
        })}
      </ul>
    </Users>
  )
}

export default UsersConnected
