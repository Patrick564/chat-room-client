import styled from 'styled-components'

const Btn = styled.button`
  padding: 0 15px;
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
      <Btn onClick={handleRooms}>R</Btn>
      <Btn onClick={handleUsers}>U</Btn>
    </div>
  )
}

const TopBtns = styled(Btns)`
  display: flex;
  justify-content: space-between;
  grid-column: 2;
  grid-row: 1;
  margin: 1.5rem 0.5rem 0 0.5rem;
  padding: 1rem 1.5rem 0 1.5rem;

  @media (max-width: 1024px) and (min-width: 426px) {

  }
`

export default TopBtns
