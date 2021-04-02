import React from 'react'
import SEO from '../components/SEO'
import About from '../components/about'
import Hero from '../components/hero'
import Experience from '../components/experience'
import { SideIconNav } from '../components/IconNav'

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <SideIconNav />
    <Hero />
    <About />
    <Experience />
  </>
)

export default IndexPage
