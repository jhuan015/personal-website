import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { IconStyles } from '../styles/common-styles'
import { Link } from 'gatsby'

const IconContainerStyles = styled.div`
  width: 40px;
  position: fixed;
  bottom: 50%;
  left: 20px;
  right: auto;
  z-index: 1;
  svg {
    ${IconStyles}
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
