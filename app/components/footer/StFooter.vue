<script setup lang="ts">
import { computed } from 'vue'
import { StButton, StIcon, StIllustration, StPaper, StTypography } from '@startbet/st-core-ui'
import StIconBadge from '~/components/icon-badge'
import { useThemeService } from '~/services/themeService'

defineOptions({ name: 'StFooter' })

const { theme } = useThemeService()

const brandIllustrationName = computed(() =>
  theme.value === 'light' ? 'brands/logo_light' : 'brands/logo_dark'
)

const legalBadges = [
  {
    id: 'autorizado-mf',
    src: 'https://cdn.start.bet.br/cdn-cgi/image/quality=70,format=auto/startbet/footer/autorizado-mf.png',
    alt: 'Autorizado pelo Ministério da Fazenda'
  },
  {
    id: 'jogue-com-responsabilidade',
    src: 'https://cdn.start.bet.br/startbet/footer/jogue-com-resposabilidade.svg',
    alt: 'Jogue com responsabilidade — proibido para menores de 18 anos'
  }
] as const

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
          <StIconBadge name="circle-info" />

          <div class="flex flex-col gap-st-1">
            <StTypography
              variant="body-small"
              class-name="text-st-secondary uppercase tracking-[0.3em]"
            >
              Suporte StartBet
            </StTypography>

            <StTypography
              as="h2"
              line-height="tight"
              variant="hero-title"
              class-name="!text-st-lg md:!text-st-xl lg:!text-st-2xl"
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

      <div class="mt-st-4 md:mt-st-5 flex flex-col gap-st-3 md:gap-st-4">
        <NuxtLink to="/" aria-label="Home" class="w-fit">
          <StIllustration
            :name="brandIllustrationName"
            alt="Startbet"
            height="4"
            class-name="transition-all duration-200 ease-in-out hover:drop-shadow-action-hover active:drop-shadow-action-pressed"
          />
        </NuxtLink>

        <div class="flex flex-col gap-st-4 lg:flex-row lg:items-start lg:justify-between">
          <div class="flex flex-col gap-st-3 lg:max-w-[70%]">
            <StTypography as="p" variant="body-small" class-name="text-st-content-disable">
              A <span class="text-st-content-secondary font-semibold">Startbet</span> é operada pela
              LBBR APOSTAS DE QUOTA FIXA S.A, uma empresa registrada sob o CNPJ nº
              56.441.713/0001-45, licenciada - em nível federal - pela Secretaria de Prêmios e
              Apostas do Ministério da Fazenda (&ldquo;SPA/MF&rdquo;) no Brasil com o número de
              Autorização SPA/MF nº 527, publicada em 14 de março de 2025 no Diário Oficial da União
              | Ouvidoria: 0800 033 0396, ouvidoria@lbbr.org Endereço Sede LBBR: Cidade e Estado de
              São Paulo, na Rua Luigi Galvani, nº 200, 5º Andar, cj. 52, Cidade Monções, CEP
              04.575-020
            </StTypography>

            <StTypography
              as="p"
              variant="body-small"
              weight="bold"
              class-name="text-st-content-disable"
            >
              Ministério da Fazenda adverte: Aposta não é investimento e pode causar dependência.
              Ganhos passados não garantem ganhos futuros. Autorização SPA/MF nº 527 de 2025.
              Proibido para menores de 18 anos.
            </StTypography>
          </div>

          <div class="flex shrink-0 flex-col items-start gap-st-3">
            <img
              v-for="badge in legalBadges"
              :key="badge.id"
              :src="badge.src"
              :alt="badge.alt"
              loading="lazy"
              class="h-auto w-st-30 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
