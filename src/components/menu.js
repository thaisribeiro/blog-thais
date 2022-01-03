import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Burger from './burger'

import './menu.css'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #E1C340;
  opacity: 0.9;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 60vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.4s ease-in-out;
  height: 30%;
  @media (max-width: 1024px) {
    padding: 4rem;
  }

  @media (max-width: 576px) {
      width: 100%;
      padding: 0
    }
  
  a {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    margin-top: 6px;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`

const Menu = ({ open }) => {
  const { site } = useStaticQuery(
    graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						menuLinks {
              name
              link
            }
					}
				}
			}
		`
  )
  const { menuLinks } = site.siteMetadata
  return (
    <StyledMenu open={open}>
      {menuLinks.map(link => (
        <a href={link.link}>
          <span role="img" aria-label="about us"></span>
          {link.name}
        </a>
      ))}
    </StyledMenu>
  )
}


function MenuHeader() {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>

  )
}

export default MenuHeader
