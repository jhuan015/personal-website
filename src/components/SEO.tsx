/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  description?: string
  lang?: string
  meta?: HTMLMetaElement
  title?: string
  image?: string
  location?: Location
}

const SEO: React.FC<Props> = ({
  description,
  image,
  lang = 'en',
  location,
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image || '/logo.svg',
        },
        {
          property: 'og:site_name',
          content: defaultTitle,
        },
        {
          property: 'og:url',
          content: location?.href ?? site.siteMetadata?.siteUrl,
        },
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.author || '',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
