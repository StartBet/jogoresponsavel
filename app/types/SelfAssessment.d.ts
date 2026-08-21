export type SelfAssessmentAnswerValue = 'never' | 'rarely' | 'sometimes' | 'often' | 'always'

export type SelfAssessmentRiskLevel = 'low' | 'moderate' | 'high'

export type SelfAssessmentStep = 'intro' | 'question' | 'result'

export interface SelfAssessmentOption {
  value: SelfAssessmentAnswerValue
  label: string
  /** Peso da opção no cálculo da média. Vai de 0 (Nunca) a 4 (Sempre). */
  score: number
}

export interface SelfAssessmentQuestion {
  id: string
  /** Pré-título exibido acima da pergunta, ex.: `Pergunta 1`. */
  label: string
  title: string
}

export interface SelfAssessmentRisk {
  level: SelfAssessmentRiskLevel
  title: string
  icon: string
  description: string
  /** Classe de cor semântica aplicada ao título e ao ícone do resultado. */
  toneClass: string
}

export interface SelfAssessmentResult extends SelfAssessmentRisk {
  totalScore: number
  maxScore: number
  averageScore: number
}

export type SelfAssessmentAnswers = Partial<Record<string, SelfAssessmentAnswerValue>>
