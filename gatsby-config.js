module.exports = {
  siteMetadata: {
    title: ' Dark Soul  ',
    author: 'DarkSoul',
    description: '病気 - death begets life '
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'yangerxiao',
        short_name: 'Tristan',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#7f828d',
        display: 'minimal-ui',
        icons: [
          {
            src: `/src/img/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/src/img/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        siteId: '',
        head: true
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`
  ]
}
