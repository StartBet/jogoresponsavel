import type {
  SelfAssessmentAnswerValue,
  SelfAssessmentOption,
  SelfAssessmentQuestion,
  SelfAssessmentRisk,
  SelfAssessmentRiskLevel
} from '~/types/SelfAssessment'

const selfAssessmentOptions: SelfAssessmentOption[] = [
  { value: 'never', label: 'Nunca', score: 0 },
  { value: 'rarely', label: 'Raramente', score: 1 },
  { value: 'sometimes', label: 'Algumas vezes', score: 2 },
  { value: 'often', label: 'Frequentemente', score: 3 },
  { value: 'always', label: 'Sempre', score: 4 }
]

const selfAssessmentQuestions: SelfAssessmentQuestion[] = [
  {
    id: 'urge',
    label: 'Pergunta 1',
    title: 'Você sente um desejo incontrolável de jogar?'
  },
  {
    id: 'tolerance',
    label: 'Pergunta 2',
    title: 'Precisa apostar valores cada vez maiores para sentir a mesma emoção?'
  },
  {
    id: 'control',
    label: 'Pergunta 3',
    title: 'Já tentou reduzir ou parar de jogar sem conseguir?'
  },
  {
    id: 'withdrawal',
    label: 'Pergunta 4',
    title: 'Fica agitado ou irritado quando passa um tempo sem jogar?'
  },
  {
    id: 'escape',
    label: 'Pergunta 5',
    title: 'Você joga para escapar de problemas ou melhorar o humor?'
  },
  {
    id: 'chasing',
    label: 'Pergunta 6',
    title: 'Depois de perder, costuma voltar outro dia para tentar recuperar?'
  },
  {
    id: 'lying',
    label: 'Pergunta 7',
    title: 'Já mentiu para alguém para esconder o quanto você joga?'
  },
  {
    id: 'illegal-acts',
    label: 'Pergunta 8',
    title:
      'Já fez algo ilegal, como fraude, roubo ou falsificação, para conseguir dinheiro para jogar?'
  },
  {
    id: 'relationships',
    label: 'Pergunta 9',
    title: 'O jogo já colocou em risco uma relação, seu emprego ou uma oportunidade?'
  },
  {
    id: 'bailout',
    label: 'Pergunta 10',
    title:
      'Já precisou pedir dinheiro emprestado para cobrir dívidas ou problemas causados pelo jogo?'
  }
]

const selfAssessmentRisks: Record<SelfAssessmentRiskLevel, SelfAssessmentRisk> = {
  low: {
    level: 'low',
    title: 'Baixo Risco',
    icon: 'circle-check',
    toneClass: 'text-st-positive',
    description:
      'Seus hábitos parecem saudáveis. Continue no controle e mantenha os bons hábitos — a diversão fica melhor assim.'
  },
  moderate: {
    level: 'moderate',
    title: 'Risco Moderado',
    icon: 'triangle-exclamation',
    toneClass: 'text-st-warning',
    description:
      'Há sinais importantes. Recomendamos ativar seus limites e conversar com o nosso atendimento.'
  },
  high: {
    level: 'high',
    title: 'Risco Elevado',
    icon: 'circle-exclamation',
    toneClass: 'text-st-negative',
    description:
      'Os sinais são fortes. Procure apoio profissional e conte com os canais de ajuda. Você não está sozinho.'
  }
}

const selfAssessmentRecommendations: string[] = [
  'Ative seus limites de depósito, perda e sessão. Se precisar, utilize também a autoexclusão.',
  'Fale com o nosso atendimento. A equipe está disponível para escutar e apoiar com responsabilidade.',
  'Se sentir necessidade, procure ajuda profissional especializada.'
]

const selfAssessmentDisclaimer =
  'Este teste não substitui uma avaliação médica ou psicológica. Para um diagnóstico preciso, procure um profissional de saúde qualificado.'

const scoreByAnswer = new Map<SelfAssessmentAnswerValue, number>(
  selfAssessmentOptions.map((option) => [option.value, option.score])
)

/** Peso de uma resposta. Valores desconhecidos não pontuam. */
const getAnswerScore = (answer?: SelfAssessmentAnswerValue): number =>
  answer ? (scoreByAnswer.get(answer) ?? 0) : 0

/**
 * Faixas de classificação sobre a média das respostas, que vai de 0 a 4:
 * abaixo de 1 é baixo risco, de 1 a menos de 2 é moderado e a partir de 2 é elevado.
 */
const resolveRiskLevel = (averageScore: number): SelfAssessmentRiskLevel => {
  if (averageScore < 1) return 'low'
  if (averageScore < 2) return 'moderate'

  return 'high'
}

export const useSelfAssessmentService = () => ({
  options: selfAssessmentOptions,
  questions: selfAssessmentQuestions,
  risks: selfAssessmentRisks,
  recommendations: selfAssessmentRecommendations,
  disclaimer: selfAssessmentDisclaimer,
  getAnswerScore,
  resolveRiskLevel
})
