<script setup lang="ts">
import { $Objects, $Actions, $Queries } from "@osdk/e2e.generated.catchall";

const objectApiNames = Object.keys($Objects);
const actionApiNames = Object.keys($Actions);
const queryApiNames = Object.keys($Queries);
</script>

<template>
  <h1>@osdk/e2e.generated.catchall</h1>
  <p>
    Welcome to your Ontology SDK! Try using any of the following methods now.
  </p>
  <div class="methods">
    <div>
      <h2>Objects ({{ objectApiNames.length }})</h2>
      <pre v-for="objectApiName in objectApiNames" key="objectApiName">$Objects.{{ objectApiName }}</pre>
    </div>
    <div>
      <h2>Actions ({{ actionApiNames.length }})</h2>
      <pre v-for="actionApiName in actionApiNames" key="actionApiName">$Actions.{{ actionApiName }}</pre>
    </div>
    <div>
      <h2>Queries ({{ queryApiNames.length }})</h2>
      <pre v-for="queryApiName in queryApiNames" key="queryApiName">$Queries.{{ queryApiName }}</pre>
    </div>
  </div>
</template>

<style scoped>
.methods {
  padding: 2em;
  gap: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
