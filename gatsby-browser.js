/* eslint-disable */
const React = require('react')
const { ThemeProvider } = require('styled-components')
const Layout = require('./src/components/Layout').default
const theme = require('./src/styles/theme').default

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
)

const scrollTo = id => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 70)
  return false
}

exports.onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10)
  }
}
/* eslint-enable */
