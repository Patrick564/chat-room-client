import { useState } from 'react'
import MessageList from '../components/Chat/MessageList.js'

import Rooms from '../components/Chat/Rooms.js'
import UsersConnected from '../components/Chat/UsersConnected.js'
import Wrapper from '../components/Wrapper.js'
import NavButtons from '../components/Chat/TopBtns.js'

const Chat = () => {
  const [isBtnHide, setBtnHide] = useState({ rooms: false, users: false })

  return (
    <Wrapper>
      <NavButtons handleBtnsHide={setBtnHide} btnStatus={isBtnHide} />

      <Rooms isVisible={isBtnHide.rooms} />

      <MessageList />

      <UsersConnected isVisible={isBtnHide.users} />
    </Wrapper>
  )
}

export default Chat
