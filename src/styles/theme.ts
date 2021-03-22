interface BreakpointProps {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}
const breakpoints: BreakpointProps = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const theme = {
  breakpoints: {
    ...breakpoints,
    up: (breakpoint: keyof BreakpointProps): string =>
      `@media (min-width: ${breakpoints[breakpoint]}px)`,
    down: (breakpoint: keyof BreakpointProps): string =>
      `@media (max-width: ${breakpoints[breakpoint]}px)`,
  },
  // TODO Split out into dark and light themes
  palette: {
    background: '#27332F',
    primary: {
      light: '#51AFB0',
      main: '#1F8DA3',
      dark: '#27332F',
      contrast: '#C7542F',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
  },
  type: 'dark',
}

export type ThemeType = typeof theme

export default theme

export { theme, breakpoints }
