import { graphql, useStaticQuery } from 'gatsby'
import React, { useCallback, useEffect, useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Query } from '../../graphql-types'
import styled from 'styled-components'

const GatsbyImageStyled = styled(GatsbyImage)`
  border-radius: 6px;
`

const PictureSlide: React.FC = () => {
  const [index, setIndex] = useState(0)
  const data: Query = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "bg" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 600
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)
  const length = data.allFile.edges.length - 1
  const nextSlide = useCallback(
    () => (index === length ? setIndex(0) : setIndex(index + 1)),
    [index]
  )
  const { node } = data.allFile.edges[index]

  useEffect(() => {
    const interval = window.setInterval(() => {
      nextSlide()
    }, 5000)
    return () => window.clearInterval(interval)
  }, [nextSlide])

  return (
    <GatsbyImageStyled
      key={node.id}
      alt={node.name}
      image={node.childImageSharp?.gatsbyImageData}
    />
  )
}

export default PictureSlide
