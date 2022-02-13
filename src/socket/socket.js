import { io } from 'socket.io-client'

const server = process.env.REACT_APP_SOCKET_SERVER

const socket = io(server, {
  // withCredentials: true,
})

export default socket
