module.exports = {
  siteMetadata: {
    title: `Full Stack Developer`,
    description: `My personal portfolio website`,
    author: `@zonayedpca`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shovik.me`,
        short_name: `shovik.me`,
        start_url: `/`,
        background_color: `#111a28`,
        theme_color: `#1d293a`,
        display: `minimal-ui`,
        icon: `src/assets/image/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
