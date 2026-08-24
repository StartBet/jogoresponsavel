import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import StIconBadge from './StIconBadge.vue'

vi.mock('@startbet/st-core-ui', async () => {
  const actual: object = await vi.importActual('@startbet/st-core-ui')
  return {
    ...actual,
    StIcon: {
      props: ['name', 'size', 'ariaLabel'],
      template: '<i data-test="icon" :data-name="name" :data-size="size" />'
    }
  }
})

describe('StIconBadge', () => {
  it('renderiza o ícone dentro da caixa padrão', () => {
    const wrapper = mount(StIconBadge, { props: { name: 'circle-info' } })
    const icon = wrapper.get('[data-test="icon"]')

    expect(icon.attributes('data-name')).toBe('circle-info')
    expect(icon.attributes('data-size')).toBe('6')
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        'w-st-6',
        'h-st-6',
        'rounded-st-1',
        'bg-st-surface-3',
        'text-st-secondary',
        'shadow-st-paper-1'
      ])
    )
  })
})
