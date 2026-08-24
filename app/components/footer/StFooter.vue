<script setup lang="ts">
import { StButton, StIcon, StPaper, StTypography } from '@startbet/st-core-ui'

defineOptions({ name: 'StFooter' })

const supportChannels = [
  {
    id: 'ouvidoria',
    icon: 'phone',
    label: 'Ouvidoria',
    value: '0800 033 0396',
    href: 'tel:08000330396',
    external: false
  },
  {
    id: 'central-de-ajuda',
    icon: 'comment',
    label: 'Central de Ajuda',
    value: '0800 888 2444',
    href: 'tel:08008882444',
    external: false
  },
  {
    id: 'reclame-aqui',
    icon: 'up-right-from-square',
    label: 'Reclame Aqui',
    value: 'Ver perfil da StartBet',
    href: 'https://www.reclameaqui.com.br/busca/?q=startbet',
    external: true
  }
] as const

const chatHref = 'https://start.bet.br/'
</script>

<template>
  <footer role="contentinfo" class="bg-st-surface-4 py-st-8 md:py-st-10">
    <div class="mx-auto w-full max-w-st-160 px-st-2 md:px-st-6 lg:px-st-10">
      <StPaper
        variant="surface-1"
        border-radius="2"
        :elevation="2"
        class-name="flex flex-col gap-st-2 md:gap-st-3 p-st-2 md:p-st-4"
      >
        <div class="flex items-center gap-st-2">
          <div
            class="w-st-6 h-st-6 shrink-0 rounded-st-1 bg-st-surface-3 flex items-center justify-center text-st-secondary shadow-st-paper-1"
          >
            <StIcon name="circle-info" :size="6" />
          </div>

          <div class="flex flex-col gap-st-1">
            <StTypography
              variant="body-small"
              class-name="text-st-secondary uppercase tracking-[0.3em]"
            >
              Suporte StartBet
            </StTypography>

            <StTypography
              as="h2"
              line-height="snug"
              variant="hero-title"
              class-name="text-st-lg md:text-st-xl lg:text-st-2xl"
            >
              Ainda ficou dúvida?
            </StTypography>
          </div>
        </div>

        <div class="h-px w-full bg-st-border-1" />

        <div class="flex flex-col gap-st-6 lg:flex-row lg:items-end lg:justify-between">
          <ul class="grid flex-1 grid-cols-1 gap-st-4 sm:grid-cols-2">
            <li
              v-for="channel in supportChannels"
              :key="channel.id"
              class="flex items-center gap-st-3"
            >
              <StIcon :name="channel.icon" :size="6" class-name="text-st-secondary shrink-0" />

              <div class="flex flex-col">
                <StTypography variant="body-small" class-name="text-content-secondary">
                  {{ channel.label }}
                </StTypography>

                <a
                  :href="channel.href"
                  :target="channel.external ? '_blank' : '_self'"
                  :rel="channel.external ? 'noopener noreferrer' : undefined"
                  class="w-fit"
                >
                  <StTypography
                    variant="highlight-medium"
                    class-name="text-st-secondary hover:underline"
                  >
                    {{ channel.value }}
                  </StTypography>
                </a>
              </div>
            </li>
          </ul>

          <a :href="chatHref" target="_self" class="w-full lg:w-auto">
            <StButton
              variant="solid"
              color="secondary"
              size="large"
              icon-left="comment"
              :full-width="true"
              class-name="shadow-st-action-hover"
            >
              Abrir chat
            </StButton>
          </a>
        </div>
      </StPaper>
    </div>
  </footer>
</template>
