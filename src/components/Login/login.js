import { Link } from 'react-router-dom'
import { useState } from 'react'

import socket from '../../socket/socket.js'
import styled from 'styled-components'
import Wrapper from '../Wrapper.js'

import Input from '../Input.js'

const LoginCard = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  width: 250px;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  gap: 20px;
  border-radius: 10px;
  background: #334155;
  justify-self: center;
  
  @media (max-width: 1024px) and (min-width: 426px) {
    align-self: center;
    margin-top: 6rem;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-top: 1px solid black;
  padding-top: 15px;
  text-align: center;
`

const LoginInput = styled(Input)`
  width: auto;
`

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
    <Wrapper>
      <LoginCard>
        <LoginInput type="text" onChange={handleInput} />
        <StyledLink to={'/chat'} onClick={handleSubmit}>Got to chat</StyledLink>
      </LoginCard>
    </Wrapper>
  )
}

export default Login
