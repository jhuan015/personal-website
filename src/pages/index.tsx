import React from 'react'
import SEO from '../components/SEO'
import About from '../components/about'
import Hero from '../components/hero'

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
  </>
)

export default IndexPage
