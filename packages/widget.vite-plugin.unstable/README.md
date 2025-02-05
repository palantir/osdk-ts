# @osdk/widget.vite-plugin.unstable

This is a Vite plugin that will automatically discover `*.config.(j|t)s` files that are imported into entrypoint files and generates a `.palantir/widgets.config.json` file for Foundry to read from. This allows developers to write out their configuration for custom widgets in Foundry in a single, type-safe file and not worry about generating a manifest file needed for publishing new versions of the widget within Foundry.

## Usage

To use the plugin, add it to the `plugins` list of your [vite configuration](https://vitejs.dev/config/):

```js
import foundryWidgetPlugin from "@osdk/widget.vite-plugin.unstable";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [foundryWidgetPlugin()],
  // Rest of configuration...
});
```

## Defining configuration

The `@osdk/widget-client` package exports a `defineConfig` helper so that you can define a configuration object in the shape that this plugin requires. You can define your config like so:

```js
// myWidget.config.ts
import { defineConfig } from "@osdk/widget-client";

export default defineConfig({
  id: "<Widget ID>", // The unique identifier of the widget with your project
  name: "<Widget Name>", // A user friendly name for your widget
  description: "<Widget Description>", // A user friendly description of your widget
  type: "workshop",
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

To be able to build your manifest and run developer mode, we require some configuration for your target widget set, and the stack you'll be deploying to. This plugin requires a `foundry.config.json` file to be present containing this information, like so:

```json
{
  "foundryUrl": "https://{YOUR_STACK_URL}",
  "widgetSet": {
    "rid": "{YOUR_WIDGET_SET_RID}"
    // Rest of config
  }
}
```

## Importing the configuration

Import your `*.config.ts` file in any entrypoint JavaScript/TypeScript file so the plugin can pick it up. Entrypoint files are any that are imported from your root HTML file. For example, if you have the following setup:

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
  <FoundryWidget config={MainConfig}>
    <App />
  </FoundryWidget>
);
```

Then the vite plugin will automatically find `src/main.config.ts` file and produce a `.palantir/widget-config.json` file in the configured output directory of your vite config. If you don't actually need the config object in your code, you can also just have a simple import statement like `import "./main.config.js";` so that the plugin can find it.

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
import foundryWidgetPlugin from "@osdk/widget.vite-plugin.unstable";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [foundryWidgetPlugin()],
  build: {
    rollupOptions: {
      input: ["./index.html", "./second.html"],
    },
  },
});
```

This vite plugin will then discover both entrypoints and output a combined `.palantir/widget.config.json` file such as:

```json
{
  "manifestVersion": "1.0.0",
  "widgetSet": {
    "rid": "ri.widgetregistry..widget-set.abc",
    "version": "0.0.0",
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
}
```

## Developer mode

The vite plugin also automatically configures developer mode so that you can preview the changes you make locally live on your Foundry environment. For developer mode to work, make sure you set a `FOUNDRY_TOKEN` environment variable that has a token with access to your Foundry stack.

1. Have a `foundry.config.json` in the root of your project (where you run vite from), with at minimum the following contents:
