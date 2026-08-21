import { computed, ref, type ComputedRef, type Ref } from 'vue'
import { useSelfAssessmentService } from '~/services/selfAssessmentService'
import type {
  SelfAssessmentAnswerValue,
  SelfAssessmentAnswers,
  SelfAssessmentOption,
  SelfAssessmentQuestion,
  SelfAssessmentResult,
  SelfAssessmentStep
} from '~/types/SelfAssessment'

export interface UseSelfAssessmentReturn {
  step: Ref<SelfAssessmentStep>
  questions: SelfAssessmentQuestion[]
  options: SelfAssessmentOption[]
  answers: Ref<SelfAssessmentAnswers>
  questionIndex: Ref<number>
  currentQuestion: ComputedRef<SelfAssessmentQuestion | undefined>
  currentAnswer: ComputedRef<SelfAssessmentAnswerValue | undefined>
  questionNumber: ComputedRef<number>
  totalQuestions: number
  isLastQuestion: ComputedRef<boolean>
  canAdvance: ComputedRef<boolean>
  progressPercent: ComputedRef<number>
  result: ComputedRef<SelfAssessmentResult>
  recommendations: string[]
  disclaimer: string
  start: () => void
  answer: (value: SelfAssessmentAnswerValue) => void
  goNext: () => void
  goBack: () => void
  reset: () => void
}

/**
 * Conduz o fluxo da autoavaliação: introdução, as dez perguntas e o resultado.
 *
 * O estado é local à instância, então cada montagem do modal começa do zero e
 * nada é enviado ou persistido — o resultado é calculado no próprio front-end.
 */
export const useSelfAssessment = (): UseSelfAssessmentReturn => {
  const {
    options,
    questions,
    recommendations,
    disclaimer,
    getAnswerScore,
    resolveRiskLevel,
    risks
  } = useSelfAssessmentService()

  const totalQuestions = questions.length
  const maxScore = totalQuestions * Math.max(...options.map((option) => option.score))

  const step = ref<SelfAssessmentStep>('intro')
  const questionIndex = ref(0)
  const answers = ref<SelfAssessmentAnswers>({})

  const currentQuestion = computed(() => questions[questionIndex.value])

  const currentAnswer = computed(() => {
    const question = currentQuestion.value

    return question ? answers.value[question.id] : undefined
  })

  const questionNumber = computed(() => questionIndex.value + 1)

  const isLastQuestion = computed(() => questionIndex.value === totalQuestions - 1)

  const canAdvance = computed(() => currentAnswer.value !== undefined)

  /** Avanço no questionário, de 0 na introdução a 100 no resultado. */
  const progressPercent = computed(() => {
    if (step.value === 'intro') return 0
    if (step.value === 'result') return 100

    return (questionNumber.value / totalQuestions) * 100
  })

  const totalScore = computed(() =>
    questions.reduce((total, question) => total + getAnswerScore(answers.value[question.id]), 0)
  )

  const result = computed<SelfAssessmentResult>(() => {
    const averageScore = totalScore.value / totalQuestions

    return {
      ...risks[resolveRiskLevel(averageScore)],
      totalScore: totalScore.value,
      maxScore,
      averageScore
    }
  })

  const start = () => {
    step.value = 'question'
    questionIndex.value = 0
  }

  const answer = (value: SelfAssessmentAnswerValue) => {
    const question = currentQuestion.value

    if (!question) return

    answers.value = { ...answers.value, [question.id]: value }
  }

  const goNext = () => {
    if (!canAdvance.value) return

    if (isLastQuestion.value) {
      step.value = 'result'
      return
    }

    questionIndex.value += 1
  }

  /** Do resultado volta para a última pergunta; da primeira pergunta volta para a introdução. */
  const goBack = () => {
    if (step.value === 'result') {
      step.value = 'question'
      questionIndex.value = totalQuestions - 1
      return
    }

    if (questionIndex.value === 0) {
      step.value = 'intro'
      return
    }

    questionIndex.value -= 1
  }

  const reset = () => {
    step.value = 'intro'
    questionIndex.value = 0
    answers.value = {}
  }

  return {
    step,
    questions,
    options,
    answers,
    questionIndex,
    currentQuestion,
    currentAnswer,
    questionNumber,
    totalQuestions,
    isLastQuestion,
    canAdvance,
    progressPercent,
    result,
    recommendations,
    disclaimer,
    start,
    answer,
    goNext,
    goBack,
    reset
  }
}
