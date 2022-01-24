import styled from 'styled-components'
import { deviceBreakpoint } from '../tokens'

const ListGroup = styled.ul`
  display: block; 
  padding: 20px;

  border: 1px solid white;
  background-color: white;
  box-shadow: 0px 5px 16px 0px rgba(173, 200, 215, 0.25);
  border-radius: 10px;
  margin-bottom: 1.5rem;

  transition: border 0.35s ease-in-out, color 0.35s ease-in-out;

  ${deviceBreakpoint.desktop.lg} {
    display: grid;
    grid-template-columns: 20% 20% auto 10% 12.5% 12.5%;
  }
  
  &:hover {
    cursor: pointer;
    border-color: #eee;
    pointer-events: all;
  }
  
  > li {
    padding: 0 15px;
    list-style-type: none;
    margin-bottom: 1rem;

    ${deviceBreakpoint.desktop.lg} {
      border-right: 1px solid #eee;
      text-align: left;
      margin-bottom: 0;
    }
    
    &:last-child {
      border-right: none;
    }
    
    > sub {
      display: block;
      font-size: 0.8rem;
      color: #999;
      margin-bottom: 5px;
    }
  }
`

export default ListGroup