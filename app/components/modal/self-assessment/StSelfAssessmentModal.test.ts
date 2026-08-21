import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'
import { useStModal } from '~/composables/useStModal'
import StSelfAssessmentModal from './StSelfAssessmentModal.vue'
import { SELF_ASSESSMENT_MODAL_NAME } from './StSelfAssessmentModal.interface'

/** O StModal usa Teleport, então tudo é consultado a partir do dialog aberto. */
const dialog = () => {
  const dialogs = document.querySelectorAll('[role="dialog"]')

  expect(dialogs, 'esperado exatamente um modal aberto').toHaveLength(1)

  return dialogs[0] as HTMLElement
}

const modalText = () => dialog().textContent ?? ''

const checkedRadios = () => dialog().querySelectorAll('input[type="radio"]:checked')

const progressBar = () => dialog().querySelector('[role="progressbar"]')

const findButton = (label: string) =>
  Array.from(dialog().querySelectorAll('button')).find((button) =>
    button.textContent?.includes(label)
  )

const findRadio = (value: string) =>
  dialog().querySelector<HTMLInputElement>(`input[type="radio"][value="${value}"]`)

const clickButton = async (label: string) => {
  const button = findButton(label)

  expect(button, `botão "${label}" não encontrado`).toBeTruthy()
  expect(button!.disabled, `botão "${label}" está desabilitado`).toBe(false)

  button!.click()
  await nextTick()
}

const selectAnswer = async (value: string) => {
  const radio = findRadio(value)

  expect(radio, `opção "${value}" não encontrada`).toBeTruthy()

  radio!.click()
  await nextTick()

  expect(findRadio(value)!.checked, `opção "${value}" não ficou marcada`).toBe(true)
}

const completeWith = async (value: string) => {
  await clickButton('Começar')

  for (let question = 1; question <= 10; question += 1) {
    await selectAnswer(value)
    await clickButton(question === 10 ? 'Ver resultado' : 'Próxima pergunta')
  }
}

