/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `loclhost:8000`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/dosen`, `/`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
         
        }) => {
          const wpNodeMap = md.reduce((acc, node) => {
            const { slug } = node.fields
            acc[slug] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
  ],
}
