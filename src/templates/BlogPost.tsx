import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlockContent from '@sanity/block-content-to-react'
import { formatDistance } from 'date-fns'
import styled from 'styled-components'
import { Query } from '../../graphql-types'
import Figure from '../components/Figure'
import { IconButton } from '../styles/CommonStyles'
import SEO from '../components/SEO'
import IconNav, { socialLinks } from '../components/IconNav'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      excerpt
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
            gatsbyImageData(width: 100, placeholder: DOMINANT_COLOR)
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
    grid-template-columns: 1fr 2fr;
  }
  ${props => props.theme.breakpoints.up('lg')} {
    grid-template-columns: 1fr 4fr;
  }
`

const AuthorPanel = styled.aside`
  display: none;
  height: 60vh;
  position: sticky;
  top: 69px;
  left: 0;
  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: ${props => props.theme.palette.primary.light};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 25px;
  margin: 15px;
  .gatsby-image-wrapper {
    padding: 30px;
    margin: 30px;
    overflow: visible;
    & [data-main-image] {
      border-radius: 50%;
      border: 4px solid ${props => props.theme.palette.primary.dark};
    }
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px;
`

const SmallAuthor = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 20px 0;
  .gatsby-image-wrapper {
    border-radius: 50%;
    width: 100px;
  }
  p {
    margin: 5px 0;
  }
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

const IconNavWrapper = styled.div`
  display: block;
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

interface Props {
  data: Query
}
const BlogPost: React.FC<Props> = props => {
  const { data } = props
  const post = data && data.sanityPost
  const publishedDate = formatDistance(
    new Date(post?.publishedAt),
    new Date(),
    {
      addSuffix: true,
    }
  )
  const updatedDate =
    post?._updatedAt &&
    formatDistance(new Date(post?._updatedAt), new Date(), {
      addSuffix: true,
    })

  return (
    <BlogPostStyles>
      {post && (
        <SEO
          title={post.title || 'Blog Post'}
          description={post?.excerpt || 'Blog post description'}
          image={post.mainImage?.asset?.gatsbyImageData.images.fallback.src}
        />
      )}
      <AuthorPanel>
        <nav>
          <NavContainer>
            <h1>{post?.title}</h1>
            <p>Published: {publishedDate}</p>
            {updatedDate && <p>Updated: {updatedDate}</p>}
          </NavContainer>
          <NavContainer>
            <GatsbyImage
              alt={
                post?.author?.image?.asset?.altText ?? 'Jonathan Huang Image'
              }
              image={post?.author?.image?.asset?.gatsbyImageData}
            />
            <h3>Hi! I&apos;m Jonathan</h3>
            <p>
              {' '}
              I&apos;m a software engineer based in Irvine, CA specializing in
              front end development.
            </p>
            <ul>
              {socialLinks.map(social => (
                <li key={social.name}>
                  <a target="_blank" rel="noreferrer" href={social.src}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </NavContainer>
        </nav>
      </AuthorPanel>
      <article>
        <GatsbyImage
          key={post?.id}
          alt={post?.mainImage?.asset?.altText ?? `${post?.title} main image`}
          image={post?.mainImage?.asset?.gatsbyImageData}
        />
        <ArticleContent>
          <h1>{post?.title}</h1>
          <SmallAuthor>
            <GatsbyImage
              alt={
                post?.author?.image?.asset?.altText ?? 'Jonathan Huang Image'
              }
              image={post?.author?.image?.asset?.gatsbyImageData}
            />
            <div>
              <h3>Jonathan Huang</h3>
              <p>Published: {publishedDate}</p>
              {updatedDate && <p>Updated: {updatedDate}</p>}
            </div>
          </SmallAuthor>
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
      <IconNavWrapper>
        <IconNav />
      </IconNavWrapper>
    </BlogPostStyles>
  )
}

export default BlogPost
