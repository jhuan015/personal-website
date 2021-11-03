import React from 'react'
import styled from 'styled-components'
import PictureSlide from './pictureSlide'

const AboutStyles = styled.section`
  padding: 0px 25px;
  margin: 50px auto;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px 50px;
  grid-template:
    'title'
    'pic'
    'details';
  .gatsby-image-wrapper {
    margin: 0 15vw;
  }
  ${props => props.theme.breakpoints.up('md')} {
    display: grid;
    max-width: 1000px;
    margin: 100px auto;
    padding: 0 100px;
    grid-template:
      'title title title title'
      'pic details details details';
    grid-template-columns: 1fr 3fr;
    .gatsby-image-wrapper {
      margin: 0;
      max-width: 250px;
    }
  }
`

const TitleStyles = styled.h1`
  text-align: center;
  grid-area: title;
  ${props => props.theme.breakpoints.up('md')} {
    text-align: left;
  }
`

const PictureSlideStyles = styled(PictureSlide)`
  grid-area: pic;
`

const DetailsStyles = styled.div`
  grid-area: details;
  a {
    :focus,
    :hover {
      color: ${props => props.theme.palette.primary.contrast};
      fill: ${props => props.theme.palette.primary.contrast};
    }
  }
`

const About: React.FC = () => {
  return (
    <AboutStyles id="about">
      <TitleStyles>About Me</TitleStyles>
      <PictureSlideStyles />
      <DetailsStyles>
        <p>
          I am a Taiwanese American full stack JavaScript engineer with
          experience working with a variety of technologies including React,
          TypeScript, Apollo GraphQL, Redux, NodeJS, Express, and SQL and NoSQL
          databases.
        </p>
        <p>
          I currently work for{' '}
          <a target="_blank" rel="noreferrer" href="https://junipersquare.com">
            <b>Juniper Square</b>
          </a>{' '}
          on the documents team. We faciliate easier ways to compose emails and
          generating PDFs to enhance document workflows.
        </p>
        <p>
          I graduated from the University of California Riverside in 2011 with a
          Bachelor&apos;s degree in Environmental Science. I previously worked
          in a water quality laboratory and quickly found that the routine
          laboratory work didn&apos;t suit me.
        </p>
        <p>
          I&apos;ve been interested in technology every since I was a kid
          setting up with my first Counter-Strike server with mods to impress my
          friends. The game I&apos;ve probably played the most in my life is
          DOTA.
        </p>
        <p>
          I enjoy traveling abroad and attending different music festivals
          throughout the world.
        </p>
      </DetailsStyles>
    </AboutStyles>
  )
}

export default About
