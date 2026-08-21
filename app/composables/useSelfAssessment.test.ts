import { describe, it, expect } from 'vitest'
import { useSelfAssessment } from './useSelfAssessment'
import type { SelfAssessmentAnswerValue } from '~/types/SelfAssessment'

const answerAll = (
  assessment: ReturnType<typeof useSelfAssessment>,
  value: SelfAssessmentAnswerValue
) => {
  assessment.start()

  for (let index = 0; index < assessment.totalQuestions; index += 1) {
    assessment.answer(value)
    assessment.goNext()
  }
}

describe('useSelfAssessment', () => {
  it('deve começar na introdução com dez perguntas e cinco opções', () => {
    const assessment = useSelfAssessment()

    expect(assessment.step.value).toBe('intro')
    expect(assessment.totalQuestions).toBe(10)
    expect(assessment.options).toHaveLength(5)
  })

  it('deve avançar da introdução para a primeira pergunta', () => {
    const assessment = useSelfAssessment()

    assessment.start()

    expect(assessment.step.value).toBe('question')
    expect(assessment.questionNumber.value).toBe(1)
    expect(assessment.currentQuestion.value?.title).toBe(
      'Você sente um desejo incontrolável de jogar?'
    )
  })

  it('deve bloquear o avanço enquanto a pergunta não for respondida', () => {
    const assessment = useSelfAssessment()

    assessment.start()
    expect(assessment.canAdvance.value).toBe(false)

    assessment.goNext()
    expect(assessment.questionNumber.value).toBe(1)

    assessment.answer('never')
    expect(assessment.canAdvance.value).toBe(true)

    assessment.goNext()
    expect(assessment.questionNumber.value).toBe(2)
  })

  it('deve preservar a resposta ao voltar para a pergunta anterior', () => {
    const assessment = useSelfAssessment()

    assessment.start()
    assessment.answer('often')
    assessment.goNext()
    assessment.goBack()

    expect(assessment.questionNumber.value).toBe(1)
    expect(assessment.currentAnswer.value).toBe('often')
  })

  it('deve voltar da primeira pergunta para a introdução', () => {
    const assessment = useSelfAssessment()

    assessment.start()
    assessment.goBack()

    expect(assessment.step.value).toBe('intro')
  })

  it('deve sinalizar a última pergunta e ir para o resultado', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'never')

    expect(assessment.step.value).toBe('result')
  })

  it('deve voltar do resultado para a última pergunta', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'never')
    assessment.goBack()

    expect(assessment.step.value).toBe('question')
    expect(assessment.questionNumber.value).toBe(10)
  })

  it('deve classificar como baixo risco quando a média fica abaixo de 1', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'never')

    expect(assessment.result.value.totalScore).toBe(0)
    expect(assessment.result.value.averageScore).toBe(0)
    expect(assessment.result.value.level).toBe('low')
    expect(assessment.result.value.title).toBe('Baixo Risco')
  })

  it('deve classificar como risco moderado quando a média fica entre 1 e 2', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'rarely')

    expect(assessment.result.value.totalScore).toBe(10)
    expect(assessment.result.value.averageScore).toBe(1)
    expect(assessment.result.value.level).toBe('moderate')
    expect(assessment.result.value.title).toBe('Risco Moderado')
  })

  it('deve classificar como risco elevado a partir da média 2', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'sometimes')

    expect(assessment.result.value.totalScore).toBe(20)
    expect(assessment.result.value.averageScore).toBe(2)
    expect(assessment.result.value.level).toBe('high')
    expect(assessment.result.value.title).toBe('Risco Elevado')
  })

  it('deve pontuar o máximo quando todas as respostas são Sempre', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'always')

    expect(assessment.result.value.totalScore).toBe(40)
    expect(assessment.result.value.maxScore).toBe(40)
    expect(assessment.result.value.level).toBe('high')
  })

  it('deve considerar respostas mistas na média', () => {
    const assessment = useSelfAssessment()

    assessment.start()

    const mixed: SelfAssessmentAnswerValue[] = [
      'always',
      'always',
      'always',
      'never',
      'never',
      'never',
      'never',
      'never',
      'never',
      'never'
    ]

    mixed.forEach((value) => {
      assessment.answer(value)
      assessment.goNext()
    })

    expect(assessment.result.value.totalScore).toBe(12)
    expect(assessment.result.value.averageScore).toBe(1.2)
    expect(assessment.result.value.level).toBe('moderate')
  })

  it('deve reportar o progresso de 0 na introdução a 100 no resultado', () => {
    const assessment = useSelfAssessment()

    expect(assessment.progressPercent.value).toBe(0)

    assessment.start()
    expect(assessment.progressPercent.value).toBe(10)

    assessment.answer('never')
    assessment.goNext()
    expect(assessment.progressPercent.value).toBe(20)

    answerAll(assessment, 'never')
    expect(assessment.progressPercent.value).toBe(100)
  })

  it('deve zerar o progresso no reset', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'never')
    assessment.reset()

    expect(assessment.progressPercent.value).toBe(0)
  })

  it('deve reduzir o progresso ao voltar uma pergunta', () => {
    const assessment = useSelfAssessment()

    assessment.start()
    assessment.answer('never')
    assessment.goNext()
    assessment.goBack()

    expect(assessment.progressPercent.value).toBe(10)
  })

  it('deve limpar as respostas e voltar para a introdução no reset', () => {
    const assessment = useSelfAssessment()

    answerAll(assessment, 'always')
    assessment.reset()

    expect(assessment.step.value).toBe('intro')
    expect(assessment.questionIndex.value).toBe(0)
    expect(assessment.answers.value).toEqual({})
    expect(assessment.result.value.totalScore).toBe(0)
  })

  it('deve isolar o estado entre instâncias', () => {
    const first = useSelfAssessment()
    const second = useSelfAssessment()

    first.start()
    first.answer('always')

    expect(second.step.value).toBe('intro')
    expect(second.answers.value).toEqual({})
  })
})
