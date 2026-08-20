import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import StFooterTopLinks from './StFooterTopLinks.vue'

vi.mock('@startbet/st-core-ui', async () => {
  const actual: object = await vi.importActual('@startbet/st-core-ui')
  return {
    ...actual,
    StGrid: { template: '<div><slot /></div>' },
    StPaper: { template: '<section><slot /></section>' },
    StTypography: { template: '<p><slot /></p>' },
    StUnorderedList: { template: '<ul><slot /></ul>' },
    StListItem: { template: '<li><slot /></li>' }
  }
})

describe('StFooterTopLinks', () => {
  it('renderiza o bloco de links do topo', () => {
    const wrapper = mount(StFooterTopLinks)

    expect(wrapper.text()).toContain('Sobre')
    expect(wrapper.text()).toContain('Informações')
    expect(wrapper.text()).toContain('Produtos')
  })
})
