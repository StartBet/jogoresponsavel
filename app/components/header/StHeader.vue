<script setup lang="ts">
import { computed } from 'vue'
import { StButton, StIllustration, StPaper } from '@startbet/st-core-ui'
import { useThemeService } from '~/services/themeService'
import { stHeaderRootClass } from './styleStHeader'

defineOptions({ name: 'StHeader' })

const { theme } = useThemeService()

const brandIllustrationName = computed(() =>
  theme.value === 'light' ? 'brands/logo_light' : 'brands/logo_dark'
)
</script>

<template>
  <header :class="stHeaderRootClass">
    <StPaper
      variant="surface-0"
      width="full"
      :elevation="0"
      border-radius="none"
      class-name="border-b border-st-border-1"
    >
      <div class="w-full grid items-stretch p-st-2 grid-cols-2 lg:grid-cols-2">
        <div class="flex items-center justify-start gap-st-2">
          <NuxtLink to="/" aria-label="Home">
            <StIllustration
              :name="brandIllustrationName"
              alt="Brand"
              height="3"
              class-name="transition-all duration-200 ease-in-out hover:drop-shadow-action-hover active:drop-shadow-action-pressed"
            />
          </NuxtLink>
        </div>

        <nav
          aria-label="Navegação Jogo Responsável"
          class="hidden lg:flex items-center justify-end gap-st-2"
        >
          <NuxtLink to="/#balance">
            <StButton variant="text">Equilíbrio</StButton>
          </NuxtLink>
          <NuxtLink to="/#topics">
            <StButton variant="text">Entenda o Jogo</StButton>
          </NuxtLink>
          <NuxtLink to="/#control">
            <StButton variant="text">Controle</StButton>
          </NuxtLink>
          <NuxtLink to="/#support">
            <StButton variant="text">Apoio</StButton>
          </NuxtLink>
        </nav>
      </div>
    </StPaper>
  </header>
</template>
