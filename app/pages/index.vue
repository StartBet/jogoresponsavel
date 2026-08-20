<script setup lang="ts">
import HomeAwarenessResponsibleGame from '~/components/home/HomeAwarenessResponsibleGame.vue'
import HomeBalanceResponsibleGame from '~/components/home/HomeBalanceResponsibleGame.vue'
import HomeControlResponsibleGame from '~/components/home/HomeControlResponsibleGame.vue'
import HomeHero from '~/components/home/HomeHero.vue'
import HomeSupportResponsibleGame from '~/components/home/HomeSupportResponsibleGame.vue'
import HomeTopicsResponsibleGame from '~/components/home/HomeTopicsResponsibleGame.vue'
</script>

<template>
  <div>
    <HomeHero />
    <HomeBalanceResponsibleGame />
    <HomeTopicsResponsibleGame />
    <HomeControlResponsibleGame />
    <HomeSupportResponsibleGame />
    <HomeAwarenessResponsibleGame />
  </div>
</template>
