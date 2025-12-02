<script setup lang="ts">
interface INextStep {
  icon: string;
  title: string;
  subtitle: string;
}

const STEPS: INextStep[] = [
  {
    icon: "tag",
    title: "Deploy your application",
    subtitle:
      "Generate a new tag version of your repository to deploy a new version of your application.",
  },
];
</script>

<template>
  <div class="next-steps">
    <h5 class="next-steps-header">Next steps</h5>
    <div v-for="step in STEPS" :key="step.title" class="next-step">
      <img :src="`/${step.icon}.svg`" class="icon" :alt="step.icon" />
      <div class="next-step-content">
        <h6 class="title">{{ step.title }}</h6>
        <div class="subtitle">{{ step.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.next-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.next-steps-header {
  align-self: baseline;
  font-size: 16px;
  font-weight: 600;
}

.next-step {
  border: 1px solid #11141826;
  border-radius: 4px;
  display: flex;
  gap: 15px;
  padding: 16px;
}

.next-step-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.title {
  font-weight: 600;
}

.subtitle {
  color: #5f6b7c;
}

.icon {
  height: 34px;
}
</style>
