import React, { useState } from 'react'
import { Link } from 'gatsby'
import { MdClear, MdHome, MdMenu } from 'react-icons/md'
import { CgFileDocument } from 'react-icons/cg'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { IconStyles } from '../styles/common-styles'

const HeaderStyles = styled.header`
  background: ${props => props.theme.palette.primary.light};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  svg {
    ${IconStyles}
    cursor: pointer;
  }
`

const NavStyles = styled.nav`
  position: relative;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => props.theme.breakpoints.up('md')} {
    padding: 10px 50px;
  }
  .menu-enter {
    right: -500px;
  }
  .menu-enter-active {
    right: 0;
    transition: right 200ms;
  }
  .menu-exit {
    right: 0;
  }
  .menu-exit-active {
    right: -500px;
    transition: right 200ms;
  }
`

const NavLinkStyles = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  margin: 0;
  li {
    margin: 0 10px 0;
  }
  ${props => props.theme.breakpoints.up('md')} {
    display: flex;
  }
`

const MobileNavLinkStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 100px 30px;
  li {
    font-size: 20px;
    margin: 0 10px 0;
  }
`

const MobileMenuIcon = styled(MdMenu)`
  display: block;
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

const MobileClearMenuIcon = styled(MdClear)`
  position: absolute;
  right: 30px;
  top: 20px;
`

const GreyContainer = styled.div<{ $display: boolean }>`
  display: ${props => (props.$display ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  cursor: pointer;
`

const Panel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100vh;
  background-color: ${props => props.theme.palette.primary.light};
  box-shadow: rgba(0, 0, 0, 0.22) 0px 11px 23px 5px;
  z-index: 2;
`

interface Props {
  siteTitle?: string
}

const Links: React.FC = () => (
  <>
    <li>About</li>
    <li>Experience</li>
    <li>Projects</li>
    <li>Blog</li>
    <li>Contact</li>
    <CgFileDocument />
  </>
)

const Header: React.FC<Props> = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <HeaderStyles>
      <NavStyles>
        <Link to="/">
          <MdHome />
        </Link>
        <NavLinkStyles>
          <Links />
        </NavLinkStyles>
        <MobileMenuIcon onClick={() => setOpenMenu(true)} />
        <CSSTransition
          in={openMenu}
          onExited={() => setOpenMenu(false)}
          unmountOnExit
          classNames="menu"
          timeout={300}
        >
          <Panel>
            <MobileClearMenuIcon onClick={() => setOpenMenu(false)} />
            <MobileNavLinkStyles>
              <Links />
            </MobileNavLinkStyles>
          </Panel>
        </CSSTransition>
      </NavStyles>
      <GreyContainer $display={openMenu} onClick={() => setOpenMenu(false)} />
    </HeaderStyles>
  )
}

export default Header
