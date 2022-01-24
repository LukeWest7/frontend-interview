import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens'

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  padding: 1.5rem;
  
  .modal-header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    
    &-avatar {
      width: 110px;
      height: 100px;
      border-radius: 100%;
      overflow: hidden;
      
      margin-right: 1rem;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
    
    &-description {
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      
      &__company {
        font-size: 14px;
        font-weight: 600;
      }
      
      &__detail {
        font-size: 14px;
        
        p {
          margin-bottom: .5rem;
        }
      }
    }
    
    &-loan {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-left: 1rem;
      flex: auto 0 0;
      
      &__amount {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 1rem;
        
        small {
          display: block;
          font-size: 12px;
          font-weight: 400;
          color: #737373;
        }
      }
      
      &-details {
        display: flex;
        flex-direction: column;
        
        ${deviceBreakpoint.desktop.lg} {
          flex-direction: row;          
        }
        
        &__item {
          small {
            display: block;
            font-size: 12px;
            font-weight: 400;
            color: #737373;
          }
          
          p {
            margin: .25rem 0;
          }
        }
      }
    }
  }
  
  .modal-header__action {
    a {
      cursor: pointer;
      color: #737373;
      font-size: 18px;
    }
  }
`

export default ModalHeader