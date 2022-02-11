import { io } from 'socket.io-client'

const server = 'http://localhost:4000'
const socket = io(server)

export default socket
