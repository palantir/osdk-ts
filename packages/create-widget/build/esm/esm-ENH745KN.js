// ../create-widget.template.minimal-react.v2/build/esm/generatedNoCheck/index.js
var files = /* @__PURE__ */ new Map([["README.md.hbs", {
  type: "raw",
  body: `# {{project}}

This project was generated with [\`@osdk/create-widget\`](https://www.npmjs.com/package/@osdk/create-widget) and demonstrates developing custom widgets to be embedded within Foundry UIs such as Workshop. It uses React on top of Vite. Check out the [Vite](https://vitejs.dev/guide/) docs for further configuration. The Vite plugin [\`@osdk/widget.vite-plugin.unstable\`](https://www.npmjs.com/package/@osdk/widget.vite-plugin.unstable) automatically generates a \`widgets.config.json\` manifest file containing metadata about widgets inside this project during the build command.

## Developing

Run the following command or equivalent with your preferred package manager to start a local development server and follow the instructions printed to set up developer mode in Foundry:

\`\`\`sh
npm run dev
\`\`\`


## Deploying

A \`foundry.config.json\` file is included in the root of this project containing the deployment configuration to Foundry.

Run the following command or equivalent with your preferred package manager to create a production build of your widgets:

\`\`\`sh
npm run build
\`\`\`

A \`.palantir/widgets.config.json\` manifest file containing metadata about your widgets is created during the build.

Run the following command or equivalent with your preferred package manager to deploy the production build of your widgets:

\`\`\`sh
npx @osdk/cli@beta unstable widgetset deploy
\`\`\`

By default the \`package-json\` strategy is used for determining the version for your widgets from the \`version\` field in this project's \`package.json\` file. Remember to update this field and rerun the build command to update the manifest file when deploying a new version.

If you prefer to infer the version from a git tag, you can use the \`git-describe\` strategy by setting the \`autoVersion\` field in the \`foundry.config.json\` file to:

\`\`\`json
{
  "type": "git-describe",
  "tagPrefix": ""
}
\`\`\`
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
  "body": "Ly8gQHRzLWNoZWNrCmltcG9ydCBlc2xpbnQgZnJvbSAiQGVzbGludC9qcyI7CmltcG9ydCB0c1BhcnNlciBmcm9tICJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyIjsKaW1wb3J0ICogYXMgaW1wb3J0UGx1Z2luIGZyb20gImVzbGludC1wbHVnaW4taW1wb3J0IjsKaW1wb3J0IGpzeEExMXlQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1qc3gtYTExeSI7CmltcG9ydCByZWFjdFBsdWdpbiBmcm9tICJlc2xpbnQtcGx1Z2luLXJlYWN0IjsKaW1wb3J0IHJlYWN0SG9va3NQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rcyI7CmltcG9ydCByZWFjdFJlZnJlc2ggZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoIjsKaW1wb3J0IGdsb2JhbHMgZnJvbSAiZ2xvYmFscyI7CmltcG9ydCB0c2VzbGludCBmcm9tICJ0eXBlc2NyaXB0LWVzbGludCI7CgpleHBvcnQgZGVmYXVsdCB0c2VzbGludC5jb25maWcoewogIGZpbGVzOiBbImVzbGludC5jb25maWcubWpzIiwgInNyYy8qKi8qLntqcyxtanMsY2pzLHRzLGpzeCx0c3h9Il0sCiAgc2V0dGluZ3M6IHsKICAgIHJlYWN0OiB7CiAgICAgIHZlcnNpb246ICJkZXRlY3QiLAogICAgfSwKCiAgICAiaW1wb3J0L3Jlc29sdmVyIjogewogICAgICBub2RlOiB7CiAgICAgICAgZXh0ZW5zaW9uczogWyIuanMiLCAiLmpzeCIsICIudHMiLCAiLnRzeCJdLAogICAgICB9LAogICAgfSwKICB9LAogIGxhbmd1YWdlT3B0aW9uczogewogICAgZ2xvYmFsczogewogICAgICAuLi5nbG9iYWxzLmJyb3dzZXIsCiAgICB9LAoKICAgIHBhcnNlcjogdHNQYXJzZXIsCiAgfSwKICBleHRlbmRzOiBbCiAgICBlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwKICAgIC4uLnRzZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsCiAgXSwKICBwbHVnaW5zOiB7CiAgICAicmVhY3QiOiAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5FU0xpbnQuUGx1Z2luICovIChyZWFjdFBsdWdpbiksCiAgICAicmVhY3QtcmVmcmVzaCI6IHJlYWN0UmVmcmVzaCwKICAgICJyZWFjdC1ob29rcyI6CiAgICAgIC8qKiBAdHlwZSBpbXBvcnQoImVzbGludCIpLkVTTGludC5QbHVnaW4gKi8gKHJlYWN0SG9va3NQbHVnaW4pLAogICAgImpzeC1hMTF5IjoganN4QTExeVBsdWdpbiwKICAgICJpbXBvcnQiOiBpbXBvcnRQbHVnaW4sCiAgfSwKICBydWxlczogewogICAgLi4uKAogICAgICAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5MaW50ZXIuUnVsZXNSZWNvcmQgKi8KICAgICAgKHJlYWN0UGx1Z2luLmNvbmZpZ3MuZmxhdD8ucmVjb21tZW5kZWQucnVsZXMpCiAgICApLAogICAgInJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzIjogImVycm9yIiwKICAgICJyZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMiOiAid2FybiIsCiAgICAuLi5qc3hBMTF5UGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsCiAgICAicmVhY3QtcmVmcmVzaC9vbmx5LWV4cG9ydC1jb21wb25lbnRzIjogWyJ3YXJuIiwgewogICAgICBhbGxvd0NvbnN0YW50RXhwb3J0OiB0cnVlLAogICAgfV0sCgogICAgImltcG9ydC9uYW1lZCI6ICJlcnJvciIsCiAgICAiaW1wb3J0L2RlZmF1bHQiOiAiZXJyb3IiLAogICAgImltcG9ydC9uYW1lc3BhY2UiOiAiZXJyb3IiLAogICAgImltcG9ydC9uby1kdXBsaWNhdGVzIjogImVycm9yIiwKICAgICJpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMiOiAiZXJyb3IiLAoKICAgICJyZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUiOiAib2ZmIiwKICB9LAp9KTsK"
}], ["index.html", {
  type: "raw",
  body: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal React Custom Widget</title>
  </head>
  <body>
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
    "test": "vitest run --passWithNoTests",
    "preview": "vite preview"
  },
  "dependencies": {
    "@osdk/widget.client-react.unstable": "^1.1.0",
    "@osdk/widget.client.unstable": "^1.1.0",
    "@blueprintjs/core": "^5.16.0",
    "react": "^18",
    "react-dom": "^18",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@osdk/widget.vite-plugin.unstable": "^1.1.0",
    "@eslint/compat": "^1.2.1",
    "@eslint/js": "^9.13.0",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "^8.21.0",
    "@typescript-eslint/parser": "^8.21.0",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^9.19.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jsx-a11y": "^6.10.1",
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
}], ["src/Widget.module.css", {
  "type": "base64",
  "body": "LmNvbnRhaW5lciB7CiAgICBwYWRkaW5nOiAxNXB4OwogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICBoZWlnaHQ6IDEwMCU7Cn0KCi5jYXJkIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIGdhcDogMTBweDsKICAgIHdpZHRoOiAxNTBweDsKfQ=="
}], ["src/Widget.tsx", {
  type: "raw",
  body: `import { Button, Card, H4 } from "@blueprintjs/core";
import {
  type FoundryWidgetClientContext,
  useFoundryWidgetContext,
} from "@osdk/widget.client-react.unstable";
import React, { useCallback, useEffect } from "react";
import type MainConfig from "./main.config.js";
import css from "./Widget.module.css";

const useWidgetContext: () => FoundryWidgetClientContext<typeof MainConfig> =
  useFoundryWidgetContext.withTypes<typeof MainConfig>();

export const Widget: React.FC = () => {
  const { parameters, emitEvent } = useWidgetContext();
  const greetingName = parameters.values.greetingName ?? "World";
  const counterValue = parameters.values.counterValue ?? 0;

  const setCounterValue = useCallback(
    (value: number) =>
      emitEvent("setCounterValue", {
        parameterUpdates: { counterValue: value },
      }),
    [emitEvent],
  );

  const handleResetCounter = useCallback(() => setCounterValue(0), [
    setCounterValue,
  ]);

  useEffect(() => {
    const interval = setInterval(() => setCounterValue(counterValue + 1), 1000);
    return () => clearInterval(interval);
  }, [setCounterValue, counterValue]);

  return (
    <div className={css.container}>
      <H4>Hello, {greetingName}!</H4>
      <Card className={css.card} compact={true}>
        <div>Count: {counterValue}</div>
        <Button onClick={handleResetCounter}>Reset</Button>
      </Card>
    </div>
  );
};
`
}], ["src/main.config.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAiQG9zZGsvd2lkZ2V0LmNsaWVudC51bnN0YWJsZSI7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoewogIGlkOiAid2lkZ2V0SWQiLAogIG5hbWU6ICJDdXN0b20gV2lkZ2V0IiwKICBkZXNjcmlwdGlvbjogIkFuIGV4YW1wbGUgY3VzdG9tIHdpZGdldCBpbXBsZW1lbnRhdGlvbiIsCiAgdHlwZTogIndvcmtzaG9wIiwKICBwYXJhbWV0ZXJzOiB7CiAgICBncmVldGluZ05hbWU6IHsKICAgICAgZGlzcGxheU5hbWU6ICJHcmVldGluZyBuYW1lIiwKICAgICAgdHlwZTogInN0cmluZyIsCiAgICB9LAogICAgY291bnRlclZhbHVlOiB7CiAgICAgIGRpc3BsYXlOYW1lOiAiQ291bnRlciB2YWx1ZSIsCiAgICAgIHR5cGU6ICJudW1iZXIiLAogICAgfSwKICB9LAogIGV2ZW50czogewogICAgc2V0Q291bnRlclZhbHVlOiB7CiAgICAgIGRpc3BsYXlOYW1lOiAiU2V0IGNvdW50ZXIgdmFsdWUiLAogICAgICBwYXJhbWV0ZXJVcGRhdGVJZHM6IFsiY291bnRlclZhbHVlIl0sCiAgICB9LAogIH0sCn0pOwo="
}], ["src/main.css", {
  "type": "base64",
  "body": "aHRtbCwgYm9keSB7CiAgICBoZWlnaHQ6IDEwMCU7CiAgICBtYXJnaW46IDA7Cn0="
}], ["src/main.tsx", {
  type: "raw",
  body: `import "@blueprintjs/core/lib/css/blueprint.css";

import { FoundryWidget } from "@osdk/widget.client-react.unstable";
import { createRoot } from "react-dom/client";
import MainConfig from "./main.config.js";
import { Widget } from "./Widget.js";

const root = document.querySelector("body")!;

createRoot(root).render(
  <FoundryWidget config={MainConfig}>
    <Widget />
  </FoundryWidget>,
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
  body: `import foundryWidgetPlugin from "@osdk/widget.vite-plugin.unstable";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), foundryWidgetPlugin()],
  server: {
    port: 8080,
    cors: true,
  },
  build: {
    rollupOptions: {
      input: ["./index.html"],
    },
  },
});
`
}]]);

export { files };
//# sourceMappingURL=esm-ENH745KN.js.map
//# sourceMappingURL=esm-ENH745KN.js.map