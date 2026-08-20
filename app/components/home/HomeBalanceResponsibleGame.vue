<script setup lang="ts">
import { StIcon, StPaper, StTypography } from '@startbet/st-core-ui'

const balanceCards = [
  {
    number: '01',
    icon: 'heart-pulse',
    title: 'Não use o jogo como fuga',
    body: 'Se a aposta estiver servindo para aliviar problemas, frustrações ou ansiedade, interrompa a sessão e procure outra forma de lidar com o momento.'
  },
  {
    number: '02',
    icon: 'user-check',
    title: 'Priorize sua rotina',
    body: 'Família, trabalho, estudo e amigos vêm primeiro. A aposta deve ocupar somente uma pequena parte do seu tempo de lazer.'
  },
  {
    number: '03',
    icon: 'scale-balanced',
    title: 'Defina limites antes',
    body: 'Escolha antecipadamente quanto tempo e dinheiro você pode usar. Limites claros reduzem decisões por impulso.'
  },
  {
    number: '04',
    icon: 'rotate-left',
    title: 'Aceite o resultado',
    body: 'Perdas fazem parte da atividade. Não aumente valores nem prolongue a sessão tentando recuperar o que já foi perdido.'
  }
] as const
</script>

<template>
  <section id="balance" class="bg-st-surface-4 py-st-10 md:py-st-15 lg:py-st-20">
    <div class="mx-auto w-full max-w-st-160 px-st-2 md:px-st-6 lg:px-st-10">
      <div
        class="flex flex-col gap-st-4 lg:flex-row lg:items-end lg:justify-between lg:gap-st-6 mb-st-8 md:mb-st-10 lg:mb-st-12"
      >
        <header class="flex flex-col gap-st-2">
          <StTypography
            variant="body-large"
            class-name="text-st-secondary uppercase tracking-[0.3em]"
          >
            Equilíbrio
          </StTypography>

          <StTypography
            as="h2"
            line-height="snug"
            :lines="2"
            variant="hero-title"
            class-name="text-st-2xl md:text-st-3xl lg:text-st-4xl"
          >
            Mantenha o equilíbrio do começo ao fim.
          </StTypography>
        </header>

        <StPaper
          surface="2"
          :elevation="1"
          class-name="max-w-[60ch] w-full p-st-3 rounded-st-2 border border-st-border-2"
        >
          <StTypography variant="body-medium" class-name="text-content-secondary">
            Jogar de forma responsável começa antes da aposta: com orçamento, tempo e expectativa
            bem definidos. O jogo nunca deve ocupar o lugar do trabalho, das relações ou das suas
            prioridades.
          </StTypography>
        </StPaper>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-st-4 md:gap-st-4">
        <StPaper
          v-for="card in balanceCards"
          :key="card.number"
          surface="1"
          :elevation="1"
          class-name="h-full flex flex-col gap-st-2 p-st-4 border border-st-border-2 rounded-st-2 relative overflow-hidden"
        >
          <div class="relative flex items-end justify-between gap-st-2 mb-st-1">
            <StTypography variant="hero-title" class-name="text-st-secondary">
              {{ card.number }}
            </StTypography>
            <div
              class="w-st-8 h-st-8 rounded-st-1 bg-st-secondary flex items-center justify-center text-st-surface-0 shadow-st-paper-1"
            >
              <StIcon :name="card.icon" :size="6" />
            </div>
          </div>
          <StTypography variant="highlight-medium" class-name="text-content-default uppercase">
            {{ card.title }}
          </StTypography>
          <StTypography variant="body-small" class-name="text-content-secondary">
            {{ card.body }}
          </StTypography>
        </StPaper>
      </div>
    </div>
  </section>
</template>
