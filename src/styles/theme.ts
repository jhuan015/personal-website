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
    background: '#282a36',
    primary: {
      light: '#ff79c6',
      main: '#6272a4',
      dark: '#27332F',
      contrast: '#50fa7b',
    },
    text: {
      primary: '#bd93f9',
      secondary: '#6272a4',
      light: '#fff',
      dark: '#27332F',
      selection: '#44475a',
    },
  },
  type: 'dark',
}

export type ThemeType = typeof theme

export default theme

export { theme, breakpoints }
