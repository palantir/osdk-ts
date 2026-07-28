---
sidebar_position: 1
---

# Prerequisites

Set up `@osdk/react-devtools` before opening the panel.

`@osdk/react-devtools` combines an in-app monitoring panel with a Vite plugin. The panel shows how an `@osdk/react` application uses the Ontology, which components own OSDK hooks, what the application writes to the console, and what the observable cache contains. The package runs only during development. The Vite plugin does nothing in production builds, so the panel does not ship to end users.

## Install dependencies

Add `@osdk/react-devtools` as a dev dependency.

```bash
pnpm add -D @osdk/react-devtools
```

You can also install it with npm.

```bash
npm install --save-dev @osdk/react-devtools
```

The package declares peer dependencies on `@osdk/api`, `@osdk/client`, `@osdk/react`, `react`, `react-dom`, and `vite`. An OSDK React application usually already includes them.

## Configure the Vite plugin

Add the `osdkDevTools()` plugin to your Vite config.

```ts
// vite.config.ts
import { osdkDevTools } from "@osdk/react-devtools/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), osdkDevTools()],
});
```

The plugin runs only in Vite development mode through `vite dev` or `vite serve`. It does nothing in production builds.

## No JSX wiring required

The Vite plugin adds a development script to `index.html`.

```html
<script type="module">
  import "@osdk/react-devtools";
</script>
```

Your existing `OsdkProvider` setup is sufficient.

```tsx
// main.tsx
import { OsdkProvider } from "@osdk/react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import { client } from "./foundryClient.js";

const root = document.getElementById("root");
if (root == null) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <OsdkProvider client={client}>
    <App />
  </OsdkProvider>,
);
```

You do not need another provider or component. The production bundle does not include the panel.

## Run the dev server

Start Vite in development mode with the dev script your app already uses, typically `pnpm dev`, `npm run dev`, or `yarn dev`.

The collapsed `</>` launcher appears in the bottom right corner of the browser window. Select it to open the panel.

![Collapsed OSDK Devtools launcher](/img/react-devtools/launcher.png)

The panel opens in dark mode by default. Use the header controls to switch between dark, light, and automatic themes. The dock control cycles through floating, docked to the bottom, and docked to the right. The browser stores the position, size, theme, and dock mode across reloads.

## Plugin options

```ts
osdkDevTools({
  // Enable devtools. Default: true in development, false in production
  enabled: true,
  // Verbose plugin logging during startup. Default: false
  verbose: false,
});
```

Every option is optional. The defaults fit most applications.

## Disabling the panel

The plugin runs only in development mode. Choose one of these options to disable it during development.

- Pass `osdkDevTools({ enabled: false })` to keep the plugin configured but inactive.
- Remove `osdkDevTools()` from the `plugins` array in `vite.config.ts`.
- Uninstall the `@osdk/react-devtools` package.

## Compatibility

Use compatible major versions across `@osdk/react-devtools` and the rest of the installed `@osdk/*` packages. Mismatched versions can produce unexpected behavior. The [@osdk/react Getting Started](/react/getting-started) page covers the same version guidance.
