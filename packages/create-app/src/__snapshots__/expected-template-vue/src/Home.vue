<script setup lang="ts">
import client from "./client";

const objectApiNames = Object.keys(client.ontology.objects);
const actionApiNames = Object.keys(client.ontology.actions);
const queryApiNames = Object.keys(client.ontology.queries);
</script>

<template>
  <h1>@fake/sdk</h1>
  <p>
    Welcome to your Ontology SDK! Try using any of the following methods now.
  </p>
  <div class="methods">
    <div>
      <h2>Objects ({{ objectApiNames.length }})</h2>
      <p v-for="objectApiName in objectApiNames" key="objectApiName">
        client.ontology.objects.{{ objectApiName }}
      </p>
    </div>
    <div>
      <h2>Actions ({{ actionApiNames.length }})</h2>
      <p v-for="actionApiName in actionApiNames" key="actionApiName">
        client.ontology.actions.{{ actionApiName }}
      </p>
    </div>
    <div>
      <h2>Queries ({{ queryApiNames.length }})</h2>
      <p v-for="queryApiName in queryApiNames" key="queryApiName">
        client.ontology.queries.{{ queryApiName }}
      </p>
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
