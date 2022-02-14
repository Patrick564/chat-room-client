import styled from 'styled-components'

const Message = styled.li`
  border: 1px solid #1d4ed8;
  padding: 10px 15px;
  border-radius: 15px 15px ${props => props?.alignDir ? '5px' : '15px'} ${props => props?.alignDir ? '15px' : '5px'};
  background: #2563eb;
  color: white;
  max-width: 400px;
  text-align: ${props => props?.alignDir ? 'right' : 'left'};
  align-self: ${props => props?.alignDir ? 'flex-end' : 'flex-start'};
`

export default Message
