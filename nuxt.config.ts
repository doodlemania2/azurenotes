// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-directus',
      'nuxt-icon'
    ],
    directus: {
      url: process.env.DIRECTUS_URL,
      token: process.env.DIRECTUS_TOKEN,
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })