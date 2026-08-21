<script setup lang="ts">
import {
  StButton,
  StIcon,
  StListItem,
  StPaper,
  StTypography,
  StUnorderedList
} from '@startbet/st-core-ui'
import type { SelfAssessmentResult } from '~/types/SelfAssessment'
import {
  stSelfAssessmentActionsClass,
  stSelfAssessmentBodyClass,
  stSelfAssessmentOptionsClass,
  stSelfAssessmentStepClass,
  stSelfAssessmentTitleClass
} from '../styleStSelfAssessmentModal'

defineOptions({ name: 'StSelfAssessmentResult' })

const props = defineProps<{
  result: SelfAssessmentResult
  recommendations: string[]
  disclaimer: string
  limitsUrl: string
}>()

const emit = defineEmits<{
  restart: []
  configureLimits: []
}>()
</script>

<template>
  <div :class="stSelfAssessmentStepClass">
    <div class="flex items-center gap-st-2">
      <StIcon
        :name="props.result.icon"
        :size="6"
        :aria-label="props.result.title"
        :class="props.result.toneClass"
      />

      <StTypography
        as="h2"
        variant="hero-title"
        line-height="snug"
        :class-name="`${stSelfAssessmentTitleClass} ${props.result.toneClass}`"
      >
        {{ props.result.title }}
      </StTypography>
    </div>

    <StTypography variant="body-medium" :class-name="stSelfAssessmentBodyClass">
      {{ props.result.description }}
    </StTypography>

    <StPaper
      variant="surface-2"
      border="2"
      border-radius="1"
      :elevation="0"
      :class-name="stSelfAssessmentOptionsClass"
    >
      <StUnorderedList dense>
        <StListItem
          v-for="recommendation in props.recommendations"
          :key="recommendation"
          size="small"
        >
          {{ recommendation }}
        </StListItem>
      </StUnorderedList>
    </StPaper>

    <StTypography variant="body-small" :class-name="stSelfAssessmentBodyClass">
      {{ props.disclaimer }}
    </StTypography>

    <div :class="stSelfAssessmentActionsClass">
      <StButton variant="text" color="primary" icon-left="rotate-left" @click="emit('restart')">
        Refazer avaliação
      </StButton>

      <a :href="props.limitsUrl" target="_self" @click="emit('configureLimits')">
        <StButton variant="solid" color="secondary" icon-left="sliders" :full-width="true">
          Configurar limites
        </StButton>
      </a>
    </div>
  </div>
</template>
