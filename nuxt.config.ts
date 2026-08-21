// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],

  typescript: {
    strict: true,
    typeCheck: false
  },

  css: ['@/assets/css/main.css'],

  features: {
    inlineStyles: false
  },

  nitro: {
    prerender: {
      // sem isso, um erro de pré-renderização apenas gera aviso e o build
      // publica o site sem a página que falhou
      failOnError: true
    }
  }
})
