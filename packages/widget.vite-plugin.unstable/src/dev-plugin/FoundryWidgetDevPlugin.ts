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
} from "@osdk/widget.api.unstable";
import path from "node:path";
import { fileURLToPath } from "node:url";
import color from "picocolors";
import sirv from "sirv";
import type { Plugin, ViteDevServer } from "vite";
import yargs from "yargs";
import {
  CODE_WORKSPACES,
  CONFIG_FILE_SUFFIX,
  ENTRYPOINTS_PATH,
  FINISH_PATH,
  SETUP_PATH,
  VITE_INJECTIONS_PATH,
} from "../common/constants.js";
import { extractWidgetConfig } from "../common/extractWidgetConfig.js";
import { getInputHtmlEntrypoints } from "../common/getInputHtmlEntrypoints.js";
import { safeGetEnvVar } from "../common/safeGetEnvVar.js";
import { standardizeFileExtension } from "../common/standardizeFileExtension.js";
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
      safeGetEnvVar(
        process.env,
        "FOUNDRY_TOKEN",
        "This value is required to run dev mode.",
      );
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
       * Redirect `./.palantir/setup` to `./.palantir/setup/` to ensure that relative paths work
       * correctly. Relative paths must be used so that the dev server UI can be accessed on
       * non-root paths.
       */
      server.middlewares.use(
        serverPath(server, SETUP_PATH),
        (req, res, next) => {
          if (req.originalUrl?.endsWith(serverPath(server, SETUP_PATH))) {
            res.statusCode = 301;
            res.setHeader("Location", `${serverPath(server, SETUP_PATH)}/`);
            res.end();
          } else {
            next();
          }
        },
      );

      /**
       * Serve the setup page that will load the entrypoints in iframes and trigger the finish
       * endpoint once widgets have been loaded.
       */
      server.middlewares.use(
        serverPath(server, SETUP_PATH),
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
        serverPath(server, ENTRYPOINTS_PATH),
        (_, res) => {
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify(
              htmlEntrypoints.map((entrypoint) =>
                serverPath(server, entrypoint)
              ),
            ),
          );
        },
      );

      /**
       * Finish the setup process by setting the widget overrides in Foundry and enabling dev mode.
       */
      server.middlewares.use(
        serverPath(server, FINISH_PATH),
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
          const isCodeWorkspacesMode = await getIsCodeWorkspacesMode();
          await publishDevModeSettings(
            server,
            widgetIdToOverrides,
            getBaseHref(server, isCodeWorkspacesMode),
            res,
            isCodeWorkspacesMode,
          );
        },
      );

      /**
       * Serve scripts that would usually be injected into the HTML if Vite had control over the
       * serving of index HTML pages. This is necessary to ensure that plugins like React refresh
       * work correctly.
       */
      server.middlewares.use(
        serverPath(server, VITE_INJECTIONS_PATH),
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
      if (importer == null) {
        return;
      }

      // Standardize the source file extension and get the full path
      const standardizedSource = standardizeFileExtension(
        getFullSourcePath(source.slice(1), importer),
      );
      // Importers are already full paths, so just standardize the extension
      const standardizedImporter = standardizeFileExtension(importer);

      // In dev mode all entrypoints have a generic HTML importer value
      if (
        importer.endsWith("index.html") && !standardizedSource.includes("@fs")
      ) {
        // Store the fully resolved path and the relative path, as we need the former for mapping
        // config files to entrypoints and the latter as a dev mode override script
        codeEntrypoints[standardizedSource] = source;
      }

      // Look for config files that are imported from an entrypoint file
      if (
        standardizedSource.replace(/\.[^/.]+$/, "").endsWith(CONFIG_FILE_SUFFIX)
        && codeEntrypoints[standardizedImporter] != null
      ) {
        const fullSourcePath = standardizeFileExtension(
          getFullSourcePath(source, standardizedImporter),
        );
        configFileToEntrypoint[fullSourcePath] = standardizedImporter;
      }
    },

    /**
     * During dev mode we need to parse the AST of the config files to extract the widget config
     * object manually, as Vite doesn't compile files during dev mode.
     */
    transform(code, id) {
      const standardizedSource = standardizeFileExtension(id);
      if (configFileToEntrypoint[standardizedSource] != null) {
        const configObject = extractWidgetConfig(id, this.parse(code));
        if (configObject != null) {
          configFiles[standardizedSource] = configObject;
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

function getBaseHref(
  server: ViteDevServer,
  isCodeWorkspacesMode: boolean,
): string {
  if (isCodeWorkspacesMode) {
    const devServerDomain = safeGetEnvVar(
      process.env,
      "DEV_SERVER_DOMAIN",
      "This value is required when running dev mode in Code Workspaces mode.",
    );
    const devServerPath = safeGetEnvVar(
      process.env,
      "DEV_SERVER_BASE_PATH",
      "This value is required when running dev mode in Code Workspaces mode.",
    );
    return `https://${devServerDomain}${devServerPath}`;
  }
  return `${getLocalhostUrl(server)}${server.config.base}`;
}

/**
 * During the resolution phase source are given as relative paths to the importer
 */
function getFullSourcePath(source: string, importer: string): string {
  return path.resolve(path.dirname(importer), source);
}

function serverPath(server: ViteDevServer, subPath: string): string {
  return path.resolve(server.config.base, subPath);
}

function printSetupPageUrl(server: ViteDevServer) {
  const localhostUrl = getLocalhostUrl(server);
  const setupRoute = `${localhostUrl}${serverPath(server, SETUP_PATH)}/`;
  server.config.logger.info(
    `  ${color.green("➜")}  ${
      color.bold("Click to enter developer mode for your widget set")
    }: ${color.green(setupRoute)}`,
  );
}

async function getIsCodeWorkspacesMode(): Promise<boolean> {
  const args = await yargs(process.argv).argv;
  return args.mode === CODE_WORKSPACES;
}
