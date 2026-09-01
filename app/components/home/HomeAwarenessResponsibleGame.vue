<script setup lang="ts">
import { StButton, StPaper, StTypography } from '@startbet/st-core-ui'
import StIconBadge from '~/components/icon-badge'

const awarenessActions = [
  {
    label: 'Ver canais de apoio',
    to: '/#support',
    target: '_self',
    color: 'secondary',
    icon: 'right-to-bracket'
  },
  {
    label: 'Políticas do jogo responsável',
    to: 'https://start.bet.br/responsible-gaming',
    target: '_self',
    color: 'primary',
    icon: 'right-to-bracket'
  },
  {
    label: 'Baixar cartilha',
    to: 'https://cdn.start.bet.br/jogo-responsavel-startbet.pdf',
    target: '_blank',
    color: 'primary',
    icon: 'download'
  }
] as const

const principleCards = [
  {
    icon: 'scale-balanced',
    title: 'Equilíbrio',
    subtitle: 'Os 4 princípios'
  },
  {
    icon: 'brain',
    title: 'Consciência',
    subtitle: 'Autoavaliação'
  },
  {
    icon: 'sliders',
    title: 'Controle',
    subtitle: 'Ferramentas de limite'
  },
  {
    icon: 'heart-pulse',
    title: 'Apoio',
    subtitle: 'Ajuda e canais'
  }
] as const
</script>

<template>
  <section class="bg-st-surface-4 py-st-6 md:py-st-8 lg:py-st-10">
    <div class="mx-auto w-full max-w-st-160 px-st-2 md:px-st-6 lg:px-st-10">
      <StPaper
        surface="1"
        :elevation="2"
        class-name="mb-st-5 md:mb-st-6 lg:mb-st-8 p-st-4 md:p-st-5 lg:p-st-6 rounded-st-2 border border-st-secondary flex flex-col items-center text-center gap-st-4"
      >
        <StTypography
          variant="body-large"
          class-name="text-st-content-secondary uppercase tracking-[0.3em]"
        >
          Consciência
        </StTypography>

        <StTypography
          as="h2"
          line-height="tight"
          :lines="2"
          variant="hero-title"
          class-name="!text-st-2xl md:!text-st-3xl lg:!text-st-4xl"
        >
          Pedir ajuda também é
          <span class="text-st-content-secondary italic"> jogar bem</span>.
        </StTypography>

        <StTypography variant="body-medium" class-name="text-content-secondary max-w-[95ch]">
          Reconhecer quando parar não é perder o jogo — é mostrar que você está no comando. Se
          apertar, não espere: procure orientação e use os canais de apoio disponíveis.
        </StTypography>

        <div class="flex w-full max-w-st-56 flex-col items-stretch gap-st-3">
          <NuxtLink
            v-for="action in awarenessActions"
            :key="action.label"
            :to="action.to"
            :target="action.target"
            :rel="action.target === '_blank' ? 'noopener noreferrer' : undefined"
            class="block w-full"
          >
            <div class="block md:hidden">
              <StButton
                variant="solid"
                :color="action.color"
                size="small"
                :icon-right="action.icon"
                :full-width="true"
                class-name="!justify-center !h-auto min-h-8"
              >
                {{ action.label }}
              </StButton>
            </div>
            <div class="hidden md:block">
              <StButton
                variant="solid"
                :color="action.color"
                size="large"
                :icon-right="action.icon"
                :full-width="true"
                class-name="!justify-center !h-auto min-h-12"
              >
                {{ action.label }}
              </StButton>
            </div>
          </NuxtLink>
        </div>
      </StPaper>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-st-4 md:gap-st-4">
        <StPaper
          v-for="card in principleCards"
          :key="card.title"
          surface="1"
          :elevation="1"
          class-name="h-full flex flex-col gap-st-1 p-st-3 border border-st-secondary"
        >
          <StIconBadge :name="card.icon" />
          <StTypography variant="highlight-medium" class-name="text-content-default uppercase">
            {{ card.title }}
          </StTypography>
          <StTypography variant="body-small" class-name="text-content-secondary">
            {{ card.subtitle }}
          </StTypography>
        </StPaper>
      </div>
    </div>
  </section>
</template>
