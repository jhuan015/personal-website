import React from 'react'
import styled from 'styled-components'
import PictureSlide from './pictureSlide'

const AboutStyles = styled.section`
  padding: 0px 25px;
  margin: 100px 20px;
  justify-content: center;
  align-items: center;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr;
  p {
    line-height: 1.5;
  }
  .gatsby-image-wrapper {
    margin: 0 15vw;
  }
  ${props => props.theme.breakpoints.up('md')} {
    max-width: 1000px;
    margin: 100px auto;
    padding: 0 100px;
    grid-template-columns: 1fr 3fr;
    .gatsby-image-wrapper {
      margin: 0;
    }
  }
`

const About: React.FC = () => {
  return (
    <AboutStyles id="about">
      <PictureSlide />
      <div>
        <h1>About Me</h1>
        <p>
          I am a Taiwanese American full stack JavaScript engineer with
          experience working with a variety of technologies including React,
          TypeScript, Apollo GraphQL, Redux, NodeJS, Express, and SQL and NoSQL
          databases.
        </p>
        <p>
          I currently work for Verys on the Zenimax player experience team. We
          craft digital marketing experiences for the Bethesda.net digital
          platform for gaming brands such as Fallout, Elder Scrolls, DOOM, and
          Wolfenstein.
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
      </div>
    </AboutStyles>
  )
}

export default About
