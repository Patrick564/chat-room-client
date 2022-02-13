import { useState, useEffect } from 'react'
import MessageList from './MessageList.js'

import socket from '../../socket/socket.js'
import UsersConnected from './UsersConnected.js'
import Rooms from './Rooms.js'
import UserInfo from './UserInfo.js'
import styled from 'styled-components'
import TopBtns from './TopBtns.js'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 5rem 1fr 1fr;
  position: static;
  
  @media (max-width: 1024px) and (min-width: 426px) {
    display: flex;
    flex-direction: column;
    margin: 0 3rem;
  }

  @media (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`

const ChatRoom = () => {
  const [isBtnHide, setBtnHide] = useState({ rooms: true, users: true })
  console.log(isBtnHide)

  return (
    <Wrapper>
      <TopBtns handleBtnsHide={setBtnHide} btnStatus={isBtnHide} />

      <Rooms isVisible={isBtnHide.rooms} />

      <MessageList />

      <UsersConnected isVisible={isBtnHide.users} />
    </Wrapper>
  )
}

export default ChatRoom
