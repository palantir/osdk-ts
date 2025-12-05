<script setup lang="ts">
import Header from "./components/Header.vue";
import NextSteps from "./components/NextSteps.vue";
</script>

<template>
  <div class="home">
    <Header />
    <NextSteps />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 800px;
}
</style>
