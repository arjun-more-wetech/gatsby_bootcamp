/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  //it shows meta data

  siteMetadata: {
    title: "Arjun More's site!",
    footer: "vatan more",
  },

  plugins: [
    // plugin for sass stylesheet
    "gatsby-plugin-sass",
    {
      //it shows local files posts placed in 'posts' folder
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
