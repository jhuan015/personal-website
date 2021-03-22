import React from 'react'
import { Link } from 'gatsby'
import { MdHome } from 'react-icons/md'
import { CgFileDocument } from 'react-icons/cg'
import styled from 'styled-components'
import { IconStyles } from '../styles/common-styles'

const HeaderStyles = styled.header`
  background: ${props => props.theme.palette.primary.light};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  svg {
    ${IconStyles}
  }
`

const NavStyles = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
`

const NavLinkStyles = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  li {
    margin: 0 10px 0;
  }
`

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = () => (
  <HeaderStyles>
    <NavStyles>
      <Link to="/">
        <MdHome />
      </Link>
      <NavLinkStyles>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact</li>
        <CgFileDocument />
      </NavLinkStyles>
    </NavStyles>
  </HeaderStyles>
)

export default Header
