import styled from 'styled-components'

import OptionBtn from '../OptionsBtn.js'

import { UsersImage, RoomsImage } from '../../img/UsersImage.js'

const Buttons = ({ handleBtnsHide, btnStatus, ...props }) => {
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
      <OptionBtn onClick={handleRooms}><RoomsImage /></OptionBtn>
      <OptionBtn onClick={handleUsers}><UsersImage /></OptionBtn>
    </div>
  )
}

const NavButtons = styled(Buttons)`
  display: flex;
  justify-content: space-between;
  grid-column: 2;
  grid-row: 1;
  margin: 1rem 1rem 0 1rem;

  @media (max-width: 1024px) and (min-width: 426px) {}
`

export default NavButtons
