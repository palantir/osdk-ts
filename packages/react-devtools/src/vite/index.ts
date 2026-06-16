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

import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import { PLUGIN_NAME } from "./constants.js";
import { generateHookInstallationScript } from "./hookInstaller.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSS_PATH = resolvePath(__dirname, "../styles.css");

export interface OsdkDevToolsOptions {
  /**
   * Enable devtools.
   * Default: true in development, false in production
   */
  enabled?: boolean;

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
    verbose = false,
    injectCSS = true,
  } = options;

  return {
    name: PLUGIN_NAME,

    enforce: "pre",

    apply(config, { command }) {
      if (config.mode === "production") {
        return false;
      }

      if (process.env.VITEST) {
        return false;
      }

      if (!enabled) {
        return false;
      }

      return command === "serve";
    },

    transformIndexHtml: {
      order: "pre",

      handler(html) {
        if (!enabled) return html;

        const hookScript = generateHookInstallationScript(verbose);

        const registerScript =
          `\n  <script type="module">import '@osdk/react-devtools';</script>`;

        let cssTag = "";
        if (injectCSS) {
          cssTag = `\n  <link rel="stylesheet" href="/@fs${CSS_PATH}" />`;
        }

        const injection = `${hookScript}${registerScript}${cssTag}\n`;
        let transformed = html.replace("</head>", `${injection}</head>`);

        if (transformed === html) {
          transformed = html.replace("</body>", `${injection}</body>`);
        }

        if (transformed !== html) {
          if (verbose) {
            // eslint-disable-next-line no-console
            console.log(`[${PLUGIN_NAME}] Injected devtools into HTML`);
          }
        } else if (verbose) {
          // eslint-disable-next-line no-console
          console.log(
            `[${PLUGIN_NAME}] Warning: Could not find </head> or </body> tag for injection`,
          );
        }

        return transformed;
      },
    },
  };
}

// Default export for convenience
export default osdkDevTools;
