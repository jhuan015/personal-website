import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import sanityConfig from '../sanityConfig'

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
    sanityConfig
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
