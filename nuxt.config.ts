import { fileURLToPath } from 'node:url'

// Caminho absoluto: o `dir` do publicAssets é resolvido a partir do srcDir
// (`app/`), então um caminho relativo apontaria para `app/node_modules/...`.
// O Nitro ignora diretório inexistente em silêncio — nada seria copiado.
const stCoreUiFontsDir = fileURLToPath(
  new URL('./node_modules/@startbet/st-core-ui/src/assets/fonts', import.meta.url)
)

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
    // O CSS do @startbet/st-core-ui referencia as fontes em ../assets/fonts/...
    // e o Vite não reescreve essa URL, então o navegador pede /assets/fonts/...
    // O pacote publica os arquivos, mas quem precisa servi-los é a aplicação —
    // sem isto as fontes dão 404 e o site cai em fontes do sistema.
    // Atenção: em `nuxt dev` o Vite intercepta /assets/* e as fontes continuam
    // dando 404; o efeito só aparece no build (`nuxt generate`).
    publicAssets: [
      {
        dir: stCoreUiFontsDir,
        baseURL: '/assets/fonts',
        maxAge: 60 * 60 * 24 * 365
      }
    ],

    prerender: {
      // sem isso, um erro de pré-renderização apenas gera aviso e o build
      // publica o site sem a página que falhou
      failOnError: true
    }
  }
})
