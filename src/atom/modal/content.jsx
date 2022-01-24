import styled from 'styled-components'

const ModalContent = styled.div`
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  
  padding: 1.5rem;
  text-align: left;
  
  > table {
    width: 100%;
    border-collapse: collapse;
    
    thead {
      tr {
        th {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    
    tbody {
      box-shadow: inset 0px 5px 16px 0px rgba(173, 200, 215, 0.25);
      
      tr {
        td {
          font-size: 14px;
          border: 1.75rem solid transparent;
        }
      }
    }
  }
`

export default ModalContent