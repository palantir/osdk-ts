/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

/**
 * Vite plugin for OSDK React DevTools
 *
 * This plugin provides zero-config integration by:
 * 1. Installing the React DevTools hook before React loads
 * 2. Auto-injecting the register module when OsdkProvider2 is detected
 * 3. Auto-injecting DevTools CSS
 */

import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import {
  OSDK_PROVIDER_PATTERN,
  PLUGIN_NAME,
  REGISTER_IMPORT,
} from "./constants.js";
import { generateHookInstallationScript } from "./hook-installer.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSS_PATH = resolvePath(__dirname, "../index.css");

export interface OsdkDevToolsOptions {
  /**
   * Enable devtools.
   * Default: true in development, false in production
   */
  enabled?: boolean;

  /**
   * Show the floating devtools panel.
   * Default: true
   */
  showPanel?: boolean;

  /**
   * Enable verbose logging for debugging.
   * Default: false
   */
  verbose?: boolean;

  /**
   * Automatically inject CSS.
   * Default: true
   */
  injectCSS?: boolean;
}

export function osdkDevTools(options: OsdkDevToolsOptions = {}): Plugin {
  const {
    enabled = process.env.NODE_ENV !== "production",
    showPanel = true,
    verbose = false,
    injectCSS = true,
  } = options;

  // Track which modules we've already transformed to avoid double-injection
  const transformedModules = new Set<string>();

  return {
    name: PLUGIN_NAME,

    // Run before other plugins to ensure hook installation happens first
    enforce: "pre",

    // Only apply this plugin in development mode
    apply(config, { command }) {
      // Never run in production builds
      if (config.mode === "production") {
        return false;
      }

      // Never run in tests (respect VITEST env var)
      if (process.env.VITEST) {
        return false;
      }

      // User can explicitly disable
      if (!enabled) {
        return false;
      }

      // Only run during dev server
      return command === "serve";
    },

    /**
     * Transform HTML to inject DevTools hook installation script.
     * This runs BEFORE React's bundle loads, ensuring hook is available.
     */
    transformIndexHtml: {
      // Run before Vite's internal transforms
      order: "pre",

      handler(html) {
        if (!enabled) return html;

        // Generate hook installation script
        const hookScript = generateHookInstallationScript(verbose);

        // Inject CSS link if enabled using @fs to serve the file directly
        let cssTag = "";
        if (injectCSS) {
          cssTag = `\n  <link rel="stylesheet" href="/@fs${CSS_PATH}" />`;
        }

        // Inject both before </head>
        const injection = `${hookScript}${cssTag}\n`;
        const transformed = html.replace("</head>", `${injection}</head>`);

        if (verbose) {
          // eslint-disable-next-line no-console
          console.log(`[${PLUGIN_NAME}] Injected hook and CSS into HTML`);
        }

        return transformed;
      },
    },

    /**
     * Transform module code to auto-inject register import.
     * This runs when modules are loaded/transformed by Vite.
     */
    transform(code, id) {
      if (!enabled) return null;

      // Skip node_modules
      if (id.includes("node_modules")) {
        return null;
      }

      // Skip if already transformed
      if (transformedModules.has(id)) {
        return null;
      }

      // Check if this module uses OsdkProvider2
      if (!OSDK_PROVIDER_PATTERN.test(code)) {
        return null;
      }

      // Avoid double-injection
      if (code.includes("@osdk/react-devtools/register")) {
        return null;
      }

      // Inject register import at the top
      transformedModules.add(id);

      if (verbose) {
        // eslint-disable-next-line no-console
        console.log(`[${PLUGIN_NAME}] Injected register import into: ${id}`);
      }

      return {
        code: `${REGISTER_IMPORT}\n${code}`,
        map: null, // Simple prepend doesn't need source map
      };
    },

    /**
     * Clear transformed modules cache on config change
     */
    configResolved() {
      transformedModules.clear();
    },

    /**
     * Handle HMR updates
     */
    handleHotUpdate({ file, modules }) {
      // Clear from cache so it gets re-transformed if needed
      transformedModules.delete(file);
      return modules;
    },
  };
}

// Default export for convenience
export default osdkDevTools;
