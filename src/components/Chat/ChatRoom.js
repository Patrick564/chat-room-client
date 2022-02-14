import { useState, useEffect } from 'react'
import MessageList from './MessageList.js'

import socket from '../../socket/socket.js'
import UsersConnected from './UsersConnected.js'
import Rooms from './Rooms.js'
import UserInfo from './UserInfo.js'
import styled from 'styled-components'
import TopBtns from './TopBtns.js'
import Wrapper from '../Wrapper.js'

const ChatRoom = () => {
  const [isBtnHide, setBtnHide] = useState({ rooms: false, users: false })
  console.log(isBtnHide)

  // useEffect(() => {
  //   socket.emit()
  // }, [])

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
