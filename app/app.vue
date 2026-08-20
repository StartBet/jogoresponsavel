<script setup lang="ts">
useHead({
  htmlAttrs: {
    'data-theme': 'dark'
  }
})
</script>

<template>
  <div class="bg-st-surface-4">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
