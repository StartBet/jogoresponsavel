<script setup lang="ts">
import { StButton, StChip, StIcon, StPaper, StTypography } from '@startbet/st-core-ui'
import {
  stSelfAssessmentBodyClass,
  stSelfAssessmentNoticeClass,
  stSelfAssessmentStepClass,
  stSelfAssessmentTitleClass
} from '../styleStSelfAssessmentModal'

defineOptions({ name: 'StSelfAssessmentIntro' })

defineEmits<{ start: [] }>()
</script>

<template>
  <div :class="stSelfAssessmentStepClass">
    <div>
      <StChip variant="primary">Jogo responsável</StChip>
    </div>

    <StTypography
      as="h2"
      variant="hero-title"
      line-height="snug"
      :class-name="stSelfAssessmentTitleClass"
    >
      Como será sua relação com o jogo?
    </StTypography>

    <StTypography variant="body-medium" :class-name="stSelfAssessmentBodyClass">
      Responda às 10 perguntas com sinceridade. Ao final, você receberá uma orientação de acordo com
      a sua pontuação.
    </StTypography>

    <StPaper
      variant="surface-2"
      border="2"
      border-radius="1"
      :elevation="0"
      :class-name="stSelfAssessmentNoticeClass"
    >
      <StIcon
        name="lock"
        :size="3"
        aria-label="Conteúdo anônimo"
        class="text-st-content-secondary"
      />
      <StTypography variant="body-small" :class-name="stSelfAssessmentBodyClass">
        O resultado é anônimo. As suas respostas não são enviadas nem armazenadas por este
        formulário.
      </StTypography>
    </StPaper>

    <div class="pt-st-1">
      <StButton
        variant="solid"
        color="secondary"
        size="large"
        icon-right="arrow-right"
        :full-width="true"
        @click="$emit('start')"
      >
        Começar
      </StButton>
    </div>
  </div>
</template>
