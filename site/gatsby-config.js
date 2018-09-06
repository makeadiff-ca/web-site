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
  ],
}
