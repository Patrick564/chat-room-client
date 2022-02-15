import styled, { keyframes } from 'styled-components'

const showMessage = keyframes`
  from {
    transform: scale(0);
  }
  
  to {
    transform: scale(1.0);
  }
`

const Message = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #1d4ed8;
  padding: 10px 15px;
  border-radius: 15px 15px ${props => props?.alignDir ? '5px' : '15px'} ${props => props?.alignDir ? '15px' : '5px'};
  background: #2563eb;
  color: white;
  max-width: 400px;
  text-align: ${props => props?.alignDir ? 'right' : 'left'};
  align-self: ${props => props?.alignDir ? 'flex-end' : 'flex-start'};
  animation: ${showMessage} 0.25s linear;
  animation-delay: -0.1s;
`

export default Message
