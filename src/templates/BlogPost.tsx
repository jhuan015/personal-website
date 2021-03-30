import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlockContent from '@sanity/block-content-to-react'
import { Query } from '../../graphql-types'
import Figure from '../components/Figure'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'
import { IconButton } from '../styles/CommonStyles'
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
          asset {
            _id
            gatsbyImageData(width: 150, placeholder: DOMINANT_COLOR)
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

const BlogPostStyles = styled.section`
  display: block;
  ${props => props.theme.breakpoints.up('md')} {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
`

const AuthorPanel = styled.aside`
  display: none;
  height: 900px;
  position: sticky;
  top: 69px;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 50px;
  background-color: ${props => props.theme.palette.primary.dark};
  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
    margin-bottom: 20px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    svg {
      ${IconButton};
      :hover {
        color: ${props => props.theme.palette.primary.contrast};
        fill: ${props => props.theme.palette.primary.contrast};
      }
    }
  }
`

const ArticleContent = styled.div`
  padding: 0 50px;
`

const SmallAuthor = styled.div`
  display: flex;
  gap: 10px;
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
    width: 100px;
  }
`

interface Props {
  data: Query
}
const BlogPost: React.FC<Props> = props => {
  const { data } = props
  const post = data && data.sanityPost
  return (
    <BlogPostStyles>
      {/* {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )} */}
      <AuthorPanel>
        <nav>
          <GatsbyImage
            alt={post?.author?.image?.asset?.altText ?? 'Jonathan Huang Image'}
            image={post?.author?.image?.asset?.gatsbyImageData}
          />
          <h3>Hi! I&apos;m Jonathan</h3>
          <p>
            {' '}
            I&apos;m a software engineer based in Irvine, CA specializing in
            front end development.
          </p>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jonshuang/"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/jhuan015"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/joncaekk/"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </AuthorPanel>
      <article>
        <GatsbyImage
          key={post?.id}
          alt={post?.mainImage?.asset?.altText ?? `${post?.title} main image`}
          image={post?.mainImage?.asset?.gatsbyImageData}
        />
        <SmallAuthor>
          <GatsbyImage
            alt={post?.author?.image?.asset?.altText ?? 'Jonathan Huang Image'}
            image={post?.author?.image?.asset?.gatsbyImageData}
          />
          <h4>Jonathan Huang</h4>
        </SmallAuthor>
        <ArticleContent>
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
        </ArticleContent>
      </article>
    </BlogPostStyles>
  )
}

export default BlogPost
