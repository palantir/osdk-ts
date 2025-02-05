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

import {
  type ParameterConfig,
  type WidgetConfig,
} from "@osdk/widget-api.unstable";
import path from "node:path";
import { fileURLToPath } from "node:url";
import color from "picocolors";
import sirv from "sirv";
import type { Plugin, Rollup, ViteDevServer } from "vite";
import {
  CONFIG_FILE_SUFFIX,
  ENTRYPOINTS_PATH,
  PALANTIR_PATH,
  SETUP_PATH,
  VITE_INJECTIONS_PATH,
} from "../common/constants.js";
import { extractWidgetConfig } from "../common/extractWidgetConfig.js";
import { extractInjectedScripts } from "./extractInjectedScripts.js";
import { getWidgetIdOverrideMap } from "./getWidgetIdOverrideMap.js";
import { publishDevModeSettings } from "./publishDevModeSettings.js";

// Location of the setup page assets
const DIR_DIST: string = typeof __dirname !== "undefined"
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

export function FoundryWidgetDevPlugin(): Plugin {
  // The root HTML entrypoints of the build process
  let htmlEntrypoints: string[];
  // Fully resolved paths to the entrypoint files, mapped to relative paths
  const codeEntrypoints: Record<string, string> = {};
  // Store the map of fully resolved config file paths to entrypoint file paths
  const configFileToEntrypoint: Record<string, string> = {};
  // Store the configuration per module ID, e.g. /repo/src/widget-one.config.ts -> { ... }
  const configFiles: Record<string, WidgetConfig<ParameterConfig>> = {};

  return {
    name: "@osdk:widget-dev-plugin",
    enforce: "pre",

    /**
     * Capture the entrypoints from the Vite config so that we can manually load them on our
     * setup page and trigger module parsing.
     */
    buildStart(options) {
      htmlEntrypoints = getInputHtmlEntrypoints(options);
    },

    /**
     * Configure the Vite server to serve the setup page and handle the finish endpoint. This
     * endpoint will set the widget overrides in Foundry and enable dev mode.
     */
    configureServer(server) {
      // Override the printUrls function to print the setup page URL
      server.printUrls = () => printSetupPageUrl(server);

      /**
       * Serve the setup page that will load the entrypoints in iframes and trigger the finish
       * endpoint once widgets have been loaded.
       */
      server.middlewares.use(
        `/${SETUP_PATH}`,
        sirv(path.resolve(DIR_DIST, "../../site"), {
          single: true,
          dev: true,
        }),
      );

      /**
       * Make the entrypoints available to the setup page so that it can load them in iframes in
       * order to trigger module parsing.
       */
      server.middlewares.use(
        `/${ENTRYPOINTS_PATH}`,
        (_, res) => {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(htmlEntrypoints));
        },
      );

      /**
       * Finish the setup process by setting the widget overrides in Foundry and enabling dev mode.
       */
      server.middlewares.use(
        `/${PALANTIR_PATH}/finish`,
        async (_, res) => {
          // Wait for the setup page to trigger the parsing of the config files
          const numEntrypoints = htmlEntrypoints.length;
          const numConfigFiles = Object.keys(configFiles).length;
          if (numConfigFiles < numEntrypoints) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ status: "pending" }));
            return;
          }

          // Prepare the widget overrides and finish the setup process
          const widgetIdToOverrides = await getWidgetIdOverrideMap(
            server,
            codeEntrypoints,
            configFileToEntrypoint,
            configFiles,
            getLocalhostUrl(server),
          );
          await publishDevModeSettings(server, widgetIdToOverrides, res);
        },
      );

      /**
       * Serve scripts that would usually be injected into the HTML if Vite had control over the
       * serving of index HTML pages. This is necessary to ensure that plugins like React refresh
       * work correctly.
       */
      server.middlewares.use(
        `/${VITE_INJECTIONS_PATH}`,
        async (_, res) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-Type", "application/javascript");
          const injectedScripts = await extractInjectedScripts(server);
          res.end(injectedScripts.inlineScripts.join("\n"));
        },
      );
    },

    /**
     * As module imports are resolved, we need to capture the entrypoint file paths and the config
     * file paths that are imported from them.
     */
    resolveId(source, importer) {
      // In dev mode all entrypoints have a generic HTML importer value
      if (importer?.endsWith("index.html") && !source.includes("@fs")) {
        // Store the fully resolved path and the relative path, as we need the former for mapping
        // config files to entrypoints and the latter as a dev mode override script
        codeEntrypoints[getFullSourcePath(source.slice(1), importer)] = source;
      }

      // Look for config files that are imported from an entrypoint file
      const fileWithoutExtension = source.replace(/\.[^/.]+$/, "");
      if (
        fileWithoutExtension.endsWith(CONFIG_FILE_SUFFIX) && importer != null
        && codeEntrypoints[importer] != null
      ) {
        configFileToEntrypoint[getFullSourcePath(source, importer)] = importer;
      }
    },

    /**
     * During dev mode we need to parse the AST of the config files to extract the widget config
     * object manually, as Vite doesn't compile files during dev mode.
     */
    transform(code, id) {
      if (configFileToEntrypoint[id] != null) {
        const configObject = extractWidgetConfig(id, this.parse(code));
        if (configObject != null) {
          configFiles[id] = configObject;
        }
      }
    },
  };
}

function getLocalhostUrl(server: ViteDevServer): string {
  return `${
    server.config.server.https ? "https" : "http"
  }://localhost:${server.config.server.port}`;
}

/**
 * During the resolution phase source are given as relative paths to the importer
 */
function getFullSourcePath(source: string, importer: string): string {
  return path.resolve(path.dirname(importer), source);
}

/**
 * Get a standardize list of entrypoints from the possible Vite config formats.
 */
function getInputHtmlEntrypoints(
  options: Rollup.NormalizedInputOptions,
): string[] {
  if (Array.isArray(options.input)) {
    return options.input;
  }
  if (options.input != null) {
    return Object.values(options.input);
  }
  throw new Error(
    "Widget entrypoints were not found in the expected Vite config format",
  );
}

function printSetupPageUrl(server: ViteDevServer) {
  const localhostUrl = getLocalhostUrl(server);
  const setupRoute = `${localhostUrl}${server.config.base ?? "/"}${SETUP_PATH}`;
  server.config.logger.info(
    `  ${color.green("➜")}  ${
      color.bold("Click to enter developer mode for your widget set")
    }: ${color.green(setupRoute)}`,
  );
}
