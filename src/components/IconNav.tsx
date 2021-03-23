import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { IconStyles } from '../styles/common-styles'

const IconContainerStyles = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.palette.primary.light};
  z-index: 1;
  svg {
    ${IconStyles}
  }
  ${props => props.theme.breakpoints.up('sm')} {
    width: 40px;
    background-color: transparent;
    display: block;
    bottom: 45%;
    left: 20px;
    right: auto;
    svg {
      ${IconStyles}
    }
  }
`

const IconNav: React.FC = () => {
  return (
    <IconContainerStyles>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jonshuang/"
      >
        <FaLinkedin />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/jhuan015">
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/joncaekk/"
      >
        <FaInstagram />
      </a>
    </IconContainerStyles>
  )
}

export default IconNav
