/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
//   const result = await graphql(`
//     query {
//       allSamplePages {
//         edges {
//           node {
//             slug
//             title
//           }
//         }
//       }
//     }
//   `)
//   result.data.allSamplePages.edges.forEach(edge => {
//     createPage({
//       path: `${edge.node.slug}`,
//       component: blogPostTemplate,
//       context: {
//         title: edge.node.title,
//       },
//     })
//   })
// }
