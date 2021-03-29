import { createGlobalStyle } from 'styled-components'
import font from '../assets/fonts/Montserrat/Montserrat-Regular.woff'
import { ThemeType } from './theme'

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: Montserrat;
    src: url(${font});
  }
  html {
    box-sizing: border-box;
    position: relative;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
  }
  body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  font-kerning: normal;
  }
  a {
    color: ${props => props.theme.palette.text.primary};
    text-decoration: none;
    :hover {
      cursor: pointer;
      color: ${props => props.theme.palette.primary.dark};
    }
    :focus {
      outline: ${props => props.theme.palette.text.primary} 2px dashed;
    }
    li {
      :hover {
      color: ${props => props.theme.palette.primary.dark};
      }
    }
  }
  p, li {
    color: ${props => props.theme.palette.text.primary};
    letter-spacing: 0.5px;
    line-height: 1.5;
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.palette.text.primary};
    font-weight: normal;
    font-family: Montserrat;
    margin: 0;
  }
  svg {
    fill: ${props => props.theme.palette.text.primary}; 
    color: ${props => props.theme.palette.text.primary}; 
  }
  footer {
    color: ${props => props.theme.palette.text.primary}; 
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.primary.contrast};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.7;
  }
  ::selection {
    background:  ${props => props.theme.palette.primary.contrast};
  }
  ::-moz-selection {
    background:  ${props => props.theme.palette.primary.contrast};
  }
  .center {
    text-align: center;
  }
`

export default GlobalStyles
