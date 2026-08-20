import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import StFooterBrandAndLegal from './StFooterBrandAndLegal.vue'

vi.mock('@startbet/st-core-ui', async () => {
  const actual: object = await vi.importActual('@startbet/st-core-ui')
  return {
    ...actual,
    StIllustration: { template: '<img data-test="brand" />' },
    StTypography: { template: '<p><slot /></p>' },
    StButton: { template: '<button><slot /></button>' }
  }
})

describe('StFooterBrandAndLegal', () => {
  it('renderiza marca e texto legal', () => {
    const wrapper = mount(StFooterBrandAndLegal, {
      props: { brandIllustrationName: 'brand/brand-dark' },
      global: {
        stubs: {
          NuxtLink: { template: '<a><slot /></a>' }
        }
      }
    })

    expect(wrapper.text()).toContain('Ministério da Fazenda adverte')
    expect(wrapper.text()).toContain('Aposta não é investimento e pode causar dependência')
  })
})
