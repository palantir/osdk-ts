/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { autoVersion, loadFoundryConfig } from "@osdk/foundry-config-json";
import {
  MANIFEST_FILE_LOCATION,
  type ParameterConfig,
  type WidgetConfig,
} from "@osdk/widget-api.unstable";
import path from "node:path";
import { fileURLToPath } from "node:url";
import color from "picocolors";
import sirv from "sirv";
import type { Plugin, ResolvedConfig, ViteDevServer } from "vite";
import {
  CONFIG_FILE_SUFFIX,
  PALANTIR_PATH,
  SETUP_PATH,
  VITE_INJECTIONS,
} from "./constants.js";
import { extractInjectedScripts } from "./extractInjectedScripts.js";
import { extractWidgetConfig } from "./extractWidgetConfig.js";
import { enableDevMode, setWidgetSettings } from "./network.js";
import { widgetSetManifest } from "./widgetSetManifest.js";

export const DIR_DIST: string = typeof __dirname !== "undefined"
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));
export interface Options {}

export function FoundryWidgetVitePlugin(_options: Options = {}): Plugin {
  const baseDir = process.cwd();
  const foundryConfigPromise = loadFoundryConfig("widgetSet");

  const entrypointToJsSourceFileMap: Record<string, Set<string>> = {};
  const jsSourceFileToEntrypointMap: Record<string, string> = {};
  const fileIdToSourceFileMap: Record<string, string> = {};
  const configSourceFileToEntrypointMap: Record<string, string> = {};
  const entrypointFileIdToConfigMap: Record<
    string,
    WidgetConfig<ParameterConfig>
  > = {};
  let devServer: ViteDevServer | undefined;
  let config: ResolvedConfig | undefined;

  return {
    name: "@osdk:widget-manifest",
    enforce: "pre",
    configResolved: (_config) => {
      config = _config;
    },
    configureServer(server) {
      devServer = server;

      const _print = server.printUrls;
      let localhostUrl = `${
        config?.server.https ? "https" : "http"
      }://localhost:${config?.server.port ?? "80"}`;
      const url = server.resolvedUrls?.local[0];
      if (url) {
        try {
          const u = new URL(url);
          localhostUrl = `${u.protocol}//${u.host}`;
        } catch (error) {
          config?.logger.warn(`Parse resolved url failed: ${error}`);
        }
      }

      // Append the URL that we want developers to click on to enable dev mode to the vite output on server start
      server.printUrls = () => {
        _print();

        const colorUrl = (url: string) =>
          color.green(
            url.replace(/:(\d+)\//, (_, port) => `:${color.bold(port)}/`),
          );

        config?.logger.info(
          `  ${color.green("➜")}  ${
            color.bold(
              "Click to enter developer mode for your widget",
            )
          }: ${
            colorUrl(
              `${localhostUrl}${server.config.base ?? "/"}${SETUP_PATH}`,
            )
          }`,
        );
      };

      // Queried by our setup page to get the list of entrypoints
      server.middlewares.use(
        `${server.config.base ?? "/"}${PALANTIR_PATH}/entrypoints`,
        (req, res) => {
          res.setHeader("Content-Type", "application/json");
          // We need to turn the entrypoint files to relative paths
          res.end(
            JSON.stringify({
              entrypoints: Object.keys(entrypointToJsSourceFileMap).map((id) =>
                path.relative(baseDir, id)
              ),
            }),
          );
        },
      );

      // Polled by our setup page to check that a manifest has been generated
      server.middlewares.use(
        `${server.config.base ?? "/"}${PALANTIR_PATH}/manifest`,
        (req, res) => {
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              manifest: Object.fromEntries(
                Object.entries(entrypointToJsSourceFileMap).map(
                  ([entrypoint, sourceFiles]) => [
                    path.relative(baseDir, entrypoint),
                    [...sourceFiles],
                  ],
                ),
              ),
            }),
          );
        },
      );

      server.middlewares.use(
        `${server.config.base ?? "/"}${VITE_INJECTIONS}`,
        async (_, res) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-Type", "application/javascript");
          const injectedScripts = await extractInjectedScripts(server);
          res.end(injectedScripts.inlineScripts.join("\n"));
        },
      );

      // Called by the setup page to start dev mode in Foundry, which queries the appropriate service on the Foundry instance configured in foundry.config.json
      server.middlewares.use(
        `${server.config.base ?? "/"}${PALANTIR_PATH}/finish`,
        (req, res) => {
          if (req.method !== "POST") {
            res.statusCode = 400;
            res.statusMessage = "Method not allowed";
            res.end();
            return;
          }

          let body = "";
          req.on("readable", () => {
            const readResult = req.read();
            if (readResult != null) {
              body += readResult;
            }
          });
          req.on("end", async () => {
            if (body.length === 0) {
              res.statusCode = 400;
              res.statusMessage =
                "Bad request: Expected { \"entrypoint\": \"<relativeEntrypointFileName>\" }, received nothing";
              res.end();
              return;
            }
            let request: { entrypoint: string };
            try {
              request = JSON.parse(body);
            } catch (error) {
              res.statusCode = 400;
              res.statusMessage =
                "Bad request: Expected { \"entrypoint\": \"<relativeEntrypointFileName>\" }, received "
                + body;
              res.end();
              return;
            }

            const entrypointFileName = path.join(baseDir, request.entrypoint);
            if (entrypointToJsSourceFileMap[entrypointFileName] == null) {
              res.statusCode = 400;
              res.statusMessage =
                `Entrypoint ${request.entrypoint} not found. It may have not been loaded?`;
              res.end();
              return;
            }

            if (process.env.FOUNDRY_TOKEN == null) {
              res.statusCode = 500;
              res.statusMessage =
                "FOUNDRY_TOKEN environment variable not found, unable to start dev mode.";
              res.end();
              return;
            }

            const foundryConfig = await foundryConfigPromise;
            if (foundryConfig == null) {
              res.statusCode = 500;
              res.statusMessage = "foundry.config.json file not found.";
              res.end();
              return;
            }

            let foundryUrl: URL;
            try {
              foundryUrl = new URL(foundryConfig.foundryConfig.foundryUrl);
            } catch (error) {
              res.statusCode = 500;
              res.statusMessage =
                `"foundryUrl" in foundry.config.json is invalid, found: ${foundryConfig.foundryConfig.foundryUrl}`;
              res.end();
              return;
            }

            try {
              const injectedScripts = await extractInjectedScripts(server);
              const settingsResponse = await setWidgetSettings(
                // TODO: Actually handle the widget RID from within the config, which will require somehow parsing the config
                // Unfortunately, moduleParsed is not called during vite's dev mode for performance reasons, so the config file
                // will need to be parsed/read a different way
                foundryConfig.foundryConfig.widgetSet.rid,
                foundryUrl,
                localhostUrl,
                entrypointToJsSourceFileMap,
                entrypointFileName,
                injectedScripts.scriptSources,
              );
              if (
                settingsResponse.status !== 200
              ) {
                res.statusCode = settingsResponse.status;
                res.statusMessage =
                  `Unable to set widget settings in Foundry: ${settingsResponse.statusText}`;
                await settingsResponse.text().then((err) => {
                  config?.logger.error(err);
                  res.end();
                });
                return;
              }

              const enableResponse = await enableDevMode(foundryUrl);
              if (enableResponse.status !== 200) {
                res.statusCode = enableResponse.status;
                res.statusMessage =
                  `Unable to start dev mode in Foundry: ${enableResponse.statusText}`;
                res.end();
                return;
              }

              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  redirectUrl:
                    `${foundryUrl.origin}/workspace/custom-widgets/preview/${foundryConfig.foundryConfig.widgetSet.rid}`,
                }),
              );
            } catch (error: any) {
              res.statusCode = 500;
              res.statusMessage =
                `Unable to start dev mode in Foundry: ${error.message}`;
              res.end();
            }
          });
        },
      );

      server.middlewares.use(
        `${server.config.base ?? "/"}${SETUP_PATH}`,
        sirv(path.resolve(DIR_DIST, "../client"), {
          single: true,
          dev: true,
        }),
      );
    },
    async buildStart(options) {
      if (devServer != null) {
        // Save off what all the entrypoint files are for generating a manifest for dev mode
        if (Array.isArray(options.input)) {
          Object.assign(
            entrypointToJsSourceFileMap,
            Object.fromEntries(
              options.input.map((entrypoint) => [entrypoint, new Set()]),
            ),
          );
        } else if (options.input != null) {
          Object.assign(
            entrypointToJsSourceFileMap,
            Object.values(options.input).map((entrypoint) => [
              entrypoint,
              new Set(),
            ]),
          );
        } else {
          // Couldn't find any defined entrypoints, assume index.html
          // TODO: Crib from https://github.com/wesbos/vite-plugin-list-directory-contents/blob/main/plugin.ts#L19 and actually look for all HTML files manually instead
          entrypointToJsSourceFileMap[path.join(baseDir, "index.html")] =
            new Set();
        }
      }
    },
    // Look for .config.(j|t)s files that are imported from an entrypoint JS file
    resolveId: (source, importer, options) => {
      if (options.isEntry) {
        if (entrypointToJsSourceFileMap[source] == null) {
          entrypointToJsSourceFileMap[source] = new Set();
        }
      } else if (importer != null) {
        if (entrypointToJsSourceFileMap[importer] != null) {
          // This is a JS entrypoint, save it so we can look for a config file that it imports
          entrypointToJsSourceFileMap[importer].add(source);
          jsSourceFileToEntrypointMap[source] = importer;
          return;
        }
        const sourceFile = fileIdToSourceFileMap[importer];
        if (sourceFile == null) {
          return;
        }
        const entrypoint = jsSourceFileToEntrypointMap[sourceFile];
        if (entrypoint == null) {
          return;
        }
        const extension = path.extname(source);
        const filename = path.basename(source, extension);
        if (filename.endsWith(CONFIG_FILE_SUFFIX)) {
          // We found a .config file that's imported from an entrypoint JS file, save it
          configSourceFileToEntrypointMap[filename] = entrypoint;
        }
      }
    },
    // Resolve the imported parameters files to a full module ID for referencing later
    load: async (id) => {
      const sourceFile = Object.keys(jsSourceFileToEntrypointMap).find((src) =>
        id.endsWith(src)
      );
      if (sourceFile != null) {
        fileIdToSourceFileMap[id] = sourceFile;
        return;
      }

      const configSourceFile = Object.keys(
        configSourceFileToEntrypointMap,
      ).find((src) =>
        // Drop any extensions in the import of the config file, e.g. in import "./main.config.js", we just want `main.config`
        RegExp(`${src.replaceAll(".", "\\.")}\\.(\\w+)$`).test(id)
      );
      if (configSourceFile != null) {
        // We now have the absolute path of the .config file, save it for later
        fileIdToSourceFileMap[id] = configSourceFile;
        return;
      }
    },
    // If this parsed module is a config file, then we hook into the produced AST to save off the config
    moduleParsed: (moduleInfo) => {
      const sourceFile = fileIdToSourceFileMap[moduleInfo.id];
      if (sourceFile == null) {
        return;
      }
      const entrypointForConfig = configSourceFileToEntrypointMap[sourceFile];
      if (entrypointForConfig == null) {
        return;
      }

      const widgetConfig = extractWidgetConfig(moduleInfo);
      if (widgetConfig != null) {
        entrypointFileIdToConfigMap[entrypointForConfig] = widgetConfig;
      }
    },
    // We hook into the produced bundle information to generate a widget configuration file that includes both the entrypoint info and any inferred parameter information.
    async generateBundle(_, bundle) {
      const foundryConfig = await foundryConfigPromise;
      const widgetSetVersion = await autoVersion(
        foundryConfig?.foundryConfig.widgetSet.autoVersion
          ?? { "type": "package-json" },
      );

      if (foundryConfig == null) {
        throw new Error("foundry.config.json file not found.");
      }

      const widgetConfigManifest = widgetSetManifest(
        foundryConfig.foundryConfig.widgetSet.rid,
        widgetSetVersion,
        entrypointFileIdToConfigMap,
        bundle,
      );

      this.emitFile({
        fileName: MANIFEST_FILE_LOCATION,
        type: "asset",
        source: JSON.stringify(widgetConfigManifest, null, 2),
      });
    },
  };
}
