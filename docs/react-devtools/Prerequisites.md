---
sidebar_position: 1
---

# Prerequisites

Setup required before using `@osdk/react-devtools`.

`@osdk/react-devtools` is an in-app monitoring panel and Vite plugin that adds visibility into how an `@osdk/react` application is querying the ontology, where compute is being spent, and which components are paying for what. It is a development-only library — the Vite plugin is a no-op in production builds, so the panel never ships to end users.

## Install dependencies

Add `@osdk/react-devtools` as a **dev dependency**:

```bash
pnpm add -D @osdk/react-devtools
```

Or with npm:

```bash
npm install --save-dev @osdk/react-devtools
```

The package's peer dependencies are `@osdk/api`, `@osdk/client`, `@osdk/react`, `react`, `react-dom`, and `vite` — these are usually already present in any OSDK React app.

## Configure the Vite plugin

Add the `osdkDevTools()` plugin to your Vite config:

```ts
// vite.config.ts
import { osdkDevTools } from "@osdk/react-devtools/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), osdkDevTools()],
});
```

The plugin only applies in Vite dev (`vite dev` / `vite serve`) and is a no-op in production builds.

## No JSX wiring required

The Vite plugin injects a development-only `<script>` tag into `index.html`:

```html
<script type="module">
  import "@osdk/react-devtools";
</script>
```

Your existing `OsdkProvider` setup is all that's needed:

```tsx
// main.tsx — unchanged
import { OsdkProvider } from "@osdk/react";
import App from "./App.js";
import { client } from "./foundryClient.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <App />
  </OsdkProvider>,
);
```

There is no provider to add, no component to render, and no production bundle impact.

## Run the dev server

Start Vite in development mode with whatever dev script your app already uses (typically `pnpm dev`, `npm run dev`, or `yarn dev`).

Look for the floating `</>` panel in the bottom-right corner of the browser window. You can drag it, dock it, resize it, and switch between light, dark, and auto themes — preferences persist across reloads.

## Plugin options

```ts
osdkDevTools({
  // Enable devtools. Default: true in development, false in production
  enabled: true,
  // Verbose plugin logging during startup. Default: false
  verbose: false,
  // Auto-inject the devtools stylesheet. Default: true
  injectCSS: true,
});
```

All options are optional. The defaults are appropriate for almost every app.

## Disabling the panel

The plugin only runs in dev mode, so end users will never see it. To disable it during development you have three options:

- Pass `osdkDevTools({ enabled: false })` to keep the plugin wired up but inert
- Remove `osdkDevTools()` from the `plugins` array in `vite.config.ts`
- Uninstall the `@osdk/react-devtools` npm dependency

## Compatibility

`@osdk/react-devtools` versions must be compatible with the rest of your `@osdk/*` install. As with `@osdk/react`, all `@osdk/*` packages should resolve to compatible majors — mismatched versions can cause unexpected behavior. See the [@osdk/react Getting Started](/react/getting-started) page for the same guidance.
