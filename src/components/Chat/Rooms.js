import styled from 'styled-components'

const Room = styled.div`
  grid-row: 2;
  border: 1px solid black;
  margin: 2rem;
  border-radius: 15px;
  padding: 2rem;
  justify-self: start;
  box-shadow: 0 0 3px #0f172a;
  background: #334155;
  color: white;
  visibility: ${props => props?.visible ? 'visible' : 'hidden'};

  @media (max-width: 1024px) and (min-width: 426px) {
    position: absolute;
    left: 0;
    //left: 0;
    //top: 0;
    margin-left: 10rem;
    margin-top: 5rem;
    //margin-top: 5rem;
    //margin-right: 10rem;
  }

  @media (max-width: 425px) and (min-width: 320px) {
    position: absolute;
    right: 0;
    //left: 0;
    //top: 0;
    margin-right: 5rem;
    margin-top: 5rem;
    //margin-top: 5rem;
    //margin-right: 10rem;
  }
`

const Rooms = ({ isVisible }) => {
  return (
    <Room visible={isVisible}>
      <ul style={{ padding: '0' }}>
        <li style={{ listStyleType: 'none' }}>Rooms</li>
      </ul>
    </Room>
  )
}

export default Rooms
