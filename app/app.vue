<script setup lang="ts">
useHead({
  htmlAttrs: {
    'data-theme': 'dark'
  },
  title: 'Jogo Resposável | StartBet',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'https://images.cometagaming.com/e0dc892c-f394-4e3c-69df-3e4290338400/banDesktop'
    }
  ]
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
