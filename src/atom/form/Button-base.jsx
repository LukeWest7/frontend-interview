import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'

const ButtonBase = ({ children, ...buttonProps }) => {
  const ButtonBase = styled.button`
    background-color: var(--color-denim-15);
    border: 2px solid transparent;
    line-height: 24px;
    border-radius: 8px;
    color: var(--color-white-100);
    font-weight: bold;
    padding: 8px 24px;
    text-align: center;
    white-space: nowrap;
    transition: background-color 0.3s;
    
    &:focus {
      box-shadow: 0 0px 0 2px var(--color-denim-65);
      outline: none;
    }

    &:hover:not(:disabled) {
      background-color: var(--color-denim-30);
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    &:active {
      background-color: var(--color-denim-25);
      box-shadow: inset 0px 0px 15px rgba(12, 35, 64, 0.4);
      transition: box-shadow 0.3s;
    }
    
    &:disabled {
      opacity: 0.5;
    }
  `

  return (
      <ButtonBase
        { ...buttonProps }
      >
        { children }
      </ButtonBase>
  )
}

export default ButtonBase