<script setup lang="ts">
import { StButton, StIllustration, StTypography } from '@startbet/st-core-ui'
import type { StFooterBrandAndLegalProps } from './StFooterBrandAndLegal.interface'
import {
  stFooterBrandAndLegalBadgeImgClass,
  stFooterBrandAndLegalBadgesColClass,
  stFooterBrandAndLegalBodyRowClass,
  stFooterBrandAndLegalHeaderRowClass,
  stFooterBrandAndLegalSocialButtonClass,
  stFooterBrandAndLegalSocialRowClass,
  stFooterBrandAndLegalTextColClass
} from './styleStFooterBrandAndLegal'

defineOptions({ name: 'StFooterBrandAndLegal' })

const props = defineProps<StFooterBrandAndLegalProps>()

const socialButtons = [
  { icon: 'fab:telegram-plane', label: 'Telegram' },
  { icon: 'fab:youtube', label: 'YouTube' },
  { icon: 'fab:instagram', label: 'Instagram' },
  { icon: 'fab:x-twitter', label: 'X / Twitter' },
  { icon: 'fab:tiktok', label: 'TikTok' }
] as const
</script>

<template>
  <div class="flex flex-col h-full">
    <div :class="stFooterBrandAndLegalHeaderRowClass">
      <NuxtLink to="/" aria-label="Home" class="shrink-0">
        <StIllustration
          :name="props.brandIllustrationName"
          alt="Startbet"
          height="6"
          class-name="transition-all duration-200 ease-in-out hover:drop-shadow-action-hover active:drop-shadow-action-pressed"
        />
      </NuxtLink>
      <div :class="stFooterBrandAndLegalSocialRowClass">
        <StButton
          v-for="social in socialButtons"
          :key="social.icon"
          :aria-label="social.label"
          color="primary"
          variant="outline"
          size="small"
          :icon-left="social.icon"
          :class-name="stFooterBrandAndLegalSocialButtonClass"
        />
      </div>
    </div>

    <div :class="stFooterBrandAndLegalBodyRowClass">
      <div :class="stFooterBrandAndLegalTextColClass">
        <StTypography as="p" variant="body-small" class="text-content-secondary leading-relaxed">
          A <span class="text-brand-primary font-semibold">Startbet</span> é operada pela LBBR
          APOSTAS DE QUOTA FIXA S.A, uma empresa registrada sob o CNPJ nº 56.441.713/0001-45,
          licenciada - em nível federal - pela Secretaria de Prêmios e Apostas do Ministério da
          Fazenda (&ldquo;SPA/MF&rdquo;) no Brasil com o número de Autorização SPA/MF nº 527,
          publicada em 14 de março de 2025 no Diário Oficial da União | Ouvidoria: 0800 033 0396,
          ouvidoria@lbbr.org Endereço Sede LBBR: Cidade e Estado de São Paulo, na Rua Luigi Galvani,
          nº 200, 5º Andar, cj. 52, Cidade Monções, CEP 04.575-020
        </StTypography>
        <StTypography
          as="p"
          variant="body-small"
          weight="bold"
          class="text-content-tertiary leading-relaxed"
        >
          Ministério da Fazenda adverte: Aposta não é investimento e pode causar dependência. Ganhos
          passados não garantem ganhos futuros. Autorização SPA/MF nº 527 de 2025. Proibido para
          menores de 18 anos.
        </StTypography>
      </div>

      <div :class="stFooterBrandAndLegalBadgesColClass">
        <img
          src="https://cdn.start.bet.br/cdn-cgi/image/quality=70,format=auto/startbet/footer/autorizado-mf.png"
          alt="Autorizado pelo Ministério da Fazenda"
          height="72"
          width="320"
          :class="stFooterBrandAndLegalBadgeImgClass"
        />
        <img
          src="https://cdn.start.bet.br/startbet/footer/jogue-com-resposabilidade.svg"
          alt="Jogue com responsabilidade +18"
          height="72"
          width="320"
          :class="stFooterBrandAndLegalBadgeImgClass"
        />
      </div>
    </div>
  </div>
</template>
