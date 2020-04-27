require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `react_practice`,
    description: `react_practice`,
    author: `@Bibek-saroj-rakesh`,
    type: process.env.GATSBY_ACTIVE_ENV || 'staging',
    siteUrl: `https://www.your-app-domain.netlify.app/`,
    hostname: `your-app-domain.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /***** REMOVE COMMENT TO ENABLE CONTENTFUL CMS
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
    ******/
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.your-app-domain.netlify.app/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sami-ylipuranen`,
        short_name: `sami_ylipuranen`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
