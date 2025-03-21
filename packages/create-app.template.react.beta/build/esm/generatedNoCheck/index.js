export const files = new Map([["README.md.hbs", {
  type: "raw",
  body: `# {{project}}

This project was generated with [\`@osdk/create-app\`](https://www.npmjs.com/package/@osdk/create-app) and demonstrates using the Ontology SDK package \`{{osdkPackage}}\` with React on top of Vite. Check out the [Vite](https://vitejs.dev/guide/) docs for further configuration.

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
}], ["eslint.config.mjs", {
  "type": "base64",
  "body": "Ly8gQHRzLWNoZWNrCmltcG9ydCBlc2xpbnQgZnJvbSAiQGVzbGludC9qcyI7CmltcG9ydCB0c1BhcnNlciBmcm9tICJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyIjsKaW1wb3J0ICogYXMgaW1wb3J0UGx1Z2luIGZyb20gImVzbGludC1wbHVnaW4taW1wb3J0IjsKaW1wb3J0IGpzeEExMXlQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1qc3gtYTExeSI7CmltcG9ydCByZWFjdFBsdWdpbiBmcm9tICJlc2xpbnQtcGx1Z2luLXJlYWN0IjsKaW1wb3J0IHJlYWN0SG9va3NQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rcyI7CmltcG9ydCByZWFjdFJlZnJlc2ggZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoIjsKaW1wb3J0IGdsb2JhbHMgZnJvbSAiZ2xvYmFscyI7CmltcG9ydCB0c2VzbGludCBmcm9tICJ0eXBlc2NyaXB0LWVzbGludCI7CgpleHBvcnQgZGVmYXVsdCB0c2VzbGludC5jb25maWcoewogIGZpbGVzOiBbImVzbGludC5jb25maWcubWpzIiwgInNyYy8qKi8qLntqcyxtanMsY2pzLHRzLGpzeCx0c3h9Il0sCiAgc2V0dGluZ3M6IHsKICAgIHJlYWN0OiB7CiAgICAgIHZlcnNpb246ICJkZXRlY3QiLAogICAgfSwKCiAgICAiaW1wb3J0L3Jlc29sdmVyIjogewogICAgICBub2RlOiB7CiAgICAgICAgZXh0ZW5zaW9uczogWyIuanMiLCAiLmpzeCIsICIudHMiLCAiLnRzeCJdLAogICAgICB9LAogICAgfSwKICB9LAogIGxhbmd1YWdlT3B0aW9uczogewogICAgZ2xvYmFsczogewogICAgICAuLi5nbG9iYWxzLmJyb3dzZXIsCiAgICB9LAoKICAgIHBhcnNlcjogdHNQYXJzZXIsCiAgfSwKICBleHRlbmRzOiBbCiAgICBlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwKICAgIC4uLnRzZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsCiAgXSwKICBwbHVnaW5zOiB7CiAgICAicmVhY3QiOiAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5FU0xpbnQuUGx1Z2luICovIChyZWFjdFBsdWdpbiksCiAgICAicmVhY3QtcmVmcmVzaCI6IHJlYWN0UmVmcmVzaCwKICAgICJyZWFjdC1ob29rcyI6CiAgICAgIC8qKiBAdHlwZSBpbXBvcnQoImVzbGludCIpLkVTTGludC5QbHVnaW4gKi8gKHJlYWN0SG9va3NQbHVnaW4pLAogICAgImpzeC1hMTF5IjoganN4QTExeVBsdWdpbiwKICAgICJpbXBvcnQiOiBpbXBvcnRQbHVnaW4sCiAgfSwKICBydWxlczogewogICAgLi4uKAogICAgICAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5MaW50ZXIuUnVsZXNSZWNvcmQgKi8KICAgICAgKHJlYWN0UGx1Z2luLmNvbmZpZ3MuZmxhdD8ucmVjb21tZW5kZWQucnVsZXMpCiAgICApLAogICAgInJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzIjogImVycm9yIiwKICAgICJyZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMiOiAid2FybiIsCiAgICAuLi5qc3hBMTF5UGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsCiAgICAicmVhY3QtcmVmcmVzaC9vbmx5LWV4cG9ydC1jb21wb25lbnRzIjogWyJ3YXJuIiwgewogICAgICBhbGxvd0NvbnN0YW50RXhwb3J0OiB0cnVlLAogICAgfV0sCgogICAgImltcG9ydC9uYW1lZCI6ICJlcnJvciIsCiAgICAiaW1wb3J0L2RlZmF1bHQiOiAiZXJyb3IiLAogICAgImltcG9ydC9uYW1lc3BhY2UiOiAiZXJyb3IiLAogICAgImltcG9ydC9uby1kdXBsaWNhdGVzIjogImVycm9yIiwKICAgICJpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMiOiAiZXJyb3IiLAogICAgInJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSI6ICJvZmYiLAogIH0sCn0pOwo="
}], ["index.html", {
  type: "raw",
  body: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/react.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ontology SDK + React</title>
  </head>
  <body>
    <div id="root-container">
      <div id="root"></div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
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
    "build": "tsc && vite build",
    "lint": "eslint . --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint --report-unused-disable-directives --max-warnings 0 --fix",
    "test": "vitest run",
    "preview": "vite preview"
  },
  "dependencies": {
    "{{osdkPackage}}": "latest",
    "@osdk/client": "{{clientVersion}}",
    "@osdk/oauth": "^1.1.0",
    "@osdk/react": "^0.3.0-beta.0",
    "react": "^18",
    "react-dom": "^18",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "@eslint/compat": "^1.2.1",
    "@eslint/js": "^9.13.0",
    "@types/eslint-plugin-jsx-a11y": "^6.9.0",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "^8.21.0",
    "@typescript-eslint/parser": "^8.21.0",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^9.19.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jsx-a11y": "^6.10.1",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "typescript": "~5.5.4",
    "typescript-eslint": "^8.21.0",
    "vite": "^6.0.11",
    "vitest": "^3.0.5"
  }
}`
}], ["public/palantir.svg", {
  "type": "base64",
  "body": "PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjEwNzY4IDYuMDY0MDFDNC4xMDc2OCA4LjM3NzEgNS45NjcwMiAxMC4yNTI2IDguMjYwNTkgMTAuMjUyNkMxMC41NTQzIDEwLjI1MjYgMTIuNDEzOCA4LjM3NzEgMTIuNDEzOCA2LjA2NDAxQzEyLjQxMzggMy43NTA4IDEwLjU1NDMgMS44NzU1MyA4LjI2MDU5IDEuODc1NTNDNS45NjcwMiAxLjg3NTUzIDQuMTA3NjggMy43NTA4IDQuMTA3NjggNi4wNjQwMVpNOC4yNjA5MyAxMy45MjNMMTMuNjI5OSAxMS41ODQ4TDE0LjUyMTcgMTMuMzA5MUw4LjI2MDkzIDE2TDIgMTMuMzA5MUwyLjg5MjAxIDExLjU4NDhMOC4yNjA5MyAxMy45MjNaTTguMjYxMDEgMEM0Ljk0MzY3IDAgMi4yNTQ0MiAyLjcxMjI4IDIuMjU0NDIgNi4wNTgwM0MyLjI1NDQyIDkuNDAzNzggNC45NDM2NyAxMi4xMTU5IDguMjYxMDEgMTIuMTE1OUMxMS41NzgyIDEyLjExNTkgMTQuMjY3NiA5LjQwMzc4IDE0LjI2NzYgNi4wNTgwM0MxNC4yNjc2IDIuNzEyMjggMTEuNTc4MiAwIDguMjYxMDEgMFoiIGZpbGw9IiMxMTE0MTgiLz4KPC9zdmc+Cg=="
}], ["public/react.svg", {
  "type": "base64",
  "body": "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg=="
}], ["src/AuthCallback.tsx", {
  type: "raw",
  body: `import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./main";

/**
 * Component to render at \`/auth/callback\`
 * This calls signIn() again to save the token, and then navigates the user back to the home page.
 */
function AuthCallback() {
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  // This effect conflicts with React 18 strict mode in development
  // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
  useEffect(() => {
    auth
      .signIn()
      .then(() => navigate("/", { replace: true }))
      .catch((e: unknown) => setError((e as Error).message ?? e));
  }, [navigate]);
  return <div>{error != null ? error : "Authenticating…"}</div>;
}

export default AuthCallback;
`
}], ["src/Home.module.css", {
  "type": "base64",
  "body": "Lm1ldGhvZHMgewogIHBhZGRpbmc6IDJlbTsKICBnYXA6IDJlbTsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgZmxleC13cmFwOiB3cmFwOwp9Cg=="
}], ["src/Home.tsx.hbs", {
  type: "raw",
  body: `import { \$Objects, \$Actions, \$Queries } from "{{osdkPackage}}";
import css from "./Home.module.css";
import Layout from "./Layout";
// import { useOsdkClient } from "@osdk/react";

function Home() {
  // const client = useOsdkClient();
  // See API Docs on Developer console on how to use the client object to access the ontology resource

  const objectApiNames = Object.keys(\$Objects);
  const actionApiNames = Object.keys(\$Actions);
  const queryApiNames = Object.keys(\$Queries);
  return (
    <Layout>
      <h1>{{osdkPackage}}</h1>
      <p>
        Welcome to your Ontology SDK! Try using any of the following methods
        now.
      </p>
      <div className={css.methods}>
        <div>
          <h2>Objects ({objectApiNames.length})</h2>
          {objectApiNames.map((objectApiName) => (
            <pre key={objectApiName}>
              \$Objects.{objectApiName}
            </pre>
          ))}
        </div>
        <div>
          <h2>Actions ({actionApiNames.length})</h2>
          {actionApiNames.map((actionApiName) => (
            <pre key={actionApiName}>
              \$Actions.{actionApiName}
            </pre>
          ))}
        </div>
        <div>
          <h2>Queries ({queryApiNames.length})</h2>
          {queryApiNames.map((queryApiName) => (
            <pre key={queryApiName}>
              \$Queries.{queryApiName}
            </pre>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
`
}], ["src/Layout.module.css", {
  "type": "base64",
  "body": "LmxvZ28gewogIGhlaWdodDogNmVtOwogIHBhZGRpbmc6IDEuNWVtOwogIHdpbGwtY2hhbmdlOiBmaWx0ZXI7CiAgdHJhbnNpdGlvbjogZmlsdGVyIDMwMG1zOwp9CgoubG9nbzpob3ZlciB7CiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMmVtICM2NDZjZmZhYSk7Cn0K"
}], ["src/Layout.tsx", {
  type: "raw",
  body: `import palantirLogo from "/palantir.svg";
import reactLogo from "/react.svg";
import React from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <a
          href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={palantirLogo} className={css.logo} alt="Palantir logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className={css.logo} alt="React logo" />
        </a>
      </div>
      {children}
    </>
  );
}

export default Layout;
`
}], ["src/createClientAndAuth.ts.hbs", {
  type: "raw",
  body: `import "./index.css";
import type { Client } from "@osdk/client";
import { createClient } from "@osdk/client";
import { \$ontologyRid } from "{{osdkPackage}}";
import { createPublicOauthClient } from "@osdk/oauth";

function checkEnv(
  value: string | undefined,
  name: string,
): asserts value is string {
  if (value == null) {
    throw new Error(\`Missing environment variable: \${name}\`);
  }
}

export default function createClientAndAuth() {
  const url = import.meta.env.VITE_FOUNDRY_API_URL;
  const clientId = import.meta.env.VITE_FOUNDRY_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_FOUNDRY_REDIRECT_URL;
  {{#if scopes}}
  const scopes = [
    {{#each scopes}}
    "{{this}}",
    {{/each}}
  ];
  {{/if}}

  checkEnv(url, "VITE_FOUNDRY_API_URL");
  checkEnv(clientId, "VITE_FOUNDRY_CLIENT_ID");
  checkEnv(redirectUrl, "VITE_FOUNDRY_REDIRECT_URL");

  const auth = createPublicOauthClient(
    clientId,
    url,
    redirectUrl,
    {{#if scopes}}
    { scopes },
    {{/if}}
  );

  /**
  * Initialize the client to interact with the Ontology SDK
  */
  const client: Client = createClient(
    url,
    \$ontologyRid,
    auth,
  );

  return { client, auth }
}
`
}], ["src/env.test.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgbG9hZEVudiB9IGZyb20gInZpdGUiOwppbXBvcnQgeyBleHBlY3QsIHRlc3QgfSBmcm9tICJ2aXRlc3QiOwoKY29uc3QgRU5WX1ZBUlMgPSBbCiAgIlZJVEVfRk9VTkRSWV9BUElfVVJMIiwKICAiVklURV9GT1VORFJZX0NMSUVOVF9JRCIsCiAgIlZJVEVfRk9VTkRSWV9SRURJUkVDVF9VUkwiLApdOwoKZm9yIChjb25zdCBlbnZWYXIgb2YgRU5WX1ZBUlMpIHsKICB0ZXN0LnNraXBJZihwcm9jZXNzLmVudi5WRVJJRllfRU5WX1BST0RVQ1RJT04gIT09ICJ0cnVlIikoCiAgICBgcHJvZHVjdGlvbiBlbnYgc2hvdWxkIGNvbnRhaW4gJHtlbnZWYXJ9YCwKICAgICgpID0+IHsKICAgICAgY29uc3QgZW52ID0gbG9hZEVudigicHJvZHVjdGlvbiIsIHByb2Nlc3MuY3dkKCkpOwogICAgICBleHBlY3QoZW52W2VudlZhcl0sIGAke2VudlZhcn0gc2hvdWxkIGJlIGRlZmluZWRgKS50b0JlRGVmaW5lZCgpOwogICAgICBleHBlY3QoCiAgICAgICAgZW52W2VudlZhcl0sCiAgICAgICAgYCR7ZW52VmFyfSBzaG91bGQgbm90IGNvbnRhaW4gcGxhY2Vob2xkZXIgdmFsdWVgLAogICAgICApLm5vdC50b01hdGNoKC88Lio+Lyk7CiAgICB9LAogICk7Cn0K"
}], ["src/index.css", {
  "type": "base64",
  "body": "OnJvb3QgewogIGZvbnQtZmFtaWx5OiBJbnRlciwgc3lzdGVtLXVpLCBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7CiAgbGluZS1oZWlnaHQ6IDEuNTsKICBmb250LXdlaWdodDogNDAwOwoKICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7CiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7CiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDsKCiAgZm9udC1zeW50aGVzaXM6IG5vbmU7CiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsKICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsKICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOwp9Cgojcm9vdC1jb250YWluZXIgewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleDogMTsKICBhbGlnbi1pdGVtczogY2VudGVyOwp9Cgojcm9vdCB7CiAgbWF4LXdpZHRoOiAxMjgwcHg7CiAgbWFyZ2luOiAwIGF1dG87CiAgcGFkZGluZzogMnJlbTsKICB0ZXh0LWFsaWduOiBjZW50ZXI7Cn0KCmEgewogIGZvbnQtd2VpZ2h0OiA1MDA7CiAgY29sb3I6ICM2NDZjZmY7CiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0Owp9CmE6aG92ZXIgewogIGNvbG9yOiAjNTM1YmYyOwp9Cgpib2R5IHsKICBtYXJnaW46IDA7CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogIG1pbi13aWR0aDogMzIwcHg7CiAgbWluLWhlaWdodDogMTAwdmg7Cn0KCmgxIHsKICBmb250LXNpemU6IDMuMmVtOwogIGxpbmUtaGVpZ2h0OiAxLjE7Cn0KCmJ1dHRvbiB7CiAgYm9yZGVyLXJhZGl1czogOHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OwogIHBhZGRpbmc6IDAuNmVtIDEuMmVtOwogIGZvbnQtc2l6ZTogMWVtOwogIGZvbnQtd2VpZ2h0OiA1MDA7CiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTsKICBjdXJzb3I6IHBvaW50ZXI7CiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzOwp9CmJ1dHRvbjpob3ZlciB7CiAgYm9yZGVyLWNvbG9yOiAjNjQ2Y2ZmOwp9CmJ1dHRvbjpmb2N1cywKYnV0dG9uOmZvY3VzLXZpc2libGUgewogIG91dGxpbmU6IDRweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjsKfQoKQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHsKICA6cm9vdCB7CiAgICBjb2xvcjogIzIxMzU0NzsKICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7CiAgfQogIGE6aG92ZXIgewogICAgY29sb3I6ICM3NDdiZmY7CiAgfQogIGJ1dHRvbiB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OwogIH0KfQo="
}], ["src/main.tsx", {
  type: "raw",
  body: `import { OsdkProvider } from "@osdk/react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import createClientAndAuth from "./createClientAndAuth";
import "./index.css";
import { router } from "./router";

const { client, auth } = createClientAndAuth();
export { auth };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <RouterProvider router={router} />,
  </OsdkProvider>,
);
`
}], ["src/router.tsx", {
  type: "raw",
  body: `import { createBrowserRouter } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import Home from "./Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      // This is the route defined in your application's redirect URL
      path: "/auth/callback",
      element: <AuthCallback />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
`
}], ["src/vite-env.d.ts", {
  "type": "base64",
  "body": "Ly8vIDxyZWZlcmVuY2UgdHlwZXM9InZpdGUvY2xpZW50IiAvPgo="
}], ["tsconfig.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAidGFyZ2V0IjogIkVTMjAyMCIsCiAgICAidXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHMiOiB0cnVlLAogICAgImxpYiI6IFsiRVMyMDIwIiwgIkRPTSIsICJET00uSXRlcmFibGUiXSwKICAgICJtb2R1bGUiOiAiRVNOZXh0IiwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAoKICAgIC8qIEJ1bmRsZXIgbW9kZSAqLwogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dJbXBvcnRpbmdUc0V4dGVuc2lvbnMiOiB0cnVlLAogICAgInJlc29sdmVKc29uTW9kdWxlIjogdHJ1ZSwKICAgICJpc29sYXRlZE1vZHVsZXMiOiB0cnVlLAogICAgIm5vRW1pdCI6IHRydWUsCiAgICAianN4IjogInJlYWN0LWpzeCIsCgogICAgLyogTGludGluZyAqLwogICAgInN0cmljdCI6IHRydWUsCiAgICAibm9VbnVzZWRMb2NhbHMiOiB0cnVlLAogICAgIm5vVW51c2VkUGFyYW1ldGVycyI6IHRydWUsCiAgICAibm9GYWxsdGhyb3VnaENhc2VzSW5Td2l0Y2giOiB0cnVlCiAgfSwKICAiaW5jbHVkZSI6IFsic3JjIl0sCiAgInJlZmVyZW5jZXMiOiBbeyAicGF0aCI6ICIuL3RzY29uZmlnLm5vZGUuanNvbiIgfV0KfQo="
}], ["tsconfig.node.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAiY29tcG9zaXRlIjogdHJ1ZSwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAogICAgIm1vZHVsZSI6ICJFU05leHQiLAogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0cyI6IHRydWUKICB9LAogICJpbmNsdWRlIjogWyJ2aXRlLmNvbmZpZy50cyJdCn0K"
}], ["vite.config.ts.hbs", {
  type: "raw",
  body: `import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {  
  return {
    plugins: [react()],
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
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  };
});
`
}]]);
//# sourceMappingURL=index.js.map