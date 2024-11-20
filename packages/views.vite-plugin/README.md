# @osdk/views-manifest-vite-plugin

This is a vite plugin that will automatically discover `*.config.(j|t)s` files that are imported into entrypoint files and generates a `.palantir/view-config.json` file for Foundry to read from. This allows developers to write out their configuration for custom views in Foundry in a single, type-safe file and not worry about generating a manifest file needed for publishing new versions of the view within Foundry.

## Usage

To use the plugin, add it to the `plugins` list of your [vite configuration](https://vitejs.dev/config/):

```js
import viewManifestPlugin from "@osdk/views-manifest-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [viewManifestPlugin()],
  // Rest of configuration
});
```

## Defining configuration

The `@osdk/views-client` package exports a `ViewConfig` type so that you can define a configuration object in the shape that this plugin requires. You can define your config like so:

```js
// main.config.ts
export default {
  rid: "<FILL IN RID>", // This is the RID of the Foundry view this code will publish to
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    showWarning: {
      displayName: "Show warning callout",
      type: "boolean",
    },
    todoItems: {
      displayName: "Todo items",
      type: "array",
      subType: "string",
    },
  },
  events: {
    updateHeader: {
      displayName: "Update header",
      parameterIds: ["headerText"],
    },
    updateTodoItems: {
      displayName: "Update todo items",
      parameterIds: ["todoItems"],
    },
  },
} as const satisfies ViewConfig;
```

## Importing the configuration

Import your `*.config.ts` file in any entrypoint JavaScript/TypeScript file so the plugin can pick it up. Entrypoint files are any that are imported from your HTML file. For example, if you have the following setup:

```
src/
  main.tsx
  main.config.ts
index.html
```

And in `index.html`, you import `main.tsx`:

```html
<!doctype html>
<html lang="en">
  <!-- rest of HTML -->
  <body>
    <!-- rest of body -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Import your configuration file in `src/main.tsx` so the vite plugin will discover it:

```js
import { FoundryView } from "@osdk/views-client-react.unstable";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.js";
import MainConfig from "./main.config.js";

const root = document.querySelector("body")!;
createRoot(root).render(
  (
    <FoundryView
      config={MainConfig}
    >
      <App />
    </FoundryView>
  ),
);
```

Then the vite plugin will automatically find `src/main.config.ts` file and produce a `.palantir/view-config.json` file in the configured output directory of your vite config. If you don't actually need the config object in your code, you can also just have a simple import statement like `import "./main.config.js";` to get the plugin to find it.

## Multiple entrypoints

You can configure vite and this plugin to output multiple views simultaneously. Vite's entrypoints are based on HTML files, so to add more entrypoints, first add another HTML file:

```
src/
  main.tsx
  main.config.ts
  second.tsx        // Imported by second.html 
  second.config.ts  // Imported by second.tsx
index.html
second.html         // Second entrypoint
```

And then in your vite config, you will need to configure the [`build.rollupOptions.input`](https://rollupjs.org/configuration-options/#input) option to discover both entrypoints:

```js
import viewManifestPlugin from "@osdk/views-manifest-vite-plugin";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viewManifestPlugin()],
  server: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        second: fileURLToPath(new URL("./second.html", import.meta.url)),
      },
    },
  },
});
```

This vite plugin will then discover both entrypoints and output a combined `.palantir/views.config.json` file like so:

```json
{
  "version": "1.0.0",
  "views": {
    "main": {
      "entrypointJs": [
        "assets/main-D7Z1E0qk.js"
      ],
      "entrypointCss": []
      // Rest of config
    },
    "second": {
      "entrypointJs": [
        "assets/second-CULz-_Ck.js"
      ],
      "entrypointCss": []
      // Rest of config
    }
  }
}
```
