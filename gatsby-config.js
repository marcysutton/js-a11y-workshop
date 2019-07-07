const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Accessibility in JavaScript Applications`,
    description:
      `Learn the necessary techniques and tools for building inclusive web applications with JavaScript.`,
    author: `@marcysutton`,
  },
  __experimentalThemes: [
    {
      resolve: `@mdx-deck/gatsby-theme`,
      options: {
        // disable gatsby-mdx plugin – use this when your site already uses gatsby-mdx
        mdx: false,
        // source directory for decks
        path: `src/slides`,
        // name routes' basepath
        name: `slides`,
      },
    },
  ],
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: { default: path.resolve(`./src/components/layout.js`) },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `js-a11y-workshop`,
        short_name: `jsa11y`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/blueicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`@mdx-deck/gatsby-theme`]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
}
