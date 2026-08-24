<script setup lang="ts">
import { StIcon } from '@startbet/st-core-ui'
import type { StIconBadgeProps } from './StIconBadge.interface'

defineOptions({ name: 'StIconBadge' })

const props = defineProps<StIconBadgeProps>()
</script>

<template>
  <div
    class="w-st-6 h-st-6 shrink-0 rounded-st-1 bg-st-surface-3 flex items-center justify-center text-st-content-secondary shadow-st-paper-1"
  >
    <StIcon :name="props.name" :size="6" :aria-label="props.ariaLabel" />
  </div>
</template>
