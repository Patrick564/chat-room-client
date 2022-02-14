import RoomsContainer from './RoomsContainer.js'

const Rooms = ({ isVisible }) => {
  return (
    <RoomsContainer visible={isVisible}>
      <ul style={{ padding: '0' }}>
        <li style={{ listStyleType: 'none' }}>Rooms</li>
      </ul>
    </RoomsContainer>
  )
}

export default Rooms
