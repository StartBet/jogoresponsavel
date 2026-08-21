<script setup lang="ts">
import { StButton, StPaper, StRadio, StRadioGroup, StTypography } from '@startbet/st-core-ui'
import type {
  SelfAssessmentAnswerValue,
  SelfAssessmentOption,
  SelfAssessmentQuestion
} from '~/types/SelfAssessment'
import {
  stSelfAssessmentActionsClass,
  stSelfAssessmentEyebrowClass,
  stSelfAssessmentOptionsClass,
  stSelfAssessmentStepClass,
  stSelfAssessmentTitleClass
} from '../styleStSelfAssessmentModal'

defineOptions({ name: 'StSelfAssessmentQuestion' })

const props = defineProps<{
  question: SelfAssessmentQuestion
  options: SelfAssessmentOption[]
  answer?: SelfAssessmentAnswerValue
  isLastQuestion: boolean
}>()

const emit = defineEmits<{
  answer: [value: SelfAssessmentAnswerValue]
  back: []
  next: []
}>()

/**
 * O StRadioGroup só permanece controlado enquanto `value` for definido, por isso
 * uma pergunta ainda sem resposta usa string vazia em vez de `undefined`. É isso
 * que limpa a seleção ao trocar de pergunta, sem precisar recriar o grupo por `key`.
 */
const handleValueChange = (value: string) => emit('answer', value as SelfAssessmentAnswerValue)
</script>

<template>
  <div :class="stSelfAssessmentStepClass">
    <StTypography variant="body-medium" :class-name="stSelfAssessmentEyebrowClass">
      {{ props.question.label }}
    </StTypography>

    <StTypography
      as="h2"
      variant="hero-title"
      line-height="snug"
      :class-name="stSelfAssessmentTitleClass"
    >
      {{ props.question.title }}
    </StTypography>

    <StPaper
      variant="surface-2"
      border="2"
      border-radius="1"
      :elevation="0"
      :class-name="stSelfAssessmentOptionsClass"
    >
      <StRadioGroup
        :value="props.answer ?? ''"
        :aria-label="props.question.title"
        @update:value="handleValueChange"
      >
        <StRadio
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        />
      </StRadioGroup>
    </StPaper>

    <div :class="stSelfAssessmentActionsClass">
      <StButton variant="text" color="primary" icon-left="arrow-left" @click="emit('back')">
        Voltar
      </StButton>

      <StButton
        variant="solid"
        color="secondary"
        icon-right="arrow-right"
        :disabled="props.answer === undefined"
        @click="emit('next')"
      >
        {{ props.isLastQuestion ? 'Ver resultado' : 'Próxima pergunta' }}
      </StButton>
    </div>
  </div>
</template>
