/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import 'normalize.css'
import './layout.css'
import GlobalStyles from '../styles/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import IconNav from './IconNav'
import theme from '../styles/theme'

const LayoutStyles = styled.div`
  background-color: ${props => props.theme.palette.background};
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutStyles>
        <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
        <IconNav />
        <div>
          <main>{children}</main>
          <footer className="center">
            © Jonathan S Huang {new Date().getFullYear()}
          </footer>
        </div>
      </LayoutStyles>
    </ThemeProvider>
  )
}

export default Layout