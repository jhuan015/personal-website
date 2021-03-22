import React from 'react'
import styled from 'styled-components'

const HeroStyles = styled.section`
  height: 420px;
  padding: 200px 0px 50px 30px;
  background-color: ${props => props.theme.palette.primary.light};
  h1 {
    font-size: clamp(50px, 8vw, 80px);
    font-weight: 800;
  }
  h4 {
    font-size: clamp(25px, 4vw, 40px);
    margin-bottom: 25px;
  }
  ${props => props.theme.breakpoints.up('sm')} {
    padding: 150px;
  }
  ${props => props.theme.breakpoints.up('md')} {
    padding: 250px;
  }
`

const Hero: React.FC = () => {
  return (
    <HeroStyles>
      <h4>Hey👋, my name is</h4>
      <h1>Jonathan Huang</h1>
      {/* <h3>Thing&apos;s that interest me are</h3> */}
    </HeroStyles>
  )
}

export default Hero
