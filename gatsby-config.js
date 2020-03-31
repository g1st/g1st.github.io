const siteMetadata = {
  title: `Gintaras Stankus`,
  description: `Gintaras Stankus portfolio website.`,
  image: `/static/favicon.png`,
  siteUrl: `https://g1st.github.io`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@g1stas`,
  twitter: `@g1st`,
  author: `Gintaras Stankus`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `g1st portfolio`,
        short_name: `g1st portfolio`,
        start_url: `/`,
        background_color: `#051622`,
        theme_color: `#051622`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400,600`, `Merriweather\:400`],
        display: `swap`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
