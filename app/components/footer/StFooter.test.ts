import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import StFooter from './StFooter.vue'

vi.mock('@startbet/st-core-ui', async () => {
  const actual: object = await vi.importActual('@startbet/st-core-ui')
  return {
    ...actual,
    StPaper: { template: '<section><slot /></section>' },
    StTypography: { template: '<p><slot /></p>' },
    StButton: { template: '<button><slot /></button>' },
    StIcon: { template: '<i />' },
    StIllustration: {
      props: ['name', 'alt'],
      template: '<img data-test="brand" :data-name="name" :alt="alt" />'
    }
  }
})

describe('StFooter', () => {
  it('renderiza o bloco de suporte com os canais de atendimento', () => {
    const wrapper = mount(StFooter)

    expect(wrapper.element.tagName.toLowerCase()).toBe('footer')
    expect(wrapper.text()).toContain('Suporte StartBet')
    expect(wrapper.text()).toContain('Ainda ficou dúvida?')
    expect(wrapper.text()).toContain('Ouvidoria')
    expect(wrapper.text()).toContain('0800 033 0396')
    expect(wrapper.text()).toContain('Central de Ajuda')
    expect(wrapper.text()).toContain('0800 888 2444')
    expect(wrapper.text()).toContain('Reclame Aqui')
    expect(wrapper.text()).toContain('Abrir chat')
  })

  it('aponta os telefones para links tel: e abre o Reclame Aqui em nova aba', () => {
    const wrapper = mount(StFooter)
    const hrefs = wrapper.findAll('a').map((anchor) => anchor.attributes('href'))

    expect(hrefs).toContain('tel:08000330396')
    expect(hrefs).toContain('tel:08008882444')

    const reclameAqui = wrapper.find('a[href*="reclameaqui"]')
    expect(reclameAqui.attributes('target')).toBe('_blank')
    expect(reclameAqui.attributes('rel')).toBe('noopener noreferrer')
  })

  it('renderiza a marca, o texto legal e os selos', () => {
    const wrapper = mount(StFooter)

    expect(wrapper.get('[data-test="brand"]').attributes('data-name')).toBe('brands/logo_dark')
    expect(wrapper.text()).toContain('LBBR APOSTAS DE QUOTA FIXA S.A')
    expect(wrapper.text()).toContain('Ministério da Fazenda adverte')
    expect(wrapper.text()).toContain('Proibido para menores de 18 anos')

    const badges = wrapper.findAll('img[loading="lazy"]').map((img) => img.attributes('src'))
    expect(badges).toEqual([
      'https://cdn.start.bet.br/cdn-cgi/image/quality=70,format=auto/startbet/footer/autorizado-mf.png',
      'https://cdn.start.bet.br/startbet/footer/jogue-com-resposabilidade.svg'
    ])
  })
})
