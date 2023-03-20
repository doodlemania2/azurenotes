require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Azure Notes`,
    siteUrl: `https://aka.ms/azurenotes`,
    description: `Azure Notes`,
    author: `Derek Martin`
  },
  plugins: [
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.DIRECTUS_URL,
        auth: {
          token: process.env.DIRECTUS_TOKEN,
        },
      },
    },
  ],
}
