import styled from 'styled-components'

const UsersContainer = styled.div`
  grid-column: 3;
  grid-row: 2;
  border-radius: 15px;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 0 3px #0f172a;
  text-align: right;
  justify-self: end;
  background: #18181b;
  color: white;
  width: 100px;
  transition: visibility 0.2s linear, opacity 0.2s linear, transform 0.4s ease-in-out;

  @media (max-width: 1024px) and (min-width: 426px) {
    position: absolute;
    right: 0;
    margin-right: 8rem;
    margin-top: 1rem;
    visibility: ${props => props?.visible ? 'visible' : 'hidden'};
    opacity: ${props => props?.visible ? '1' : '0'};
    transform: translate(${props => props?.visible ? '0, 20px' : '0'});
    border-radius: 15px 5px 15px 15px;
  }

  @media (max-width: 425px) and (min-width: 320px) {
    position: absolute;
    right: 0;
    margin-right: 7rem;
    margin-top: 1rem;
    visibility: ${props => props?.visible ? 'visible' : 'hidden'};
    opacity: ${props => props?.visible ? '1' : '0'};
    transform: translate(${props => props?.visible ? '0, 20px' : '0'});
    border-radius: 15px 5px 15px 15px;
  }
`

export default UsersContainer
