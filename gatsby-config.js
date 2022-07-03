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
      resolve: "gatsby-plugin-mdx",
      // Setting what type of layout I'd like to use for MDX
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/notes`,
        name: "notes",
      },
    },
  ],
}
