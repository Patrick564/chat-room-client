import styled from 'styled-components'
import { UsersImage, RoomsImage } from '../../img/UsersImage.js'

const Btn = styled.div`
  padding: 10px 10px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #0c4a6e;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  visibility: hidden;

  @media (max-width: 1024px) and (min-width: 426px) {
    visibility: visible;
  }

  @media (max-width: 425px) and (min-width: 320px) {
    visibility: visible;
  }
`

const Btns = ({ handleBtnsHide, btnStatus, ...props }) => {
  const handleRooms = () => {
    handleBtnsHide({
      ...btnStatus,
      rooms: !btnStatus.rooms
    })
  }

  const handleUsers = () => {
    handleBtnsHide({
      ...btnStatus,
      users: !btnStatus.users
    })
  }

  return (
    <div {...props}>
      <Btn onClick={handleRooms}><RoomsImage /></Btn>
      <Btn onClick={handleUsers}><UsersImage /></Btn>
    </div>
  )
}

const TopBtns = styled(Btns)`
  display: flex;
  justify-content: space-between;
  grid-column: 2;
  grid-row: 1;
  margin: 1rem 1rem 0 1rem;
  //margin: 1.5rem 0.5rem 0 0.5rem;
  //padding: 1rem 1.5rem 0 1.5rem;

  @media (max-width: 1024px) and (min-width: 426px) {

  }
`

export default TopBtns
