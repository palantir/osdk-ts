<script setup lang="ts">
import { onUpdated, ref } from "vue";
import client from "./client";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggingIn = ref(false);
const error = ref<string>();

const login = async () => {
  isLoggingIn.value = true;
  try {
    await client.auth.signIn();
  } catch (e: unknown) {
    error.value = (e as Error).message;
  } finally {
    isLoggingIn.value = false;
  }
};

onUpdated(() => {
  // If the token exists but a user tries to load /login, redirect to the home page instead
  if (client.auth.token != null) {
    router.replace("/");
  }
});
</script>

<template>
  <h1>Ontology SDK</h1>
  <button @click="login">
    {{ isLoggingIn ? "Logging in…" : "Log in " }}
  </button>
  <div v-if="error">Unable to log in: {{ error }}</div>
</template>
