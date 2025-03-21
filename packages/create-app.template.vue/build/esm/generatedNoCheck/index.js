export const files = new Map([[".vscode/extensions.json", {
  "type": "base64",
  "body": "ewogICJyZWNvbW1lbmRhdGlvbnMiOiBbIlZ1ZS52b2xhciIsICJWdWUudnNjb2RlLXR5cGVzY3JpcHQtdnVlLXBsdWdpbiJdCn0K"
}], ["README.md.hbs", {
  type: "raw",
  body: `# {{project}}

This project was generated with [\`@osdk/create-app\`](https://www.npmjs.com/package/@osdk/create-app) and demonstrates using the Ontology SDK package \`{{osdkPackage}}\` with Vue on top of Vite. Check out the [Vite](https://vitejs.dev/guide/) docs for further configuration.

## Developing

Run the following command or equivalent with your preferred package manager to start a local development server on \`http://localhost:8080\`:

\`\`\`sh
npm run dev
\`\`\`

Development configuration is stored in \`.env.development\`.

{{#if corsProxy}}
In order to make API requests to Foundry, a CORS proxy has been set up for local development which may be removed if the stack is configured to allow \`http://localhost:8080\` to load resources. The configured OAuth client must also allow \`http://localhost:8080/auth/callback\` as a redirect URL.
{{else}}
In order to make API requests to Foundry, CORS must be configured for the stack to allow \`http://localhost:8080\` to load resources. If this has not been configured and you are unable to request this, you can alternatively generate your project again with \`--corsProxy true\` to use a proxy for API requests during local development. The configured OAuth client must also allow \`http://localhost:8080/auth/callback\` as a redirect URL.
{{/if}}

## Deploying

Run the following command or equivalent with your preferred package manager to create a production build of your application:

\`\`\`sh
npm run build
\`\`\`

Production configuration is stored in \`.env.production\`.

If you did not fill in the URL your production application will be hosted on you will need to fill in the \`VITE_FOUNDRY_REDIRECT_URL\` in \`.env.production\`. A default test is included in \`env.test.ts\` to verify your production environment variables which you can enable by removing the skip condition or running tests with the environment variable set \`VERIFY_ENV_PRODUCTION=true\`.

In order to make API requests to Foundry, CORS must be configured for the stack to allow the production origin to load resources. This will be automatically done for you if you are using Foundry website hosting. The configured OAuth client must also allow the production origin auth callback as a redirect URL.

A \`foundry.config.json\` file is included in the root of this project to make deploying to Foundry website hosting with [\`@osdk/cli\`](https://www.npmjs.com/package/@osdk/cli) easier. If you are not using Foundry website hosting for your application you may delete this file.
`
}], [".gitignore", {
  type: "raw",
  body: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`
}], ["index.html", {
  type: "raw",
  body: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vue.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ontology SDK + Vue</title>
  </head>
  <body>
    <div id="app-container">
      <div id="app"></div>
    </div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`
}], ["package.json.hbs", {
  type: "raw",
  body: `{
  "name": "{{project}}",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "test": "vitest run",
    "preview": "vite preview"
  },
  "dependencies": {
    "{{osdkPackage}}": "latest",
    "vue": "^3.5.11",
    "vue-router": "^4.4.5"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.4",
    "typescript": "~5.5.4",
    "vite": "^6.0.11",
    "vitest": "^3.0.5",
    "vue-tsc": "^2.1.6"
  }
}`
}], ["public/palantir.svg", {
  "type": "base64",
  "body": "PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjEwNzY4IDYuMDY0MDFDNC4xMDc2OCA4LjM3NzEgNS45NjcwMiAxMC4yNTI2IDguMjYwNTkgMTAuMjUyNkMxMC41NTQzIDEwLjI1MjYgMTIuNDEzOCA4LjM3NzEgMTIuNDEzOCA2LjA2NDAxQzEyLjQxMzggMy43NTA4IDEwLjU1NDMgMS44NzU1MyA4LjI2MDU5IDEuODc1NTNDNS45NjcwMiAxLjg3NTUzIDQuMTA3NjggMy43NTA4IDQuMTA3NjggNi4wNjQwMVpNOC4yNjA5MyAxMy45MjNMMTMuNjI5OSAxMS41ODQ4TDE0LjUyMTcgMTMuMzA5MUw4LjI2MDkzIDE2TDIgMTMuMzA5MUwyLjg5MjAxIDExLjU4NDhMOC4yNjA5MyAxMy45MjNaTTguMjYxMDEgMEM0Ljk0MzY3IDAgMi4yNTQ0MiAyLjcxMjI4IDIuMjU0NDIgNi4wNTgwM0MyLjI1NDQyIDkuNDAzNzggNC45NDM2NyAxMi4xMTU5IDguMjYxMDEgMTIuMTE1OUMxMS41NzgyIDEyLjExNTkgMTQuMjY3NiA5LjQwMzc4IDE0LjI2NzYgNi4wNTgwM0MxNC4yNjc2IDIuNzEyMjggMTEuNTc4MiAwIDguMjYxMDEgMFoiIGZpbGw9IiMxMTE0MTgiLz4KPC9zdmc+Cg=="
}], ["public/vue.svg", {
  "type": "base64",
  "body": "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg=="
}], ["src/AuthCallback.vue", {
  "type": "base64",
  "body": "PHNjcmlwdCBzZXR1cCBsYW5nPSJ0cyI+CmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAidnVlIjsKaW1wb3J0IGNsaWVudCBmcm9tICIuL2NsaWVudCI7CmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gInZ1ZS1yb3V0ZXIiOwoKY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7Cgpjb25zdCBlcnJvciA9IHJlZjxzdHJpbmc+KCk7Cgpvbk1vdW50ZWQoKCkgPT4gewogIGNsaWVudC5hdXRoCiAgICAuc2lnbkluKCkKICAgIC50aGVuKCgpID0+IHJvdXRlci5yZXBsYWNlKCIvIikpCiAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHsKICAgICAgZXJyb3IudmFsdWUgPSAoZSBhcyBFcnJvcikubWVzc2FnZTsKICAgIH0pOwp9KTsKPC9zY3JpcHQ+Cgo8dGVtcGxhdGU+CiAgPGRpdj57eyBlcnJvciAhPSBudWxsID8gZXJyb3IgOiAiQXV0aGVudGljYXRpbmfigKYiIH19PC9kaXY+CjwvdGVtcGxhdGU+Cg=="
}], ["src/Home.vue.hbs", {
  type: "raw",
  body: `<script setup lang="ts">
import client from "./client";

const objectApiNames = Object.keys(client.ontology.objects);
const actionApiNames = Object.keys(client.ontology.actions);
const queryApiNames = Object.keys(client.ontology.queries);
</script>

<template>
  <h1>{{osdkPackage}}</h1>
  <p>
    Welcome to your Ontology SDK! Try using any of the following methods now.
  </p>
  <div class="methods">
    <div>
      <h2>Objects (\\{{ objectApiNames.length }})</h2>
      <pre v-for="objectApiName in objectApiNames" key="objectApiName">client.ontology.objects.\\{{ objectApiName }}</pre>
    </div>
    <div>
      <h2>Actions (\\{{ actionApiNames.length }})</h2>
      <pre v-for="actionApiName in actionApiNames" key="actionApiName">client.ontology.actions.\\{{ actionApiName }}</pre>
    </div>
    <div>
      <h2>Queries (\\{{ queryApiNames.length }})</h2>
      <pre v-for="queryApiName in queryApiNames" key="queryApiName">client.ontology.queries.\\{{ queryApiName }}</pre>
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
`
}], ["src/Layout.vue", {
  "type": "base64",
  "body": "PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YQogICAgICBocmVmPSJodHRwczovL3d3dy5wYWxhbnRpci5jb20vZG9jcy9mb3VuZHJ5L29udG9sb2d5LXNkay9vdmVydmlldy8iCiAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgPgogICAgICA8aW1nIHNyYz0iL3BhbGFudGlyLnN2ZyIgY2xhc3M9ImxvZ28iIGFsdD0iUGFsYW50aXIgbG9nbyIgLz4KICAgIDwvYT4KICAgIDxhIGhyZWY9Imh0dHBzOi8vdnVlanMub3JnLyIgdGFyZ2V0PSJfYmxhbmsiPgogICAgICA8aW1nIHNyYz0iL3Z1ZS5zdmciIGNsYXNzPSJsb2dvIiBhbHQ9IlZ1ZSBsb2dvIiAvPgogICAgPC9hPgogIDwvZGl2PgogIDxyb3V0ZXItdmlldyAvPgo8L3RlbXBsYXRlPgoKPHN0eWxlIHNjb3BlZD4KLmxvZ28gewogIGhlaWdodDogNmVtOwogIHBhZGRpbmc6IDEuNWVtOwogIHdpbGwtY2hhbmdlOiBmaWx0ZXI7CiAgdHJhbnNpdGlvbjogZmlsdGVyIDMwMG1zOwp9Ci5sb2dvOmhvdmVyIHsKICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyZW0gIzY0NmNmZmFhKTsKfQo8L3N0eWxlPgo="
}], ["src/Login.vue", {
  "type": "base64",
  "body": "PHNjcmlwdCBzZXR1cCBsYW5nPSJ0cyI+CmltcG9ydCB7IG9uVXBkYXRlZCwgcmVmIH0gZnJvbSAidnVlIjsKaW1wb3J0IGNsaWVudCBmcm9tICIuL2NsaWVudCI7CmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gInZ1ZS1yb3V0ZXIiOwoKY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7Cgpjb25zdCBpc0xvZ2dpbmdJbiA9IHJlZihmYWxzZSk7CmNvbnN0IGVycm9yID0gcmVmPHN0cmluZz4oKTsKCmNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4gewogIGlzTG9nZ2luZ0luLnZhbHVlID0gdHJ1ZTsKICB0cnkgewogICAgYXdhaXQgY2xpZW50LmF1dGguc2lnbkluKCk7CiAgfSBjYXRjaCAoZTogdW5rbm93bikgewogICAgZXJyb3IudmFsdWUgPSAoZSBhcyBFcnJvcikubWVzc2FnZTsKICB9IGZpbmFsbHkgewogICAgaXNMb2dnaW5nSW4udmFsdWUgPSBmYWxzZTsKICB9Cn07CgpvblVwZGF0ZWQoKCkgPT4gewogIC8vIElmIHRoZSB0b2tlbiBleGlzdHMgYnV0IGEgdXNlciB0cmllcyB0byBsb2FkIC9sb2dpbiwgcmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZSBpbnN0ZWFkCiAgaWYgKGNsaWVudC5hdXRoLnRva2VuICE9IG51bGwpIHsKICAgIHJvdXRlci5yZXBsYWNlKCIvIik7CiAgfQp9KTsKPC9zY3JpcHQ+Cgo8dGVtcGxhdGU+CiAgPGgxPk9udG9sb2d5IFNESzwvaDE+CiAgPGJ1dHRvbiBAY2xpY2s9ImxvZ2luIj4KICAgIHt7IGlzTG9nZ2luZ0luID8gIkxvZ2dpbmcgaW7igKYiIDogIkxvZyBpbiAiIH19CiAgPC9idXR0b24+CiAgPGRpdiB2LWlmPSJlcnJvciI+VW5hYmxlIHRvIGxvZyBpbjoge3sgZXJyb3IgfX08L2Rpdj4KPC90ZW1wbGF0ZT4K"
}], ["src/client.ts.hbs", {
  type: "raw",
  body: `import { FoundryClient, PublicClientAuth } from "{{osdkPackage}}";

const url = import.meta.env.VITE_FOUNDRY_API_URL;
const clientId = import.meta.env.VITE_FOUNDRY_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_FOUNDRY_REDIRECT_URL;
checkEnv(url, "VITE_FOUNDRY_API_URL");
checkEnv(clientId, "VITE_FOUNDRY_CLIENT_ID");
checkEnv(redirectUrl, "VITE_FOUNDRY_REDIRECT_URL");
{{#if scopes}}
const scopes = [
  {{#each scopes}}
  "{{this}}",
  {{/each}}
];
{{/if}}

function checkEnv(
  value: string | undefined,
  name: string,
): asserts value is string {
  if (value == null) {
    throw new Error(\`Missing environment variable: \${name}\`);
  }
}

/**
 * Initialize the client to interact with the Ontology SDK
 */
const client = new FoundryClient({
  url,
  auth: new PublicClientAuth({
    clientId,
    url,
    redirectUrl,
    {{#if scopes}}
    scopes,
    {{/if}}
  }),
});

export default client;
`
}], ["src/env.test.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgbG9hZEVudiB9IGZyb20gInZpdGUiOwppbXBvcnQgeyBleHBlY3QsIHRlc3QgfSBmcm9tICJ2aXRlc3QiOwoKY29uc3QgRU5WX1ZBUlMgPSBbCiAgIlZJVEVfRk9VTkRSWV9BUElfVVJMIiwKICAiVklURV9GT1VORFJZX0NMSUVOVF9JRCIsCiAgIlZJVEVfRk9VTkRSWV9SRURJUkVDVF9VUkwiLApdOwoKZm9yIChjb25zdCBlbnZWYXIgb2YgRU5WX1ZBUlMpIHsKICB0ZXN0LnNraXBJZihwcm9jZXNzLmVudi5WRVJJRllfRU5WX1BST0RVQ1RJT04gIT09ICJ0cnVlIikoCiAgICBgcHJvZHVjdGlvbiBlbnYgc2hvdWxkIGNvbnRhaW4gJHtlbnZWYXJ9YCwKICAgICgpID0+IHsKICAgICAgY29uc3QgZW52ID0gbG9hZEVudigicHJvZHVjdGlvbiIsIHByb2Nlc3MuY3dkKCkpOwogICAgICBleHBlY3QoZW52W2VudlZhcl0sIGAke2VudlZhcn0gc2hvdWxkIGJlIGRlZmluZWRgKS50b0JlRGVmaW5lZCgpOwogICAgICBleHBlY3QoCiAgICAgICAgZW52W2VudlZhcl0sCiAgICAgICAgYCR7ZW52VmFyfSBzaG91bGQgbm90IGNvbnRhaW4gcGxhY2Vob2xkZXIgdmFsdWVgLAogICAgICApLm5vdC50b01hdGNoKC88Lio+Lyk7CiAgICB9LAogICk7Cn0K"
}], ["src/main.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAidnVlIjsKaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5IH0gZnJvbSAidnVlLXJvdXRlciI7CmltcG9ydCBBdXRoQ2FsbGJhY2sgZnJvbSAiLi9BdXRoQ2FsbGJhY2sudnVlIjsKaW1wb3J0IGNsaWVudCBmcm9tICIuL2NsaWVudCI7CmltcG9ydCBIb21lIGZyb20gIi4vSG9tZS52dWUiOwppbXBvcnQgTGF5b3V0IGZyb20gIi4vTGF5b3V0LnZ1ZSI7CmltcG9ydCBMb2dpbiBmcm9tICIuL0xvZ2luLnZ1ZSI7CmltcG9ydCAiLi9zdHlsZS5jc3MiOwoKY29uc3Qgcm91dGVzID0gWwogIHsgcGF0aDogIi8iLCBjb21wb25lbnQ6IEhvbWUsIG1ldGE6IHsgcmVxdWlyZXNBdXRoOiB0cnVlIH0gfSwKICB7IHBhdGg6ICIvbG9naW4iLCBjb21wb25lbnQ6IExvZ2luIH0sCiAgeyBwYXRoOiAiL2F1dGgvY2FsbGJhY2siLCBjb21wb25lbnQ6IEF1dGhDYWxsYmFjayB9LApdOwoKY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHsKICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KGltcG9ydC5tZXRhLmVudi5CQVNFX1VSTCksCiAgcm91dGVzLAp9KTsKCnJvdXRlci5iZWZvcmVFYWNoKGFzeW5jICh0bykgPT4gewogIGlmICgKICAgIHRvLm1ldGEucmVxdWlyZXNBdXRoCiAgICAmJiAoY2xpZW50LmF1dGgudG9rZW4gPT0gbnVsbCB8fCBjbGllbnQuYXV0aC50b2tlbi5pc0V4cGlyZWQpCiAgKSB7CiAgICB0cnkgewogICAgICBhd2FpdCBjbGllbnQuYXV0aC5yZWZyZXNoKCk7CiAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7CiAgICAgIC8vIElmIHdlIGNhbm5vdCByZWZyZXNoIHRoZSB0b2tlbiAoaS5lLiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluKSB3ZSByZWRpcmVjdCB0byB0aGUgbG9naW4gcGFnZQogICAgICByZXR1cm4gIi9sb2dpbiI7CiAgICB9CiAgfQp9KTsKCmNyZWF0ZUFwcChMYXlvdXQpLnVzZShyb3V0ZXIpLm1vdW50KCIjYXBwIik7Cg=="
}], ["src/style.css", {
  "type": "base64",
  "body": "OnJvb3QgewogIGZvbnQtZmFtaWx5OiBJbnRlciwgc3lzdGVtLXVpLCBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7CiAgbGluZS1oZWlnaHQ6IDEuNTsKICBmb250LXdlaWdodDogNDAwOwoKICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7CiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7CiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDsKCiAgZm9udC1zeW50aGVzaXM6IG5vbmU7CiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsKICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsKICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOwp9CgojYXBwLWNvbnRhaW5lciB7CiAgZGlzcGxheTogZmxleDsKICBmbGV4OiAxOwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KCiNhcHAgewogIG1heC13aWR0aDogMTI4MHB4OwogIG1hcmdpbjogMCBhdXRvOwogIHBhZGRpbmc6IDJyZW07CiAgdGV4dC1hbGlnbjogY2VudGVyOwp9CgphIHsKICBmb250LXdlaWdodDogNTAwOwogIGNvbG9yOiAjNjQ2Y2ZmOwogIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsKfQphOmhvdmVyIHsKICBjb2xvcjogIzUzNWJmMjsKfQoKYm9keSB7CiAgbWFyZ2luOiAwOwogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBtaW4td2lkdGg6IDMyMHB4OwogIG1pbi1oZWlnaHQ6IDEwMHZoOwp9CgpoMSB7CiAgZm9udC1zaXplOiAzLjJlbTsKICBsaW5lLWhlaWdodDogMS4xOwp9CgpidXR0b24gewogIGJvcmRlci1yYWRpdXM6IDhweDsKICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsKICBwYWRkaW5nOiAwLjZlbSAxLjJlbTsKICBmb250LXNpemU6IDFlbTsKICBmb250LXdlaWdodDogNTAwOwogIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7CiAgY3Vyc29yOiBwb2ludGVyOwogIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1czsKfQpidXR0b246aG92ZXIgewogIGJvcmRlci1jb2xvcjogIzY0NmNmZjsKfQpidXR0b246Zm9jdXMsCmJ1dHRvbjpmb2N1cy12aXNpYmxlIHsKICBvdXRsaW5lOiA0cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7Cn0KCkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7CiAgOnJvb3QgewogICAgY29sb3I6ICMyMTM1NDc7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOwogIH0KICBhOmhvdmVyIHsKICAgIGNvbG9yOiAjNzQ3YmZmOwogIH0KICBidXR0b24gewogICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsKICB9Cn0K"
}], ["src/vite-env.d.ts", {
  "type": "base64",
  "body": "Ly8vIDxyZWZlcmVuY2UgdHlwZXM9InZpdGUvY2xpZW50IiAvPgo="
}], ["tsconfig.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAidGFyZ2V0IjogIkVTMjAyMCIsCiAgICAidXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHMiOiB0cnVlLAogICAgIm1vZHVsZSI6ICJFU05leHQiLAogICAgImxpYiI6IFsiRVMyMDIwIiwgIkRPTSIsICJET00uSXRlcmFibGUiXSwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAoKICAgIC8qIEJ1bmRsZXIgbW9kZSAqLwogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dJbXBvcnRpbmdUc0V4dGVuc2lvbnMiOiB0cnVlLAogICAgInJlc29sdmVKc29uTW9kdWxlIjogdHJ1ZSwKICAgICJpc29sYXRlZE1vZHVsZXMiOiB0cnVlLAogICAgIm5vRW1pdCI6IHRydWUsCiAgICAianN4IjogInByZXNlcnZlIiwKCiAgICAvKiBMaW50aW5nICovCiAgICAic3RyaWN0IjogdHJ1ZSwKICAgICJub1VudXNlZExvY2FscyI6IHRydWUsCiAgICAibm9VbnVzZWRQYXJhbWV0ZXJzIjogdHJ1ZSwKICAgICJub0ZhbGx0aHJvdWdoQ2FzZXNJblN3aXRjaCI6IHRydWUKICB9LAogICJpbmNsdWRlIjogWyJzcmMvKiovKi50cyIsICJzcmMvKiovKi50c3giLCAic3JjLyoqLyoudnVlIl0sCiAgInJlZmVyZW5jZXMiOiBbeyAicGF0aCI6ICIuL3RzY29uZmlnLm5vZGUuanNvbiIgfV0KfQo="
}], ["tsconfig.node.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAiY29tcG9zaXRlIjogdHJ1ZSwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAogICAgIm1vZHVsZSI6ICJFU05leHQiLAogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0cyI6IHRydWUKICB9LAogICJpbmNsdWRlIjogWyJ2aXRlLmNvbmZpZy50cyJdCn0K"
}], ["vite.config.ts.hbs", {
  type: "raw",
  body: `import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    {{#if corsProxy}}
    proxy: {
      "^(/multipass/api|/api)": {
        target: "{{foundryUrl}}",
        changeOrigin: true,
        secure: true,
      },
    },
    {{/if}}
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler",
    },
  },
});
`
}]]);
//# sourceMappingURL=index.js.map