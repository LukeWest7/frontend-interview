import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../tokens'

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 100%;
  z-index: ${zindex[5]};
  
  border: 1px solid white;
  background-color: white;
  box-shadow: 0px 5px 16px 0px rgba(173, 200, 215, 0.25);

  transform: translateY(50px);
  opacity: 1;
  border-radius: 1.5rem;
  transition: all 0.25s;
  
  ${deviceBreakpoint.desktop.lg} {
    width: 680px;
  }
`

export default ModalContainer
