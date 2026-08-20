<script setup lang="ts">
import { computed } from 'vue'
import { StPaper } from '@startbet/st-core-ui'
import {
  stFooterBrandColClass,
  stFooterInnerWrapClass,
  stFooterOuterPaperClass,
  stFooterRootClass,
  stFooterSeparatorClass,
  stFooterTopGridClass,
  stFooterTopLinksColClass
} from './styleStFooter'
import { useThemeService } from '~/services/themeService'
import StFooterTopLinks from './top-links'
import StFooterBrandAndLegal from './brand-and-legal'
import StFooterSponsorsAndPayment from './sponsors-and-payment'

defineOptions({ name: 'StFooter' })

const { theme } = useThemeService()

const brandIllustrationName = computed(() =>
  theme.value === 'light' ? 'brands/logo_light' : 'brands/logo_dark'
)
</script>

<template>
  <footer :class="stFooterRootClass" role="contentinfo">
    <StPaper
      variant="surface-3"
      border-radius="none"
      :elevation="0"
      :class-name="stFooterOuterPaperClass"
    >
      <div :class="stFooterInnerWrapClass">
        <div :class="stFooterTopGridClass">
          <div :class="stFooterTopLinksColClass">
            <StFooterTopLinks />
          </div>
          <div :class="stFooterBrandColClass">
            <StFooterBrandAndLegal :brand-illustration-name="brandIllustrationName" />
          </div>
        </div>

        <div :class="stFooterSeparatorClass" />

        <StFooterSponsorsAndPayment />
      </div>
    </StPaper>
  </footer>
</template>
