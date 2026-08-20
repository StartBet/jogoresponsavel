import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import StFooterSponsorsAndPayment from './StFooterSponsorsAndPayment.vue'

vi.mock('@startbet/st-core-ui', async () => {
  const actual: object = await vi.importActual('@startbet/st-core-ui')
  return {
    ...actual,
    StPaper: { template: '<section><slot /></section>' },
    StIllustration: { template: '<img data-test="illustration" />' },
    StTypography: { template: '<p><slot /></p>' }
  }
})

describe('StFooterSponsorsAndPayment', () => {
  it('renderiza patrocinadores e pagamento', () => {
    const wrapper = mount(StFooterSponsorsAndPayment)
    expect(wrapper.text()).toContain('Patrocinadores oficiais da Start em 2026')
    expect(wrapper.text()).toContain('Pague com:')
  })
})
