import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 3rem 1fr 1fr;
  position: static;
  
  @media (max-width: 1024px) and (min-width: 426px) {
    display: flex;
    flex-direction: column;
    margin: 0 3rem;
  }

  @media (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`

export default Wrapper