import { io } from 'socket.io-client'

// const server = process.env.REACT_APP_SOCKET_SERVER

const server = ['https://chat-room-client-psi.vercel.app/', 'https://chat-server-vercel.herokuapp.com/']
const socket = io(server, {
  withCredentials: true,
})

export default socket
