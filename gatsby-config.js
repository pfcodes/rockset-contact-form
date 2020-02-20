module.exports = {
  siteMetadata: {
    siteUrl: `https://rockset.com`,
    title: `Rockset`,
    description: `Rockset - fast operational analytics in the cloud.`,
    author: `@RocksetCloud`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    { resolve: 'conversion-trackers' },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'EZH36',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              // username: 'kleong',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true,
            },
          },
        ],
      },
    },
  ],
};
