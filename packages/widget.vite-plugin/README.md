# @osdk/widget-manifest-widget-plugin

This is a vite plugin that will automatically discover `*.config.(j|t)s` files that are imported into entrypoint files and generates a `.palantir/widget-config.json` file for Foundry to read from. This allows developers to write out their configuration for custom widgets in Foundry in a single, type-safe file and not worry about generating a manifest file needed for publishing new versions of the widget within Foundry.

## Usage

To use the plugin, add it to the `plugins` list of your [vite configuration](https://vitejs.dev/config/):

```js
import widgetManifestPlugin from "@osdk/widget-manifest-widget-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [widgetManifestPlugin()],
  // Rest of configuration
});
```

## Defining configuration

The `@osdk/widget-client` package exports a `WidgetConfig` type so that you can define a configuration object in the shape that this plugin requires. You can define your config like so:

```js
// main.config.ts
import { defineConfig } from "@osdk/widget-client";

export default defineConfig({
  rid: "<FILL IN RID>", // This is the RID of the Foundry widget this code will publish to
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
      parameterUpdateIds: ["headerText"],
    },
    updateTodoItems: {
      displayName: "Update todo items",
      parameterUpdateIds: ["todoItems"],
    },
  },
});
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
import { FoundryWidget } from "@osdk/widget-client-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.js";
import MainConfig from "./main.config.js";

const root = document.querySelector("body")!;
createRoot(root).render(
  (
    <FoundryWidget
      config={MainConfig}
    >
      <App />
    </FoundryWidget>
  ),
);
```

Then the vite plugin will automatically find `src/main.config.ts` file and produce a `.palantir/widget-config.json` file in the configured output directory of your vite config. If you don't actually need the config object in your code, you can also just have a simple import statement like `import "./main.config.js";` to get the plugin to find it.

## Multiple entrypoints

You can configure vite and this plugin to output multiple widgets simultaneously. Vite's entrypoints are based on HTML files, so to add more entrypoints, first add another HTML file:

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
import widgetManifestPlugin from "@osdk/widget-manifest-vite-plugin";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), widgetManifestPlugin()],
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

This vite plugin will then discover both entrypoints and output a combined `.palantir/widget.config.json` file like so:

```json
{
  "version": "1.0.0",
  "widgets": {
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

## Developer mode

The vite plugin also automatically configures developer mode so that you can preview the changes you make locally live on your Foundry environment. For developer mode to work, make sure you follow the following steps:

1. Have a `FOUNDRY_TOKEN` variable that has a token from your Foundry environment stored in it
1. Have a `foundry.config.json` in the root of your project (where you run vite from), with at minimum the following contents:

   ```json
   {
     "foundryUrl": "https://{YOUR_STACK_URL}",
     "widget": {
       "rid": "{YOUR_WIDGET_COLLECTION_RID}"
       // Rest of config
     }
   }
   ```
