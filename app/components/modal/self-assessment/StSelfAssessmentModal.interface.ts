/** Nome padrão do modal no registro do `useStModal`. */
export const SELF_ASSESSMENT_MODAL_NAME = 'self-assessment'

export const SELF_ASSESSMENT_LIMITS_URL = 'https://start.bet.br/user/protection'

export type StSelfAssessmentModalProps = {
  /** Permite registrar o modal com outro nome quando houver mais de uma instância. */
  name?: string
  /** Destino do botão `Configurar limites`. */
  limitsUrl?: string
}
