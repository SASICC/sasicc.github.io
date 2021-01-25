const path = require(`path`);
module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-less`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.API_URL || `http://localhost:1337`,
                queryLimit: 5000,
                contentTypes: ['cargos',
                    'clientes', 
                    'habilidades', 
                    'portafolio', 
                    'menu', 
                    'textos', 
                    'nosotros', 
                    'servicios'
                ]
            }
        }
    ],
}