import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import StFooter from './StFooter.vue'

vi.mock('@startbet/st-core-ui', async () => {
  const actual: object = await vi.importActual('@startbet/st-core-ui')
  return {
    ...actual,
    StIllustration: { template: '<img data-test="brand" />' },
    StGrid: { template: '<div><slot /></div>' },
    StPaper: { template: '<section><slot /></section>' },
    StTypography: { template: '<p><slot /></p>' },
    StButton: { template: '<button><slot /></button>' },
    StUnorderedList: { template: '<ul><slot /></ul>' },
    StListItem: { template: '<li><slot /></li>' }
  }
})

vi.mock('~/services/themeService', () => ({
  useThemeService: () => ({ theme: ref<'dark' | 'light'>('dark') })
}))

describe('StFooter', () => {
  it('renderiza footer e lista "Sobre"', () => {
    const wrapper = mount(StFooter, {
      global: {
        stubs: {
          NuxtLink: { template: '<a><slot /></a>' }
        }
      }
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('footer')
    expect(wrapper.text()).toContain('Sobre')
    expect(wrapper.text()).toMatch(/Sobre\s*Nós/)
    expect(wrapper.text()).toContain('Autoexclusão Centralizada')
  })
})
