<script setup lang="ts">
import { StButton, StPaper, StTypography } from '@startbet/st-core-ui'
import StIconBadge from '~/components/icon-badge'

const controlToolsCards = [
  {
    icon: 'coins',
    title: 'Limite de depósito',
    body: 'Defina previamente quanto pode depositar em um período e mantenha sua atividade dentro do orçamento.'
  },
  {
    icon: 'scale-balanced',
    title: 'Limite de perdas',
    body: 'Estabeleça o máximo que aceita perder antes de começar. Isso ajuda a evitar decisões impulsivas.'
  },
  {
    icon: 'sliders',
    title: 'Limite de sessão',
    body: 'Controle o tempo de uso e crie uma referência clara para encerrar a sessão.'
  },
  {
    icon: 'rotate-left',
    title: 'Dar um tempo',
    body: 'Afaste-se da plataforma por um período definido quando sentir que precisa desacelerar e reorganizar a rotina.'
  },
  {
    icon: 'bars',
    title: 'Histórico da conta',
    body: 'Acompanhe sua atividade para entender padrões de uso, gastos e frequência com mais transparência.'
  },
  {
    icon: 'right-to-bracket',
    title: 'Autoexclusão',
    body: 'Bloqueie o acesso à conta por um período escolhido quando uma pausa mais longa for necessária.'
  }
] as const
</script>

<template>
  <section id="control" class="bg-st-surface-4 py-st-10 md:py-st-15 lg:py-st-20">
    <div class="mx-auto w-full max-w-st-160 px-st-2 md:px-st-6 lg:px-st-10">
      <header class="flex flex-col gap-st-2 mb-st-8 md:mb-st-10 lg:mb-st-12 max-w-st-160">
        <StTypography
          variant="body-large"
          class-name="text-st-secondary uppercase tracking-[0.3em]"
        >
          Controle
        </StTypography>

        <StTypography
          as="h2"
          line-height="snug"
          :lines="2"
          variant="hero-title"
          class-name="text-st-2xl md:text-st-3xl lg:text-st-4xl"
        >
          Ferramentas para deixar você no comando.
        </StTypography>

        <StTypography variant="body-medium" class-name="text-content-secondary max-w-[85ch]">
          Use os recursos da sua conta para organizar limites, acompanhar sua atividade e criar
          pausas quando precisar.
        </StTypography>
      </header>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-st-4 md:gap-st-4 mb-st-6 md:mb-st-8 lg:mb-st-10"
      >
        <StPaper
          v-for="card in controlToolsCards"
          :key="card.title"
          surface="1"
          :elevation="2"
          class-name="h-full flex flex-col gap-st-2 p-st-2 border border-st-border-2"
        >
          <StIconBadge :name="card.icon" />
          <StTypography variant="highlight-medium" class-name="text-content-default uppercase">
            {{ card.title }}
          </StTypography>
          <StTypography variant="body-small" class-name="text-content-secondary">
            {{ card.body }}
          </StTypography>
        </StPaper>
      </div>

      <div
        class="flex flex-col gap-st-4 items-start lg:flex-row lg:items-center lg:justify-between"
      >
        <a href="https://start.bet.br/user/protection" target="_self" class="w-full lg:w-auto">
          <StButton
            variant="solid"
            color="secondary"
            size="large"
            icon-right="right-to-bracket"
            :full-width="true"
            class-name="shadow-st-action-hover"
          >
            Configurar ferramentas
          </StButton>
        </a>
      </div>
    </div>
  </section>
</template>
