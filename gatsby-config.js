/* eslint-disable */
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

module.exports = {
  siteMetadata: {
    title: 'Jonathan Huang',
    description: 'Personal site.',
    author: 'jhuan015',
    siteUrl: 'https://jonshuang.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-RJBNDCTG1T'],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/assets/images',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jon-personal-website',
        short_name: 'jonshuang',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'kb6eepmw',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        apiVersion: '2021-03-25',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
/* eslint-enable */
