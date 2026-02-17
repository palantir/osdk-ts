<script setup lang="ts">
interface INextStep {
  icon: string;
  title: string;
  subtitle: string;
}

const STEPS: INextStep[] = [
  {
    icon: "cube",
    title: "Configure your Ontology and Platform SDKs",
    subtitle:
      "Use the Ontology SDK to interact with your Ontology and the Platform SDK to access Foundry APIs. Configure your SDKs from the <strong>Ontology SDK</strong> and <strong>Platform SDK</strong> tabs in Developer Console.",
  },
  {
    icon: "tag",
    title: "Deploy your application",
    subtitle:
      'To deploy a new version of your application, tag a new version of your repository or use the command line to run <code class="code">npx @osdk/cli@latest site deploy</code>. <a href="https://www.npmjs.com/package/@osdk/cli" class="learn-more" target="_blank" rel="noreferrer">Learn more.</a>',
  },
];
</script>

<template>
  <div class="next-steps">
    <h3 class="next-steps-header">Next steps</h3>
    <div v-for="step in STEPS" :key="step.title" class="next-step">
      <img :src="`/${step.icon}.svg`" class="icon" alt="" />
      <div class="next-step-content">
        <h4 class="title">{{ step.title }}</h4>
        <div class="subtitle" v-html="step.subtitle" />
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

.icon {
  height: 34px;
}

.title {
  font-weight: 600;
}

.subtitle {
  color: #5f6b7c;
  line-height: 20px;
}

.subtitle :deep(.code) {
  background: #8f99a826;
  padding: 2px;
  white-space: nowrap;
  border-radius: 2px;
}

.subtitle :deep(.learn-more) {
  color: #215db0;
  text-decoration: none;
}

.subtitle :deep(.learn-more:hover) {
  text-decoration: underline;
}
</style>
