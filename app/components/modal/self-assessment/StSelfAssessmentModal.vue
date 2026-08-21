<script setup lang="ts">
import { watch } from 'vue'
import { StModal, StProgressBar } from '@startbet/st-core-ui'
import { useSelfAssessment } from '~/composables/useSelfAssessment'
import { useStModal } from '~/composables/useStModal'
import StSelfAssessmentIntro from './intro/StSelfAssessmentIntro.vue'
import StSelfAssessmentQuestion from './question/StSelfAssessmentQuestion.vue'
import StSelfAssessmentResult from './result/StSelfAssessmentResult.vue'
import {
  SELF_ASSESSMENT_LIMITS_URL,
  SELF_ASSESSMENT_MODAL_NAME,
  type StSelfAssessmentModalProps
} from './StSelfAssessmentModal.interface'
import {
  stSelfAssessmentModalClass,
  stSelfAssessmentProgressClass
} from './styleStSelfAssessmentModal'

defineOptions({ name: 'StSelfAssessmentModal' })

const props = withDefaults(defineProps<StSelfAssessmentModalProps>(), {
  name: SELF_ASSESSMENT_MODAL_NAME,
  limitsUrl: SELF_ASSESSMENT_LIMITS_URL
})

const { isOpen, close, modalBind } = useStModal(props.name)

const {
  step,
  options,
  currentQuestion,
  currentAnswer,
  isLastQuestion,
  progressPercent,
  questionNumber,
  totalQuestions,
  result,
  recommendations,
  disclaimer,
  start,
  answer,
  goNext,
  goBack,
  reset
} = useSelfAssessment()

/** Fechar o modal descarta o progresso, então uma nova abertura recomeça na introdução. */
watch(isOpen, (open) => {
  if (!open) reset()
})

const handleConfigureLimits = () => close()
</script>

<template>
  <StModal v-bind="modalBind" :class-name="stSelfAssessmentModalClass">
    <StProgressBar
      v-if="step === 'question'"
      variant="secondary"
      size="small"
      :percent="progressPercent"
      :aria-label="`Pergunta ${questionNumber} de ${totalQuestions}`"
      :class-name="stSelfAssessmentProgressClass"
    />

    <StSelfAssessmentIntro v-if="step === 'intro'" @start="start" />

    <StSelfAssessmentQuestion
      v-else-if="step === 'question' && currentQuestion"
      :question="currentQuestion"
      :options="options"
      :answer="currentAnswer"
      :is-last-question="isLastQuestion"
      @answer="answer"
      @back="goBack"
      @next="goNext"
    />

    <StSelfAssessmentResult
      v-else
      :result="result"
      :recommendations="recommendations"
      :disclaimer="disclaimer"
      :limits-url="props.limitsUrl"
      @restart="reset"
      @configure-limits="handleConfigureLimits"
    />
  </StModal>
</template>
