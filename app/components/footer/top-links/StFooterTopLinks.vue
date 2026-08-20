<script setup lang="ts">
import { computed } from 'vue'
import { StListItem, StTypography, StUnorderedList } from '@startbet/st-core-ui'
import { useFooterTopLinksService } from '~/services/footerTopLinksService'
import {
  stFooterTopLinksItemClass,
  stFooterTopLinksSobreColClass,
  stFooterTopLinksTitleClass,
  stFooterTopLinksTwoColClass
} from './styleStFooterTopLinks'

defineOptions({ name: 'StFooterTopLinks' })

const { sections } = useFooterTopLinksService()

const informacoes = computed(() => sections.find((s) => s.id === 'informacoes')!)
const produtos = computed(() => sections.find((s) => s.id === 'produtos')!)
const sobre = computed(() => sections.find((s) => s.id === 'sobre')!)
</script>

<template>
  <div class="flex flex-col lg:flex-row h-full">
    <div :class="stFooterTopLinksTwoColClass">
      <section>
        <StTypography
          as="h4"
          variant="body-small"
          weight="bold"
          uppercase
          :class-name="stFooterTopLinksTitleClass"
          >{{ informacoes.title }}</StTypography
        >
        <StUnorderedList dense>
          <StListItem
            v-for="item in informacoes.items"
            :key="item.id"
            size="small"
            clickable
            :aria-label="item.ariaLabel"
            :class-name="stFooterTopLinksItemClass"
            >{{ item.label }}</StListItem
          >
        </StUnorderedList>
      </section>

      <section class="mt-st-6 lg:mt-st-10">
        <StTypography
          as="h4"
          variant="body-small"
          weight="bold"
          uppercase
          :class-name="stFooterTopLinksTitleClass"
          >{{ produtos.title }}</StTypography
        >
        <StUnorderedList dense>
          <StListItem
            v-for="item in produtos.items"
            :key="item.id"
            size="small"
            clickable
            :aria-label="item.ariaLabel"
            :class-name="stFooterTopLinksItemClass"
            >{{ item.label }}</StListItem
          >
        </StUnorderedList>
      </section>
    </div>

    <div :class="stFooterTopLinksSobreColClass">
      <StTypography
        as="h4"
        variant="body-small"
        weight="bold"
        uppercase
        :class-name="stFooterTopLinksTitleClass"
        >{{ sobre.title }}</StTypography
      >
      <StUnorderedList dense>
        <StListItem
          v-for="item in sobre.items"
          :key="item.id"
          size="small"
          clickable
          :aria-label="item.ariaLabel"
          :class-name="stFooterTopLinksItemClass"
          >{{ item.label }}</StListItem
        >
      </StUnorderedList>
    </div>
  </div>
</template>
