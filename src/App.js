import { Routes, Route } from 'react-router-dom'

import ChatRoom from './components/Chat/ChatRoom.js'
import Login from './components/Login/login.js'

import './App.css'

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Login />} />

      <Route path={'/chat'} element={<ChatRoom />} />
    </Routes>
  )
}

export default App
