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
  background-color: ${props => props.theme.palette.primary.light};
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  box-shadow: 0 0 0 rgb(0 0 0 / 0%);
  border-radius: 10px;
  opacity: 0.9;
  height: 350px;
  & [data-gatsby-image-wrapper] {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
  }
  :hover {
    transform: translateX(-7px);
    box-shadow: 1px 2px 10px rgb(0 0 0 / 18%);
  }
`

const PostContent = styled.div`
  margin: 10px;
  h2 {
    font-weight: 800;
  }
`

const BlogStyles = styled.article`
  display: block;
  max-width: 100vw;
  margin: 0 auto;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 10px;
  align-items: flex-end;
`

interface Props {
  data: Query
}
const BlogPage: React.FC<Props> = ({ data }) => {
  const blogPosts = data.allSanityPost.nodes.map(post => (
    <Link key={post.id} to={`/blog/${post.slug?.current}`}>
      <PostContainer className="postContainer">
        <GatsbyImage
          image={post.mainImage?.asset?.gatsbyImageData}
          alt={post.mainImage?.asset?.title ?? 'Blog Post'}
        />
        <PostContent>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          {/* Add Tags */}
          <p>
            Published{' '}
            {formatDistance(new Date(post.publishedAt), new Date(), {
              addSuffix: true,
            })}
          </p>
        </PostContent>
      </PostContainer>
    </Link>
  ))

  return (
    <>
      <SEO title="Blog" />
      {/* Replace with author side panel?? */}
      <IconNav />
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
        <div>
          <h1>Blog Posts</h1>
          <BlogPostContainer>{blogPosts}</BlogPostContainer>
        </div>
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
              gatsbyImageData(width: 100, placeholder: DOMINANT_COLOR)
            }
          }
          name
        }
        id
        mainImage {
          asset {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              # width: 300
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
  }
`
