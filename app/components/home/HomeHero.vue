<script setup lang="ts">
import { StBadge, StButton, StChip, StTypography } from '@startbet/st-core-ui'
import { SELF_ASSESSMENT_MODAL_NAME } from '~/components/modal/self-assessment/StSelfAssessmentModal.interface'
import { useStModal } from '~/composables/useStModal'

const { open: openSelfAssessment } = useStModal(SELF_ASSESSMENT_MODAL_NAME)

const heroImageBase = 'https://cdn.start.bet.br/cdn-cgi/image/format=auto,quality=75,fit=scale-down'

const heroImageSrcset = `
${heroImageBase},width=480/https://cdn.start.bet.br/startbet/jogo-responsavel/jogo-responsavel.webp 480w,
${heroImageBase},width=768/https://cdn.start.bet.br/startbet/jogo-responsavel/jogo-responsavel.webp 768w,
${heroImageBase},width=1024/https://cdn.start.bet.br/startbet/jogo-responsavel/jogo-responsavel.webp 1024w,
${heroImageBase},width=1536/https://cdn.start.bet.br/startbet/jogo-responsavel/jogo-responsavel.webp 1536w,
${heroImageBase},width=2048/https://cdn.start.bet.br/startbet/jogo-responsavel/jogo-responsavel.webp 2048w
`
  .trim()
  .replace(/\n\s+/g, ' ')

const heroImageSizes = '(max-width: 639px) 240px, (max-width: 1023px) 420px, 560px'
const heroImageSrc = `${heroImageBase},width=1024/https://cdn.start.bet.br/startbet/jogo-responsavel/jogo-responsavel.webp`
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <div
      class="mx-auto w-full max-w-st-160 px-st-2 pb-st-4 md:px-st-6 md:py-st-8 lg:px-st-10 lg:py-st-10"
    >
      <div class="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-st-6">
        <div class="order-2 lg:order-1">
          <StTypography
            variant="body-large"
            class-name="text-content-secondary uppercase tracking-[0.3em]"
          >
            Jogue responsável
          </StTypography>

          <StTypography
            as="h1"
            line-height="tight"
            :lines="2"
            variant="hero-title"
            class-name="!text-st-2xl md:!text-st-3xl lg:!text-st-4xl"
          >
            Deixe o lado Responsável da emoção
          </StTypography>

          <StTypography
            variant="body-large"
            class-name="text-content-default/90 text-st-sm md:text-st-base lg:text-st-lg max-w-st-72 md:max-w-st-80 lg:max-w-[40ch] mb-st-4 text-left"
          >
            Na Start.bet, apostar deve continuar sendo entretenimento. Defina seus limites, entenda
            como o jogo funciona e reconheça a hora de parar.
          </StTypography>

          <div
            class="flex flex-col items-stretch gap-st-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start sm:flex-wrap"
          >
            <a href="https://start.bet.br/user/protection" target="_self" class="w-full sm:w-auto">
              <StButton
                variant="solid"
                color="secondary"
                size="large"
                icon-left="sliders"
                :full-width="true"
                class-name="shadow-st-action-hover"
              >
                Configurar meus limites
              </StButton>
            </a>

            <div class="w-full sm:w-auto">
              <StButton
                variant="outline"
                color="primary"
                size="large"
                icon-left="user-check"
                :full-width="true"
                @click="openSelfAssessment"
              >
                Fazer autoavaliação
              </StButton>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="relative mx-auto w-st-30 sm:w-st-40 md:w-full">
            <div
              class="absolute -inset-st-3 rounded-st-2 bg-gradient-to-br from-brand-secondary-500/20 via-transparent to-info-color-400/10 blur-st-6 -z-10"
            />
            <img
              :src="heroImageSrc"
              :srcset="heroImageSrcset"
              :sizes="heroImageSizes"
              width="1024"
              height="683"
              alt="Jogo Responsável — você no controle"
              class="w-full h-auto rounded-st-2 object-cover shadow-st-paper-4"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <div class="absolute top-st-1 right-0 md:top-st-6 md:right-st-2">
              <StChip variant="primary"> você decide seus limites </StChip>
              <StBadge variant="positive" size="small" pulse class="!absolute top-0 -left-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
