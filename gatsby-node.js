/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
/* eslint-disable */
const { isFuture } = require('date-fns')

async function createBlogPostPages(graphql, { createPage }) {
  // Get all blog posts
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const posts = result.data.allSanityPost?.edges ?? []

  posts
    // Only generate with valid dates
    .filter(post => !isFuture(new Date(post.node.publishedAt)))
    .forEach(post => {
      createPage({
        path: `/blog/${post.node.slug.current}/`,
        component: require.resolve('./src/templates/BlogPost.tsx'),
        context: { id: post.node.id },
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
}
/* eslint-enable */
