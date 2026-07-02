/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { StorybookConfig } from "@storybook/react-vite";

const storybookBasePath = process.env.STORYBOOK_BASE_PATH;

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)", "../src/**/*.mdx"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-mcp",
    "@storybook/addon-vitest",
    "msw-storybook-addon",
    "storybook-addon-tag-badges",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    // Required for @storybook/addon-mcp to expose component metadata to AI tools
    experimentalComponentsManifest: true,
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
  staticDirs: ["../public"],
  // Auto-inject the "beta" tag for all stories under Components/.
  // The tag badge propagates to parent folders via skipInherited: false
  // in the manager config. When a component graduates to GA, remove
  // tags: ["beta"] from its story meta — the indexer only adds the tag,
  // it does not override an explicit empty tags array.
  // MDX files are skipped because wrapping their index entries breaks
  // attached-docs sidebar placement in Storybook 10.
  experimental_indexers: async (existingIndexers) =>
    (existingIndexers ?? []).map((indexer) => ({
      ...indexer,
      createIndex: async (fileName, options) => {
        const entries = await indexer.createIndex(fileName, options);
        if (fileName.endsWith(".mdx")) return entries;
        return entries.map((entry) =>
          entry.title?.startsWith("Components/")
            ? { ...entry, tags: [...new Set([...(entry.tags ?? []), "beta"])] }
            : entry
        );
      },
    })),
  async viteFinal(config) {
    // Set base path for GitHub Pages deployment. PR previews are published
    // under /storybook/pr-<number>/, so CI can override the default path.
    if (storybookBasePath != null) {
      config.base = storybookBasePath;
    } else if (config.mode === "production") {
      config.base = "/osdk-ts/storybook/";
    }

    // Ensure proper resolution of workspace packages
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // Resolve @docs/ and @rc/ to the react-components package so MDX
        // wrappers can import .md files without fragile relative paths.
        "@docs": new URL("../../react-components/docs", import.meta.url)
          .pathname,
        "@rc-root": new URL("../../react-components", import.meta.url).pathname,
        // Resolve the devtools package to its built output so the runtime CSS
        // injector (build/esm/styles.js, produced by scripts/build-css.mjs)
        // loads — src/styles.ts is only a placeholder. The "/advanced" entry
        // must precede the bare one so vite matches it exactly.
        "@osdk/react-devtools/advanced": new URL(
          "../../react-devtools/build/esm/public/advanced.js",
          import.meta.url,
        ).pathname,
        "@osdk/react-devtools": new URL(
          "../../react-devtools/build/esm/index.js",
          import.meta.url,
        ).pathname,
        // Polyfill Node.js modules for browser
        // This is necessary because MSW (Mock Service Worker) and other dependencies
        // use Node.js built-in modules like crypto.randomUUID() which aren't available
        // in browser environments. These polyfills provide browser-compatible implementations
        // to ensure Storybook stories work correctly across all browsers.
        "node:crypto": new URL("crypto-polyfill.ts", import.meta.url).pathname,
        "node:util": new URL("util-polyfill.ts", import.meta.url).pathname,
      },
    };

    // Define Node.js globals for browser compatibility
    config.define = {
      ...config.define,
      "import.meta.env.SSR": false,
      global: "globalThis",
    };

    // Turbo watch rebuilds upstream packages on change, which briefly
    // produces incomplete builds that Vite picks up as errors. The overlay
    // flashes on every rebuild cycle, so we disable it.
    config.server = {
      ...config.server,
      hmr: { overlay: false },
    };

    // Configure build options
    config.build = {
      ...config.build,
      commonjsOptions: {
        ...config.build?.commonjsOptions,
        // Enable transformation of dependencies that mix CommonJS and ESM exports.
        transformMixedEsModules: true,
      },
    };

    return config;
  },
};

export default config;
