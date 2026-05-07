export default defineNuxtConfig({
  extends: ['docus'],

  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  llms: {
    domain: 'https://jiangs-blog.vercel.app',
    title: 'JIANG Blog',
    description: '前端轉職'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/plausible'
  ],

  compatibilityDate: '2024-08-16'
})
