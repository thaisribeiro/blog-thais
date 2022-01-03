import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.button`
  top: 4%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  z-index: 350;

  &:focus {
    outline: none;
  }

  div {
    width: 3.53rem;
    height: 0.45rem;
    background: ${({ open }) => open ? '#000000' : '#FFFFFF'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 8px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 576px) {
    div {
      transform-origin: 11px;
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger