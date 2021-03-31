import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlockContent from '@sanity/block-content-to-react'
import { formatDistance } from 'date-fns'
import styled, { css } from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import { Query } from '../../graphql-types'
import Figure from '../components/Figure'
import { ContrastIconButton, DarkIconButton } from '../styles/CommonStyles'
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
            aspectRatio: 1.3333
            height: 300
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

const ContainerStyles = css`
  max-width: 100vw;
  margin: 0 auto;
  padding: 16px 32px;
  ${props => props.theme.breakpoints.up('lg')} {
    max-width: 80vw;
  }
`

const LargeTextStyles = css`
  font-size: 40px;
  font-weight: 800;
  margin: 10px 0;
`

const HeroImage = styled(GatsbyImage)`
  height: 300px;
  ${props => props.theme.breakpoints.up('md')} {
    height: auto;
  }
`

const BlogPostStyles = styled.article`
  ${ContainerStyles}
  display: block;
  ${props => props.theme.breakpoints.up('md')} {
    display: grid;
    grid-template-columns: 1.5fr 4fr;
    gap: 15px;
  }
`

const SidePanel = styled.aside`
  display: none;
  height: 60vh;
  position: sticky;
  top: 69px;
  left: 0;
  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
`

const LinkStyles = styled(Link)`
  display: flex;
  align-items: center;
  transition: transform 250ms;
  svg {
    ${DarkIconButton}
    padding: 5px;
  }
  :hover {
    transform: translateY(-5px);
    svg {
      transform: translateX(-5px);
      fill: ${props => props.theme.palette.primary.dark};
    }
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
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
      ${ContrastIconButton};
    }
  }
`

const MobileHeader = styled.div`
  display: block;
  ${ContainerStyles}
  background-color: ${props => props.theme.palette.primary.light};
  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`

const MobileTitle = styled.h1`
  display: block;
  ${LargeTextStyles}
`

const Title = styled.h1`
  display: none;
  ${LargeTextStyles}
  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
`

const ArticleContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const MobileAuthor = styled.div`
  ${ContainerStyles}
  display: flex;
  gap: 30px;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.light};
  padding: 16px 0;
  .gatsby-image-wrapper {
    width: 100px;
    overflow: visible;
    & [data-main-image] {
      border-radius: 50%;
      border: 4px solid ${props => props.theme.palette.primary.dark};
    }
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

  const authorImage = (
    <GatsbyImage
      alt={post?.author?.image?.asset?.altText ?? 'Jonathan Huang Image'}
      image={post?.author?.image?.asset?.gatsbyImageData}
    />
  )

  // Add tags later
  // const tags = post?.categories?.map(category => (
  //   <p key={category?._id}>{category?.title}</p>
  // ))

  return (
    <section>
      {post && (
        <SEO
          title={post.title || 'Blog Post'}
          description={post?.excerpt || 'Blog post description'}
          image={post.mainImage?.asset?.gatsbyImageData.images.fallback.src}
        />
      )}
      <HeroImage
        key={post?.id}
        alt={post?.mainImage?.asset?.altText ?? `${post?.title} main image`}
        image={post?.mainImage?.asset?.gatsbyImageData}
      />
      <MobileHeader>
        <MobileTitle>{post?.title}</MobileTitle>
        <MobileAuthor>
          {authorImage}
          <div>
            <h3>Jonathan Huang</h3>
            <p>Published: {publishedDate}</p>
            {updatedDate && <p>Updated: {updatedDate}</p>}
          </div>
        </MobileAuthor>
      </MobileHeader>
      <BlogPostStyles>
        <SidePanel>
          <nav>
            <NavContainer>
              <LinkStyles to="/blog">
                <IoMdArrowBack /> Back to Blog
              </LinkStyles>
              <h1>{post?.title}</h1>
              <p>Published: {publishedDate}</p>
              {updatedDate && <p>Updated: {updatedDate}</p>}
            </NavContainer>
            <NavContainer>
              {authorImage}
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
        </SidePanel>
        <ArticleContent>
          <Title>{post?.title}</Title>
          <BlockContent
            blocks={post?._rawBody}
            serializers={serializers}
            projectId={process.env.GATSBY_SANITY_PROJECT_ID}
            dataset={process.env.GATSBY_SANITY_PROJECT_DATASET}
          />
        </ArticleContent>
      </BlogPostStyles>
      <IconNavWrapper>
        <IconNav />
      </IconNavWrapper>
    </section>
  )
}

export default BlogPost
