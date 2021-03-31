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
import styled from 'styled-components'

const LayoutStyles = styled.div`
  min-height: 90vh;
  background-color: ${props => props.theme.palette.background};
  padding-top: 65px;
  padding-bottom: 80px;
  ${props => props.theme.breakpoints.up('sm')} {
    padding-bottom: 10px;
  }
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
    <>
      <GlobalStyles />
      <LayoutStyles>
        <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
        <div>
          <main>{children}</main>
          <footer className="center">
            © Jonathan S Huang {new Date().getFullYear()}
          </footer>
        </div>
      </LayoutStyles>
    </>
  )
}

export default Layout
