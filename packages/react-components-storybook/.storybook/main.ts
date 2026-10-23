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

import { readFileSync } from "node:fs";

import type { StorybookConfig } from "@storybook/react-vite";

const storybookBasePath = process.env.STORYBOOK_BASE_PATH;

const reactComponentsVersion: string = JSON.parse(
  readFileSync(
    new URL("../../react-components/package.json", import.meta.url),
    "utf-8",
  ),
).version;

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
  // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
  experimental_indexers: async (existingIndexers) =>
    (existingIndexers ?? []).map((indexer) => ({
      ...indexer,
      createIndex: async (fileName, options) => {
        const entries = await indexer.createIndex(fileName, options);
        if (fileName.endsWith(".mdx")) return entries;
        return entries.map((entry) =>
          entry.title?.startsWith("Components/")
            ? { ...entry, tags: [...new Set([...(entry.tags ?? []), "beta"])] }
            : entry,
        );
      },
    })),
  // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
  async viteFinal(config) {
    // Set base path for GitHub Pages deployment. PR previews are published
    // under /storybook/pr-<number>/, so CI can override the default path.
    if (storybookBasePath != null) {
      config.base = storybookBasePath;
    } else if (config.mode === "production") {
      config.base = "/osdk-ts/storybook/";
    }

    // Ensure proper resolution of workspace packages. Array form because the
    // workspace-source entries below need regex `find` values, which the
    // object form cannot express.
    const priorAlias = config.resolve?.alias;
    config.resolve = {
      ...config.resolve,
      alias: [
        ...(Array.isArray(priorAlias)
          ? priorAlias
          : Object.entries(priorAlias ?? {}).map(([find, replacement]) => ({
              find,
              replacement,
            }))),
        // Resolve the workspace packages that own the stories to their source
        // rather than their published `build/browser/*` entry points.
        //
        // Chromatic TurboSnap decides what to re-capture by mapping
        // git-changed files onto Vite's dependency graph. Resolving through
        // package exports fills that graph with gitignored build output, so a
        // change under `src/` traces to no graph node and TurboSnap falls back
        // to capturing every story. Pointing at source keeps the graph made of
        // files git can actually see.
        // The subpath patterns deliberately match only extensionless
        // specifiers, so asset exports like `@osdk/react-components/styles.css`
        // (a postcss-concatenated bundle with no single source file) keep
        // resolving through package exports.
        {
          find: /^@osdk\/react-components\/((?:[^./]+\/)*[^./]+)$/u,
          replacement: new URL(
            "../../react-components/src/public/$1.ts",
            import.meta.url,
          ).pathname,
        },
        {
          find: /^@osdk\/react-components$/u,
          replacement: new URL(
            "../../react-components/src/index.ts",
            import.meta.url,
          ).pathname,
        },
        {
          find: /^@osdk\/react\/((?:[^./]+\/)*[^./]+)$/u,
          replacement: new URL("../../react/src/public/$1.ts", import.meta.url)
            .pathname,
        },
        {
          find: /^@osdk\/react$/u,
          replacement: new URL("../../react/src/index.ts", import.meta.url)
            .pathname,
        },
        // Resolve @docs/ and @rc/ to the react-components package so MDX
        // wrappers can import .md files without fragile relative paths.
        {
          find: "@docs",
          replacement: new URL("../../react-components/docs", import.meta.url)
            .pathname,
        },
        {
          find: "@rc-root",
          replacement: new URL("../../react-components", import.meta.url)
            .pathname,
        },
        // Polyfill Node.js modules for browser
        // This is necessary because MSW (Mock Service Worker) and other dependencies
        // use Node.js built-in modules like crypto.randomUUID() which aren't available
        // in browser environments. These polyfills provide browser-compatible implementations
        // to ensure Storybook stories work correctly across all browsers.
        {
          find: "node:crypto",
          replacement: new URL("crypto-polyfill.ts", import.meta.url).pathname,
        },
        {
          find: "node:util",
          replacement: new URL("util-polyfill.ts", import.meta.url).pathname,
        },
      ],
    };

    // Define Node.js globals for browser compatibility
    config.define = {
      ...config.define,
      "import.meta.env.SSR": false,
      global: "globalThis",
      // Resolving @osdk/react-components and @osdk/react to source (see the
      // alias block above) means Vite, not the transpile tool, has to
      // substitute the `process.env` reads in those packages — browsers have no
      // `process`, so leaving them raw throws at import time. PACKAGE_VERSION
      // only ends up in a User-Agent string, so one value for both packages is
      // fine here.
      "process.env.NODE_ENV": JSON.stringify(
        config.mode === "production" ? "production" : "development",
      ),
      "process.env.PACKAGE_VERSION": JSON.stringify(reactComponentsVersion),
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
