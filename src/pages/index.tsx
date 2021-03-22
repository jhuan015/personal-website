import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/SEO'
import About from '../components/about'
import Hero from '../components/hero'

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <Hero />
    {/* <About />
    <StaticImage src="../assets/images/tomorrowland.jpg" alt="tomorrowland" /> */}
  </>
)

export default IndexPage
