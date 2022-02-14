import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  justify-content: flex-end;
  justify-items: center;

  height: 700px;
  border: 1px solid black;
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 0 3px #0f172a;
  background: #334155;

  @media (max-width: 1024px) and (min-width: 426px) {
    grid-column-start: 2;
  }
`

export default Container
