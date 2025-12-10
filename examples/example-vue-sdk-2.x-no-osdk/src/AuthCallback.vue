<script setup lang="ts">
import { onMounted, ref } from "vue";
import { auth } from "./client";
import { useRouter } from "vue-router";

const router = useRouter();

const error = ref<string>();

onMounted(() => {
  auth
    .signIn()
    .then(() => router.replace("/"))
    .catch((e: unknown) => {
      error.value = (e as Error).message;
    });
});
</script>

<template>
  <div>{{ error != null ? error : "Authenticating…" }}</div>
</template>
