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
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";

const storybookBasePath = process.env.STORYBOOK_BASE_PATH;

/** How long the server-side fetch waits before giving up on a slow site. */
const BRAND_THEME_FETCH_TIMEOUT_MS = 15_000;

/**
 * Server-side fetch for the Brand Theme extractor. The addon runs in the
 * browser, where it can't fetch arbitrary cross-origin pages (CORS) and where
 * public CORS proxies are often blocked on filtered/corporate networks. This
 * dev-server endpoint fetches the target URL in Node instead — no CORS, no
 * third-party proxy — following redirects (so bare-domain → www. is handled)
 * and returning the raw HTML/CSS. The client detects our marker header to know
 * it reached this endpoint (a static build has no server, so requests fall back
 * to public proxies there).
 */
async function handleBrandThemeFetch(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(),
    BRAND_THEME_FETCH_TIMEOUT_MS,
  );
  try {
    // req.url is the path after the mounted route, e.g. "/?url=https%3A%2F%2F…".
    const target = new URL(req.url ?? "", "http://localhost").searchParams.get(
      "url",
    );
    if (target == null || !/^https?:\/\//i.test(target)) {
      res.statusCode = 400;
      res.end("Missing or invalid url parameter");
      return;
    }
    const upstream = await fetch(target, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        // A real desktop-Chrome UA: some sites (e.g. getbootstrap.com) serve a
        // blocked/minimal page to bot-ish agents, which would make CSS
        // extraction come up empty.
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,text/css,*/*;q=0.8",
      },
    });
    const body = await upstream.text();
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.setHeader("access-control-allow-origin", "*");
    // Marker + post-redirect URL so the client can (a) confirm it hit this
    // endpoint and (b) resolve relative stylesheet hrefs correctly.
    res.setHeader("x-brand-theme-final-url", upstream.url || target);
    res.end(body);
  } catch (err) {
    res.statusCode = 502;
    res.end(err instanceof Error ? err.message : "Upstream fetch failed");
  } finally {
    clearTimeout(timer);
  }
}

const brandThemeFetchPlugin: Plugin = {
  name: "brand-theme-extractor-fetch",
  configureServer(server) {
    server.middlewares.use("/__brand-theme-fetch", (req, res) => {
      void handleBrandThemeFetch(req, res);
    });
  },
};

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

    // Server-side fetch endpoint for the Brand Theme extractor (dev only).
    config.plugins = [...(config.plugins ?? []), brandThemeFetchPlugin];

    return config;
  },
};

export default config;
