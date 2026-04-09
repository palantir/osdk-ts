<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="logos">
      <a
        href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/palantir.svg" class="logo" alt="Palantir logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
        <img src="/vue.svg" class="logo" alt="Vue logo" />
      </a>
    </div>
    <h2 class="heading">Build your Vue application with Foundry!</h2>
  </header>
</template>

<style scoped>
.header {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.logos {
  display: flex;
  gap: 32px;
}

.logo {
  height: 48px;
  transition: filter 300ms;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
