<template>
  <div>
    <a href="https://www.palantir.com/" target="_blank">
      <img src="/palantir.svg" class="logo" alt="Palantir logo" />
    </a>
    <a
      href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
      target="_blank"
    >
      <img src="/dev-console.svg" class="logo" alt="Developer Console logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/vue.svg" class="logo" alt="Vue logo" />
    </a>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
