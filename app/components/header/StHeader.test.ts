import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import StHeader from './StHeader.vue'

vi.mock('~/services/themeService', () => ({
  useThemeService: () => ({
    theme: { value: 'light' }
  })
}))

vi.mock('~/stores/sideNavStore', () => ({
  useSideNavStore: () => ({
    isOpen: { value: false },
    toggle: vi.fn()
  })
}))

vi.mock('~/stores/modalStore', () => ({
  useModalStore: () => ({
    open: vi.fn()
  })
}))

describe('StHeader', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('deve renderizar o header com a classe raiz correta', () => {
    const wrapper = mount(StHeader, {
      global: {
        stubs: {
          NuxtLink: { template: '<a><slot /></a>' },
          StPaper: {
            props: ['className'],
            template: '<div :class="className"><slot /></div>'
          },
          StGrid: { template: '<div><slot /></div>' },
          StButton: {
            props: ['variant', 'color', 'iconLeft'],
            template: '<button><slot /></button>'
          },
          StBadge: { template: '<span><slot /></span>' },
          StTooltip: { template: '<span><slot name="trigger" /></span>' },
          StIllustration: { props: ['name', 'alt'], template: '<img :alt="alt" />' }
        }
      }
    })
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('header').classes()).toContain('flex')
  })
})
