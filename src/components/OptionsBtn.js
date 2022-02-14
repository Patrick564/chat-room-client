import styled from 'styled-components'

const OptionBtn = styled.div`
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

export default OptionBtn
