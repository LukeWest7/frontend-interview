import styled from 'styled-components'
import { zindex } from '../../tokens'

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  
  width: 100%;
  z-index: ${zindex[5]};
`

export default ModalContainer
