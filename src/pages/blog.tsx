import { formatDistance } from 'date-fns'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Query } from '../../graphql-types'
import AuthorSidePanel from '../components/AuthorSidePanel'
import IconNav from '../components/IconNav'
import SEO from '../components/SEO'

const PostContainer = styled.div`
  display: block;
  background-color: ${props => props.theme.palette.primary.main};
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  border-radius: 10px;
  height: 400px;
  & [data-gatsby-image-wrapper] {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
  }
  :hover {
    transform: translateX(-7px);
  }
`

const PostContent = styled.div`
  margin: 10px;
  h2 {
    font-weight: 800;
  }
`

const HeroImageStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  [data-gatsby-image-wrapper] {
    height: 300px;
    width: 100%;
    :before {
      z-index: 1;
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    ${props => props.theme.breakpoints.up('md')} {
      height: 400px;
    }
  }
  h1 {
    position: absolute;
    z-index: 1;
    font-size: 40px;
    text-align: center;
  }
`

const BlogStyles = styled.article`
  display: block;
  max-width: 100vw;
  margin: -100px auto 0;
  padding: 16px 32px;
  ${props => props.theme.breakpoints.up('md')} {
    display: grid;
    grid-template-columns: 1.5fr 4fr;
    gap: 15px;
  }
  ${props => props.theme.breakpoints.up('lg')} {
    max-width: 90vw;
  }
`

const BlogPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
  a {
    z-index: 2;
    outline-offset: 7px;
  }
  ${props => props.theme.breakpoints.up('sm')} {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
  }
  ${props => props.theme.breakpoints.up('lg')} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const DateStyles = styled.p`
  color: ${props => props.theme.palette.primary.light};
`

interface Props {
  data: Query
}
const BlogPage: React.FC<Props> = ({ data }) => {
  const blogPosts = data.allSanityPost.nodes.map(post => (
    <Link key={post.id} to={`/blog/${post.slug?.current}`}>
      <PostContainer>
        <GatsbyImage
          image={post.mainImage?.asset?.gatsbyImageData}
          alt={post.mainImage?.asset?.title ?? 'Blog Post'}
        />
        <PostContent>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          {/* Add Tags */}
          <DateStyles>
            Published{' '}
            {formatDistance(new Date(post.publishedAt), new Date(), {
              addSuffix: true,
            })}
          </DateStyles>
        </PostContent>
      </PostContainer>
    </Link>
  ))

  const heroImage = (
    <HeroImageStyles>
      <GatsbyImage
        image={data.allFile.edges[0].node.childImageSharp?.gatsbyImageData}
        alt={data.allFile.edges[0].node.name ?? 'Blog Hero Image'}
      />
      <h1>Blog Posts</h1>
    </HeroImageStyles>
  )

  return (
    <>
      <SEO title="Blog" />
      <IconNav />
      {heroImage}
      <BlogStyles>
        <AuthorSidePanel
          authorImageAlt={
            data.allSanityPost.nodes[0].author?.name ?? 'Jonathan Huang Image'
          }
          authorImageSrc={
            data.allSanityPost.nodes[0].author?.image?.asset?.gatsbyImageData
          }
          backHref="/"
          backText="To Homepage"
          title={<h1>Blog Posts</h1>}
        />
        <BlogPostContainer>{blogPosts}</BlogPostContainer>
      </BlogStyles>
    </>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allSanityPost(sort: { order: DESC, fields: _createdAt }) {
      nodes {
        author {
          image {
            asset {
              _id
              gatsbyImageData(width: 160, placeholder: DOMINANT_COLOR)
            }
          }
          name
        }
        id
        mainImage {
          asset {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              layout: FULL_WIDTH
              aspectRatio: 1.50
            )
            title
          }
        }
        slug {
          current
        }
        categories {
          _id
          title
        }
        excerpt
        title
        publishedAt
      }
    }
    allFile(filter: { name: { eq: "bloghero" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              height: 300
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`
