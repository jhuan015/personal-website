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
  }
  p, li {
    color: ${props => props.theme.palette.text.primary};
    letter-spacing: 0.5px;
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
  .center {
    text-align: center;
  }
`

export default GlobalStyles
