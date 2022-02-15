import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import socket from '../../socket/socket.js'
import styled from 'styled-components'
import Wrapper from '../Wrapper.js'

import Input from '../Input.js'

const LoginCard = styled.form`
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

  @media (max-width: 425px) and (min-width: 320px) {
    align-self: center;
    margin-top: 6rem;
  }
`

const StyledButton = styled.button`
  color: white;
  padding-top: 15px;
  text-align: center;
  border: none;
  background: none;
  border-top: 1px solid black;
  cursor: pointer;
`

const LoginInput = styled(Input)`
  width: auto;
`

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')

  const handleInput = (e) => {
    setUser(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.username.value === '') { return }

    socket.emit('user-connected', user)
    socket.emit('join-room', 'general')

    navigate('/chat')
  }

  return (
    <Wrapper>
      <LoginCard onSubmit={handleSubmit}>
        <LoginInput id={'username'} type="text" onChange={handleInput} />
        <StyledButton type={'submit'}>Got to chat</StyledButton>
      </LoginCard>
    </Wrapper>
  )
}

export default Login
