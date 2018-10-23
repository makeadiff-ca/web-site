module.exports = {
  siteMetadata: {
    title: 'make a diff',
    siteUrl: 'https://makeadiff.ca',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    { resolve: 'gatsby-plugin-sitemap' },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
