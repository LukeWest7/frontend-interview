import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../tokens'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: ${zindex[4]};
  
  width: 100%;
  height: 100%;
  
  background-color: black;
  opacity: 0.5;
  inset: 0px;
`

export default ModalOverlay
