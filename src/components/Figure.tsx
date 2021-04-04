import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImageData } from 'gatsby-source-sanity'

interface Props {
  node: {
    asset: {
      _id: string
      _ref: string
    }
    alt: string
    caption: string
  }
}
const Figure: React.FC<Props> = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null
  }
  const gatsbyImageData = getGatsbyImageData(
    node,
    {
      placeholder: 'dominantColor',
      layout: 'constrained',
    },
    {
      projectId: process.env.GATSBY_SANITY_PROJECT_ID ?? 'kb6eepmw',
      dataset: process.env.GATSBY_SANITY_PROJECT_DATASET ?? 'production',
    }
  )
  return (
    <figure>
      {gatsbyImageData && (
        <GatsbyImage image={gatsbyImageData} alt={node.alt} />
      )}
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}

export default Figure
