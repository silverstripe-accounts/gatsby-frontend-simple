const path = require('path');
require(`dotenv`).config();

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Gatsby/Silverstripe CMS POC`,
    description: `Gatsby + Silverstripe CMS using GraphQL 4`,
    author: `Uncle Cheese`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-silverstripe`,
      options: {
        baseUrl: process.env.SILVERSTRIPE_CMS_BASE_URL,
        apiKey: process.env.SILVERSTRIPE_CMS_API_KEY,
        stage: process.env.SILVERSTRIPE_STAGE,
        concurrentRequests: 5,
        batchSize: 300,
        templatesPath: `src/templates`
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: true,
        ignore: [], // Ignore files/folders
        purgeCSSOptions: {          // https://purgecss.com/configuration.html#options
        },
      },
    },    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
  ],
}
