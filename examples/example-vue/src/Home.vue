<script setup lang="ts">
import client from "./client";

const objectApiNames = Object.keys(client.ontology.objects);
const actionApiNames = Object.keys(client.ontology.actions);
const queryApiNames = Object.keys(client.ontology.queries);
</script>

<template>
  <h1>@osdk/examples.one.dot.one</h1>
  <p>
    Welcome to your Ontology SDK! Try using any of the following methods now.
  </p>
  <div class="methods">
    <div>
      <h2>Objects ({{ objectApiNames.length }})</h2>
      <pre v-for="objectApiName in objectApiNames" key="objectApiName">client.ontology.objects.{{ objectApiName }}</pre>
    </div>
    <div>
      <h2>Actions ({{ actionApiNames.length }})</h2>
      <pre v-for="actionApiName in actionApiNames" key="actionApiName">client.ontology.actions.{{ actionApiName }}</pre>
    </div>
    <div>
      <h2>Queries ({{ queryApiNames.length }})</h2>
      <pre v-for="queryApiName in queryApiNames" key="queryApiName">client.ontology.queries.{{ queryApiName }}</pre>
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
