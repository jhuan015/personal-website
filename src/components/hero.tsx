import React from 'react'
import styled from 'styled-components'
import anime from 'animejs'

const HeroStyles = styled.section`
  display: flex;
  height: 98vh;
  background-color: ${props => props.theme.palette.primary.light};
  h1 {
    font-size: clamp(45px, 8vw, 80px);
    font-weight: 800;
    padding-bottom: 30px;
  }
  h4 {
    font-size: clamp(25px, 4vw, 40px);
  }
  p {
    max-width: 550px;
  }
`

const IntroText = styled.h4`
  font-size: clamp(25px, 4vw, 40px);
  margin-bottom: 25px;
`

const HeroContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 25px;
  margin: 0px auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  ${props => props.theme.breakpoints.up('sm')} {
    padding: 0 100px;
  }
`

const SlidingText = styled.div`
  display: inline;
  span {
    display: block;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    font-weight: 800;
    margin-bottom: 10px;
    color: ${props => props.theme.palette.primary.dark};
    ${props => props.theme.breakpoints.up('sm')} {
      display: inline;
      margin-left: 5px;
    }
  }
`

const InterestText = styled.h4`
  opacity: 0.8;
  margin-bottom: 50px;
  ${props => props.theme.breakpoints.up('sm')} {
    margin-bottom: 25px;
  }
`

const wordList = [
  'Coding',
  'Gaming',
  'Science',
  'Music Festivals',
  'Travel',
  'The Environment',
  'Movies',
]

const Hero: React.FC = () => {
  React.useEffect(() => {
    // Slide up animation
    anime({
      targets: '.slideUp span',
      keyframes: [
        { translateY: 50, opacity: 0, duration: 0 },
        { translateY: 0, opacity: 1, duration: 350 },
        { translateY: -50, opacity: 0, delay: 3000, duration: 350 },
      ],
      easing: 'linear',
      delay: anime.stagger(3500, { start: 0 }),
      loop: true,
    })
  }, [])

  return (
    <HeroStyles>
      <HeroContainer>
        <IntroText>Hey👋, my name is</IntroText>
        <h1>Jonathan Huang</h1>
        <InterestText>
          Thing&apos;s that interest me are
          <SlidingText className="slideUp">
            {wordList.map((word, i) => {
              return <span key={i}>{word}</span>
            })}
          </SlidingText>
        </InterestText>
        <p>
          I&apos;m a software engineer based in Irvine, CA specializing in front
          end development.
        </p>
      </HeroContainer>
    </HeroStyles>
  )
}

export default Hero
