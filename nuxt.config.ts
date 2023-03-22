// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-directus',
      'nuxt-icon'
    ],
    directus: {
      url: 'https://api.thedoodleproject.net',
      token: 'VxnL7E7U4BSdpQ_alfUAjnWWpOguUbSJ',
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })