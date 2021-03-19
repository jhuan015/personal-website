import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>
    <StaticImage src="../images/tomorrowland.jpg" alt="tomorrowland" />
  </Layout>
)

export default IndexPage