describe('StSelfAssessmentModal', () => {
  let wrapper: VueWrapper
  let modal: ReturnType<typeof useStModal>

  beforeEach(async () => {
    modal = useStModal(SELF_ASSESSMENT_MODAL_NAME)
    wrapper = mount(StSelfAssessmentModal, { attachTo: document.body })
    modal.open()
    await nextTick()
  })

  afterEach(() => {
    modal.close()
    wrapper.unmount()
  })

  it('deve abrir na introdução', () => {
    expect(modalText()).toContain('Jogo responsável')
    expect(modalText()).toContain('Como será sua relação com o jogo?')
    expect(modalText()).toContain('Responda às 10 perguntas com sinceridade.')
    expect(modalText()).toContain('O resultado é anônimo.')
    expect(findButton('Começar')).toBeTruthy()
  })

  it('deve ir para a primeira pergunta ao clicar em Começar', async () => {
    await clickButton('Começar')

    expect(modalText()).toContain('Pergunta 1')
    expect(modalText()).toContain('Você sente um desejo incontrolável de jogar?')
    expect(dialog().querySelectorAll('input[type="radio"]')).toHaveLength(5)
  })

  it('deve manter a próxima pergunta desabilitada até haver seleção', async () => {
    await clickButton('Começar')

    expect(findButton('Próxima pergunta')?.disabled).toBe(true)

    await selectAnswer('never')

    expect(findButton('Próxima pergunta')?.disabled).toBe(false)
  })

  it('deve navegar entre perguntas preservando a resposta', async () => {
    await clickButton('Começar')
    await selectAnswer('often')
    await clickButton('Próxima pergunta')

    expect(modalText()).toContain('Pergunta 2')
    expect(modalText()).toContain(
      'Precisa apostar valores cada vez maiores para sentir a mesma emoção?'
    )

    await clickButton('Voltar')

    expect(modalText()).toContain('Pergunta 1')
    expect(findRadio('often')?.checked).toBe(true)
  })

  it('deve limpar a seleção ao chegar em uma pergunta ainda não respondida', async () => {
    await clickButton('Começar')
    await selectAnswer('always')
    await clickButton('Próxima pergunta')

    expect(checkedRadios()).toHaveLength(0)
    expect(findButton('Próxima pergunta')?.disabled).toBe(true)
  })

  it('deve voltar da primeira pergunta para a introdução', async () => {
    await clickButton('Começar')
    await clickButton('Voltar')

    expect(modalText()).toContain('Como será sua relação com o jogo?')
  })

  it('deve percorrer as dez perguntas na ordem', async () => {
    await clickButton('Começar')

    for (let question = 1; question <= 9; question += 1) {
      expect(modalText()).toContain(`Pergunta ${question}`)

      await selectAnswer('never')
      await clickButton('Próxima pergunta')
    }

    expect(modalText()).toContain('Pergunta 10')
    expect(modalText()).toContain(
      'Já precisou pedir dinheiro emprestado para cobrir dívidas ou problemas causados pelo jogo?'
    )
    expect(findButton('Próxima pergunta')).toBeFalsy()
    expect(findButton('Ver resultado')).toBeTruthy()
  })

  it('não deve exibir a barra de progresso na introdução', () => {
    expect(progressBar()).toBeNull()
  })

  it('deve exibir a barra de progresso a partir da primeira pergunta', async () => {
    await clickButton('Começar')

    expect(progressBar()).not.toBeNull()
    expect(progressBar()!.getAttribute('aria-valuenow')).toBe('10')
    expect(progressBar()!.getAttribute('aria-valuemin')).toBe('0')
    expect(progressBar()!.getAttribute('aria-valuemax')).toBe('100')
  })

  it('deve avançar e recuar a barra de progresso junto com as perguntas', async () => {
    await clickButton('Começar')
    await selectAnswer('never')
    await clickButton('Próxima pergunta')

    expect(progressBar()!.getAttribute('aria-valuenow')).toBe('20')

    await selectAnswer('never')
    await clickButton('Próxima pergunta')

    expect(progressBar()!.getAttribute('aria-valuenow')).toBe('30')

    await clickButton('Voltar')

    expect(progressBar()!.getAttribute('aria-valuenow')).toBe('20')
  })

  it('deve chegar a 100 na última pergunta e sumir no resultado', async () => {
    await clickButton('Começar')

    for (let question = 1; question <= 9; question += 1) {
      await selectAnswer('never')
      await clickButton('Próxima pergunta')
    }

    expect(progressBar()!.getAttribute('aria-valuenow')).toBe('100')

    await selectAnswer('never')
    await clickButton('Ver resultado')

    expect(progressBar()).toBeNull()
  })

  it('deve apresentar Baixo Risco quando todas as respostas são Nunca', async () => {
    await completeWith('never')

    expect(modalText()).toContain('Baixo Risco')
    expect(modalText()).toContain('Seus hábitos parecem saudáveis.')
  })

  it('deve apresentar Risco Moderado quando todas as respostas são Raramente', async () => {
    await completeWith('rarely')

    expect(modalText()).toContain('Risco Moderado')
    expect(modalText()).toContain('Há sinais importantes.')
  })

  it('deve apresentar Risco Elevado quando todas as respostas são Sempre', async () => {
    await completeWith('always')

    expect(modalText()).toContain('Risco Elevado')
    expect(modalText()).toContain('Os sinais são fortes.')
  })

  it('deve listar as recomendações e o aviso no resultado', async () => {
    await completeWith('never')

    expect(modalText()).toContain('Ative seus limites de depósito, perda e sessão.')
    expect(modalText()).toContain('Fale com o nosso atendimento.')
    expect(modalText()).toContain('Se sentir necessidade, procure ajuda profissional')
    expect(modalText()).toContain('Este teste não substitui uma avaliação médica ou psicológica.')
  })

  it('deve apontar o botão de limites para a página de proteção', async () => {
    await completeWith('never')

    const link = Array.from(dialog().querySelectorAll('a')).find((anchor) =>
      anchor.textContent?.includes('Configurar limites')
    )

    expect(link?.getAttribute('href')).toBe('https://start.bet.br/user/protection')
  })

  it('deve voltar para a introdução ao refazer a avaliação', async () => {
    await completeWith('always')
    await clickButton('Refazer avaliação')

    expect(modalText()).toContain('Como será sua relação com o jogo?')

    await clickButton('Começar')

    expect(checkedRadios()).toHaveLength(0)
  })

  it('deve reiniciar o fluxo quando o modal é fechado e aberto de novo', async () => {
    await clickButton('Começar')
    await selectAnswer('always')
    await clickButton('Próxima pergunta')

    modal.close()
    await nextTick()

    modal.open()
    await nextTick()

    expect(modalText()).toContain('Como será sua relação com o jogo?')
  })
})
