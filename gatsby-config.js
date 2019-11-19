module.exports = {
    siteMetadata: {
        title: `Nookachamps Farms`,
        description: `A family-owned, sustainable, organic hazelnut orchard.`,
        author: `@nookachampsfarms`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nookachamps Farms`,
                short_name: `Nookachamps`,
                start_url: `/`,
                background_color: `#111111`,
                theme_color: `#203671`,
                display: `minimal-ui`,
                icon: `src/images/globe.png` // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
