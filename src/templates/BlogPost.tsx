import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlockContent from '@sanity/block-content-to-react'
import { Query } from '../../graphql-types'
import Figure from '../components/Figure'
// import Container from '../components/container'
// import SEO from '../components/seo'
// import { toPlainText } from '../lib/helpers'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          gatsbyImageData(
            aspectRatio: 3.6
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
          altText
        }
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        image {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
        }
        name
      }
    }
  }
`

const serializers = {
  types: {
    image: Figure,
  },
}

interface Props {
  data: Query
}
const BlogPost: React.FC<Props> = props => {
  const { data } = props
  const post = data && data.sanityPost
  return (
    <>
      {/* {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )} */}
      <article>
        <GatsbyImage
          key={post?.id}
          alt={post?.mainImage?.asset?.altText ?? `${post?.title} main image`}
          image={post?.mainImage?.asset?.gatsbyImageData}
        />
        <div>
          <h1>{post?.title}</h1>
          <BlockContent
            blocks={post?._rawBody}
            serializers={serializers}
            projectId={process.env.GATSBY_SANITY_PROJECT_ID}
            dataset={process.env.GATSBY_SANITY_PROJECT_DATASET}
          />
          {post?.categories?.map(category => (
            <li key={category?._id}>{category?.title}</li>
          ))}
        </div>
      </article>
    </>
  )
}

export default BlogPost
