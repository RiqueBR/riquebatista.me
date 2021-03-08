module.exports = {
  siteMetadata: {
    title: `Rique's Portfolio`,
    description: `My (hopefully) starter template to put an end of my unfinished personal portfolio website (FINGERS CROSSED).`,
    author: `Henrique Batista`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      // Setting what type of layout I'd like to use for MDX
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: 'content/projects'
      }
    },
  ],
}
