import { Routes, Route } from 'react-router-dom'

import Chat from './routes/Chat.js'
import Login from './components/Login/Login.js'

import './App.css'

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Login />} />

      <Route path={'/chat'} element={<Chat />} />
    </Routes>
  )
}

export default App
