<script setup lang="ts">
import { StTypography } from '@startbet/st-core-ui'
import {
  stFooterSponsorsAndPaymentLogoImgClass,
  stFooterSponsorsAndPaymentLogosRowClass,
  stFooterSponsorsAndPaymentPixWrapClass,
  stFooterSponsorsAndPaymentPaymentColClass,
  stFooterSponsorsAndPaymentRowClass,
  stFooterSponsorsAndPaymentSponsorItemClassName,
  stFooterSponsorsAndPaymentSponsorsColClass,
  stFooterSponsorsAndPaymentTitleClass
} from './styleStFooterSponsorsAndPayment'

defineOptions({ name: 'StFooterSponsorsAndPayment' })

const sponsors = [
  {
    id: 'mineiro',
    src: 'https://cdn.start.bet.br/startbet/footer/logo-campeonato-mineiro.svg',
    alt: 'Campeonato Mineiro'
  },
  {
    id: 'swift',
    src: 'https://cdn.start.bet.br/startbet/footer/logo-swift.svg',
    alt: 'Swift Carbon Pro Cycling'
  },
  {
    id: 'fcth',
    src: 'https://cdn.start.bet.br/startbet/footer/logo-fcth.svg',
    alt: 'FCTH'
  }
] as const
</script>

<template>
  <div :class="stFooterSponsorsAndPaymentRowClass">
    <div :class="stFooterSponsorsAndPaymentSponsorsColClass">
      <StTypography
        as="h4"
        variant="body-small"
        weight="bold"
        uppercase
        :class-name="stFooterSponsorsAndPaymentTitleClass"
        >Patrocinadores oficiais da Start em 2026</StTypography
      >
      <div :class="stFooterSponsorsAndPaymentLogosRowClass">
        <div
          v-for="(sponsor, idx) in sponsors"
          :key="sponsor.id"
          :class="[idx < sponsors.length - 1 ? stFooterSponsorsAndPaymentSponsorItemClassName : '']"
        >
          <img
            :src="sponsor.src"
            :alt="sponsor.alt"
            height="48"
            width="auto"
            :class="stFooterSponsorsAndPaymentLogoImgClass"
          />
        </div>
      </div>
    </div>

    <div :class="stFooterSponsorsAndPaymentPaymentColClass">
      <StTypography
        as="h4"
        variant="body-small"
        weight="bold"
        uppercase
        :class-name="stFooterSponsorsAndPaymentTitleClass"
        >Pague com:</StTypography
      >
      <div :class="stFooterSponsorsAndPaymentPixWrapClass">
        <img
          src="https://cdn.start.bet.br/startbet/footer/logo-pix.svg"
          alt="Pagamento via Pix"
          height="48"
          width="auto"
          :class="stFooterSponsorsAndPaymentLogoImgClass"
        />
      </div>
    </div>
  </div>
</template>
