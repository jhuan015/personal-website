import React, { useMemo } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { FilledButton } from '../styles/CommonStyles'

const HeroStyles = styled.section`
  display: flex;
  height: 98vh;
  background-color: ${props => props.theme.palette.primary.main};
  h1 {
    font-size: clamp(45px, 8vw, 80px);
    font-weight: 800;
    padding-bottom: 30px;
  }
  h4 {
    font-size: clamp(25px, 4vw, 40px);
  }
  p {
    max-width: 600px;
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
    color: ${props => props.theme.palette.primary.light};
    ${props => props.theme.breakpoints.up('md')} {
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

const DetailText = styled.p`
  margin-bottom: 20px;
`

const wordList = [
  'Technology',
  'Gaming',
  'Science',
  'Good food',
  'Music festivals',
  'Travel',
  'Environmental issues',
  'Movies',
]

// Knuth shuffle
function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

const Hero: React.FC = () => {
  React.useEffect(() => {
    // Slide up animation
    anime({
      targets: '.slideUp span',
      keyframes: [
        { translateY: 50, opacity: 0, duration: 0 },
        { translateY: 0, opacity: 1, duration: 500 },
        { translateY: -50, opacity: 0, delay: 3000, duration: 500 },
      ],
      easing: 'linear',
      delay: anime.stagger(3500, { start: 0 }),
      loop: true,
    })
  }, [])

  const randomizeWordList = useMemo(() => shuffle(wordList), [wordList])

  return (
    <HeroStyles>
      <HeroContainer>
        <IntroText>Hi there 👋, my name is</IntroText>
        <h1>Jonathan Huang</h1>
        <InterestText>
          Thing&apos;s that interest me are&nbsp;
          <SlidingText className="slideUp">
            {randomizeWordList.map((word, i) => {
              return <span key={i}>{word}</span>
            })}
          </SlidingText>
        </InterestText>
        <DetailText>
          I&apos;m a software engineer based in Southern California specializing
          in front end development.
        </DetailText>
        <div>
          <FilledButton href="mailto:jhuan015@ucr.edu?subject=Hi there">
            Contact Me
          </FilledButton>
        </div>
      </HeroContainer>
    </HeroStyles>
  )
}

export default Hero
