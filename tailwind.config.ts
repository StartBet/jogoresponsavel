import type { Config } from 'tailwindcss'
import { stTailwindPlugins, stTailwindTheme } from '@startbet/st-core-ui'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/composables/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app/**/*.{js,vue,ts}',
    './nuxt.config.{js,ts}',
    './error.vue',
    './node_modules/@startbet/st-core-ui/dist/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {
      ...stTailwindTheme,
      colors: {
        ...stTailwindTheme.colors,
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        }
      }
    }
  },
  plugins: [...stTailwindPlugins]
}
