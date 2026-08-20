<script setup lang="ts">
import { StButton, StIcon, StPaper, StTypography } from '@startbet/st-core-ui'

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
  <section class="bg-st-surface-4 py-st-10 md:py-st-15 lg:py-st-20">
    <div class="mx-auto w-full max-w-st-160 px-st-2 md:px-st-6 lg:px-st-10">
      <StPaper
        surface="1"
        :elevation="2"
        class-name="mb-st-10 md:mb-st-14 lg:mb-st-18 p-st-6 md:p-st-8 lg:p-st-12 rounded-st-2 border border-st-secondary flex flex-col items-center text-center gap-st-4"
      >
        <StTypography
          variant="body-large"
          class-name="text-st-secondary uppercase tracking-[0.3em]"
        >
          Consciência
        </StTypography>

        <StTypography
          as="h2"
          line-height="snug"
          :lines="2"
          variant="hero-title"
          class-name="text-st-2xl md:text-st-3xl lg:text-st-4xl"
        >
          Pedir ajuda também é
          <span class="text-st-secondary italic"> jogar bem</span>.
        </StTypography>

        <StTypography variant="body-medium" class-name="text-content-secondary max-w-[95ch]">
          Reconhecer quando parar não é perder o jogo — é mostrar que você está no comando. Se
          apertar, não espere: procure orientação e use os canais de apoio disponíveis.
        </StTypography>

        <NuxtLink to="/#support" class="w-full md:w-auto">
          <StButton
            variant="solid"
            color="secondary"
            size="large"
            icon-right="right-to-bracket"
            :full-width="true"
            class-name="shadow-st-action-hover mt-st-2"
          >
            Ver canais de apoio
          </StButton>
        </NuxtLink>
      </StPaper>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-st-4 md:gap-st-4">
        <StPaper
          v-for="card in principleCards"
          :key="card.title"
          surface="1"
          :elevation="1"
          class-name="h-full flex flex-col gap-st-3 p-st-4 border border-st-secondary"
        >
          <div
            class="w-st-8 h-st-8 rounded-st-1 bg-st-secondary flex items-center justify-center text-st-surface-0 shadow-st-paper-1 mb-st-1"
          >
            <StIcon :name="card.icon" :size="6" />
          </div>
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
