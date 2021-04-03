import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { ContrastIconButton, DarkIconButton } from '../styles/CommonStyles'
import { CgFileDocument } from 'react-icons/cg'

const IconContainerStyles = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  width: 40px;
  background-color: transparent;
  bottom: 45%;
  left: 20px;
  right: auto;
  box-shadow: none;
  svg {
    ${ContrastIconButton}
  }
  a {
    position: relative;
    transition: bottom ease-in 300ms;
    :focus,
    :hover {
      bottom: 5px;
    }
  }
  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
`

const MobileBottomNavStyles = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: ${props => props.theme.palette.primary.light};
  z-index: 10;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
  svg {
    ${DarkIconButton}
  }
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

export const socialLinks = [
  {
    name: 'linkedin',
    src: 'https://www.linkedin.com/in/jonshuang/',
    icon: <FaLinkedin />,
  },
  {
    name: 'github',
    src: 'https://github.com/jhuan015',
    icon: <FaGithub />,
  },
  {
    name: 'instagram',
    src: 'https://www.instagram.com/joncaekk/',
    icon: <FaInstagram />,
  },
  {
    name: 'resume',
    src: '/Jonathan Huang - Resume.pdf',
    icon: <CgFileDocument />,
  },
]

// Side icon nav menu
export const SideIconNav: React.FC = () => (
  <IconContainerStyles>
    {socialLinks.map(social => (
      <a target="_blank" rel="noreferrer" href={social.src} key={social.name}>
        {social.icon}
      </a>
    ))}
  </IconContainerStyles>
)

// Mobile bottom nav menu
const MobileBottomNav: React.FC = () => (
  <MobileBottomNavStyles>
    {socialLinks.map(social => (
      <a target="_blank" rel="noreferrer" href={social.src} key={social.name}>
        {social.icon}
      </a>
    ))}
  </MobileBottomNavStyles>
)

export default MobileBottomNav
