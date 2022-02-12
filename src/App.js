import { Routes, Route } from 'react-router-dom'

import ChatRoom from './components/Chat/ChatRoom.js'
import Login from './components/Login/login.js'

import './App.css'

function App() {
  console.log(process.env.REACT_APP_SOCKET_SERVER);
  return (
    <Routes>
      <Route exact path={'/'} element={<Login />} />

      <Route path={'/chat'} element={<ChatRoom />} />
    </Routes>
  )
}

export default App
