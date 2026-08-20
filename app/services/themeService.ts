import { ref } from 'vue'

export type Theme = 'light' | 'dark'

const theme = ref<Theme>('dark')

const applyThemeToDocument = (newTheme: Theme) => {
  if (typeof document !== 'undefined' && document?.documentElement) {
    document.documentElement.setAttribute('data-theme', newTheme)
  }
}

applyThemeToDocument(theme.value)

export const useThemeService = () => {
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    applyThemeToDocument(newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  return {
    theme,
    setTheme,
    toggleTheme
  }
}
