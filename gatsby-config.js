const siteMetadata = {
  title: `The Localhost Blog`,
  description: `This is my coding blog where I write about my coding journey.`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://thelocalhost.blog`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@spences10`,
  authorName: `Scott Spence`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
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
      options: { path: `${__dirname}/posts`, name: `posts` },
    },
  ],
};
