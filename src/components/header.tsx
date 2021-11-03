import React, { useState } from 'react'
import { Link } from 'gatsby'
import { MdClear, MdMenu } from 'react-icons/md'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { DarkIconButton, FilledButton } from '../styles/CommonStyles'
import useLockBodyScroll from '../hooks/useLockBodyScroll'

const FilledButtonStyles = styled(FilledButton)`
  margin: 0 10px;
  padding: 8px 16px;
`

const HeaderStyles = styled.header`
  background: ${props => props.theme.palette.primary.main};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  svg {
    ${DarkIconButton};
  }
  li {
    :focus,
    :hover {
      color: ${props => props.theme.palette.primary.contrast};
      fill: ${props => props.theme.palette.primary.contrast};
    }
  }
`

const NavStyles = styled.nav`
  position: relative;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: 800;
    color: inherit;
  }
  ${props => props.theme.breakpoints.up('md')} {
    padding: 10px 50px 10px 20px;
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
  display: flex;
  align-items: flex-end;
  flex-direction: column;
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
  z-index: 9;
  cursor: pointer;
`

const Panel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  background-color: ${props => props.theme.palette.primary.main};
  box-shadow: rgba(0, 0, 0, 0.22) 0px 11px 23px 5px;
  z-index: 10;
`

interface Props {
  siteTitle?: string
}

const Links: React.FC = () => (
  <>
    <a href="/#about">
      <li>About</li>
    </a>
    <a href="/#experience">
      <li>Experience</li>
    </a>
    {/* <a href="/#projects">
      <li>Projects</li>
    </a> */}
    <a href="/blog">
      <li>Blog</li>
    </a>
    <FilledButtonStyles href="mailto:jhuan015@ucr.edu?subject=Hi there">
      Contact Me
    </FilledButtonStyles>
  </>
)

const MobileHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useLockBodyScroll()
  return (
    <Panel>
      <MobileClearMenuIcon onClick={() => onClose()} />
      <MobileNavLinkStyles>
        <Links />
      </MobileNavLinkStyles>
    </Panel>
  )
}

const Header: React.FC<Props> = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <HeaderStyles>
      <NavStyles>
        <Link to="/">
          <h3>{'<jh />'}</h3>
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
          <MobileHeader onClose={() => setOpenMenu(false)} />
        </CSSTransition>
      </NavStyles>
      <GreyContainer $display={openMenu} onClick={() => setOpenMenu(false)} />
    </HeaderStyles>
  )
}

export default Header
