<script setup lang="ts">
import StHeader from '~/components/header/StHeader.vue'
import StSelfAssessmentModal from '~/components/modal/self-assessment/StSelfAssessmentModal.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="sticky top-0 z-50">
      <StHeader />
    </div>

    <main class="flex-1">
      <slot />
    </main>

    <StSelfAssessmentModal />
  </div>
</template>
