import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import { ContrastIconButton, DarkIconButton } from '../styles/CommonStyles'
import { socialLinks } from './IconNav'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

const SidePanelStyles = styled.aside`
  z-index: 2;
  display: none;
  height: 60vh;
  position: sticky;
  top: 69px;
  left: 0;
  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
`

const LinkStyles = styled(Link)`
  display: flex;
  align-items: center;
  transition: transform 250ms;
  margin: 10px;
  svg {
    ${DarkIconButton}
    padding: 5px;
  }
  :hover {
    transform: translateY(-5px);
    svg {
      transform: translateX(-5px);
      fill: ${props => props.theme.palette.primary.dark};
    }
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.theme.palette.primary.light};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 25px;
  margin: 15px;
  .gatsby-image-wrapper {
    padding: 30px;
    margin: 30px;
    overflow: visible;
    width: 100%;
    max-width: 100px;
    & [data-main-image] {
      border-radius: 50%;
      border: 4px solid ${props => props.theme.palette.primary.dark};
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    svg {
      ${ContrastIconButton};
    }
  }
`

interface Props {
  authorImageAlt: string
  authorImageSrc: IGatsbyImageData
  title: React.ReactNode
  subtitle?: React.ReactNode
  backHref: string
  backText: string
}
const AuthorSidePanel: React.FC<Props> = ({
  authorImageAlt,
  authorImageSrc,
  backHref,
  backText,
  subtitle,
  title,
}) => {
  return (
    <SidePanelStyles>
      <nav>
        <NavContainer>
          {title}
          {subtitle}
          <LinkStyles to={backHref}>
            <IoMdArrowBack /> {backText}
          </LinkStyles>
        </NavContainer>
        <NavContainer>
          <GatsbyImage alt={authorImageAlt} image={authorImageSrc} />
          <h3>Hi, I&apos;m Jonathan!</h3>
          <p className="center">
            {' '}
            I&apos;m a software engineer based in Irvine, CA specializing in
            front end development.
          </p>
          <ul>
            {socialLinks.map(social => (
              <li key={social.name}>
                <a target="_blank" rel="noreferrer" href={social.src}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </NavContainer>
      </nav>
    </SidePanelStyles>
  )
}

export default AuthorSidePanel
