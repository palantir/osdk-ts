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
  type WidgetManifest,
  type WidgetManifestConfig,
} from "@osdk/widget-api.unstable";
import escodegen from "escodegen";
import type { ObjectExpression } from "estree";
import path from "node:path";
import { fileURLToPath } from "node:url";
import color from "picocolors";
import sirv from "sirv";
import type {
  HtmlTagDescriptor,
  IndexHtmlTransformHook,
  IndexHtmlTransformResult,
  Plugin,
  ResolvedConfig,
  ViteDevServer,
} from "vite";
import { PALANTIR_PATH, SETUP_PATH, VITE_INJECTIONS } from "./constants.js";

export const DIR_DIST = typeof __dirname !== "undefined"
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));
export interface Options {}

const CONFIG_FILE_SUFFIX = ".config";
const DEFINE_CONFIG_FUNCTION = "defineConfig";

export function FoundryWidgetVitePlugin(_options: Options = {}): Plugin {
  const baseDir = process.cwd();
  const foundryConfigPromise = loadFoundryConfig("widget");

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
        async (req, res) => {
          if (devServer == null) {
            res.statusCode = 500;
            res.statusMessage = "Vite server not found.";
            res.end();
            return;
          }
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-Type", "application/javascript");
          res.end(await extractInjectedScripts(devServer));
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
              const settingsResponse = await setWidgetSettings(
                // TODO: Actually handle the widget RID from within the config, which will require somehow parsing the config
                // Unfortunately, moduleParsed is not called during vite's dev mode for performance reasons, so the config file
                // will need to be parsed/read a different way
                foundryConfig.foundryConfig.widget.rid,
                foundryUrl,
                localhostUrl,
                entrypointToJsSourceFileMap,
                entrypointFileName,
              );
              if (
                settingsResponse.status !== 200
              ) {
                res.statusCode = settingsResponse.status;
                res.statusMessage =
                  `Unable to set widget settings in Foundry: ${settingsResponse.statusText}`;
                settingsResponse.text().then((err) => {
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
                    `${foundryUrl.origin}/workspace/custom-views/preview/${foundryConfig.foundryConfig.widget.rid}`,
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

      // Lightly traverse the AST of the config file to extract out the actual object
      const defaultExport = moduleInfo.ast?.body.find(
        (node) => node.type === "ExportDefaultDeclaration",
      );
      if (defaultExport == null) {
        throw new Error(
          "Widget configuration object must be the default export in "
            + moduleInfo.id,
        );
      }

      /**
       * export default defineConfig({
       * })
       */
      if (defaultExport.declaration.type === "CallExpression") {
        if (defaultExport.declaration.callee.type === "Identifier") {
          if (
            defaultExport.declaration.callee.name === DEFINE_CONFIG_FUNCTION
            && defaultExport.declaration.arguments[0].type
              === "ObjectExpression"
          ) {
            entrypointFileIdToConfigMap[entrypointForConfig] =
              extractWidgetConfig(defaultExport.declaration.arguments[0]);
            return;
          }
        }
      }

      /**
       * const MyConfig = defineConfig({
       * })
       * export default MyConfig;
       */
      if (defaultExport.declaration.type === "Identifier") {
        const variableName = defaultExport.declaration.name;
        for (const node of moduleInfo.ast?.body ?? []) {
          const declaration = node.type === "VariableDeclaration"
            ? node
            : node.type === "ExportNamedDeclaration"
            ? node.declaration
            : undefined;
          if (
            declaration == null
            || declaration.type !== "VariableDeclaration"
          ) {
            continue;
          }
          if (
            declaration.declarations.some(
              (inner) =>
                inner.id.type === "Identifier"
                && inner.id.name === variableName,
            )
          ) {
            const variableDeclarator = declaration.declarations.find(
              (declarator) =>
                declarator.id.type === "Identifier"
                && declarator.id.name === variableName,
            );
            if (
              variableDeclarator?.init?.type === "CallExpression"
              && variableDeclarator.init.callee.type === "Identifier"
              && variableDeclarator.init.callee.name === DEFINE_CONFIG_FUNCTION
              && variableDeclarator.init.arguments[0].type
                === "ObjectExpression"
            ) {
              entrypointFileIdToConfigMap[entrypointForConfig] =
                extractWidgetConfig(variableDeclarator.init.arguments[0]);
              return;
            }
          }
        }
      }

      // todo: deal with common JS
      // If the config file doesn't have what we're looking for, we ignore it. Failure to find any .config.js
      // file of the shape we want will be handled in generateBundle
    },
    // We hook into the produced bundle information to generate a widget configuration file that includes both the entrypoint info and any inferred parameter information.
    async generateBundle(options, bundle) {
      const foundryConfig = await foundryConfigPromise;
      const widgetVersion = await autoVersion(
        foundryConfig?.foundryConfig.widget.autoVersion
          ?? { "type": "package-json" },
      );

      const widgetConfigManifest: WidgetManifest = {
        version: "1.0.0",
        widgets: {},
      };

      const entrypointImports: { [chunkName: string]: string[] } = {};
      // This is inspired by vite's native manifest plugin, but we only care about entrypoints
      for (const file in bundle) {
        const chunk = bundle[file];
        if (chunk.type !== "chunk") {
          continue;
        }
        if (chunk.isEntry && chunk.facadeModuleId != null) {
          if (entrypointFileIdToConfigMap[chunk.facadeModuleId] == null) {
            throw new Error(
              `Could not find widget configuration object for entrypoint ${chunk.fileName}. Ensure that the default export of your imported *.${CONFIG_FILE_SUFFIX}.js file is a widget configuration object as returned by defineConfig()`,
            );
          }
          if (
            entrypointFileIdToConfigMap[chunk.facadeModuleId].type
              !== "workshop"
          ) {
            throw new Error(
              `Unsupported widget type for entrypoint ${chunk.fileName}. Only "workshop" widgets are supported`,
            );
          }
          const widgetConfig: WidgetManifestConfig = {
            type: "workshopWidgetV1",
            entrypointJs: [
              {
                path: chunk.fileName,
                type: "module",
              },
            ],
            entrypointCss: chunk.viteMetadata?.importedCss.size
              ? [...chunk.viteMetadata.importedCss].map((css) => ({
                path: css,
              }))
              : [],
            rid: entrypointFileIdToConfigMap[chunk.facadeModuleId].rid,
            version: widgetVersion,
            parameters:
              entrypointFileIdToConfigMap[chunk.facadeModuleId].parameters
                ?? {},
            events: entrypointFileIdToConfigMap[chunk.facadeModuleId].events
              ?? {},
          };
          widgetConfigManifest.widgets[chunk.name] = widgetConfig;
          entrypointImports[chunk.name] = chunk.imports;
        } else {
          // Check if it's an imported chunk, since any CSS files we will need to put on the page for them
          // JS files will get imported on their own
          for (
            const [entrypointName, imports] of Object.entries(
              entrypointImports,
            )
          ) {
            if (
              imports.includes(chunk.fileName)
              && chunk.viteMetadata?.importedCss.size
            ) {
              const existingCssFiles =
                widgetConfigManifest.widgets[entrypointName].entrypointCss?.map(
                  ({ path }) => path,
                ) ?? [];
              widgetConfigManifest.widgets[entrypointName].entrypointCss?.push(
                ...[...chunk.viteMetadata.importedCss]
                  .filter((css) => !existingCssFiles.includes(css))
                  .map((css) => ({
                    path: css,
                  })),
              );
            }
          }
        }
      }

      this.emitFile({
        fileName: MANIFEST_FILE_LOCATION,
        type: "asset",
        source: JSON.stringify(widgetConfigManifest, null, 2),
      });
    },
  };
}

function extractWidgetConfig(objectExpression: ObjectExpression) {
  // Convert from AST -> JS string
  let widgetConfigString = escodegen.generate(objectExpression);
  // The output JS string is not valid JSON, so we force it into JSON that we can then print out into a JSON file

  // Wrap keys in double quotes
  widgetConfigString = widgetConfigString.replace(/([^\s:]+):/g, "\"$1\":");
  // Convert single quote string values to double quotes
  widgetConfigString = widgetConfigString.replace(/: '(.+)'/g, ": \"$1\"");

  // Convert single quote string values in arrays to double quotes
  widgetConfigString = widgetConfigString.replace(
    /: \['(.+)'\]/g,
    ": [\"$1\"]",
  );

  return JSON.parse(widgetConfigString);
}

function setWidgetSettings(
  widgetRid: string,
  foundryUrl: URL,
  localhostUrl: string,
  entrypointToJsSourceFileMap: Record<string, Set<string>>,
  entrypointFileName: string,
) {
  const widgetDevModeSettings = {
    entrypointJs: [
      `/${VITE_INJECTIONS}`,
      "/@vite/client",
      ...entrypointToJsSourceFileMap[entrypointFileName],
    ].map((file) => ({
      filePath: `${localhostUrl}${file}`,
      scriptType: { type: "module", module: {} },
    })),
    entrypointCss: [],
  };
  return fetch(
    `${foundryUrl.origin}/view-registry/api/dev-mode/settings/${widgetRid}`,
    {
      body: JSON.stringify(widgetDevModeSettings),
      method: "PUT",
      headers: {
        authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    },
  );
}

function enableDevMode(foundryUrl: URL) {
  return fetch(`${foundryUrl.origin}/view-registry/api/dev-mode/enable`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
      accept: "application/json",
    },
  });
}

/**
 * Extracts inline scripts injected by Vite plugins during HTML transformation.
 *
 * Vite plugins can inject scripts into the HTML entrypoint. This function captures
 * those injections, specifically inline scripts, which are needed for our server-side
 * rendered pages. It calls the `transformIndexHtml` hook on each plugin, collects
 * the script descriptors, and returns the concatenated inline script contents.
 *
 * See documentation: https://vite.dev/guide/api-plugin#transformindexhtml
 */
async function extractInjectedScripts(
  devServer: ViteDevServer,
): Promise<string> {
  const pluginTransforms = (devServer?.pluginContainer.plugins ?? [])
    .map(getPluginTransformHook)
    .filter((hook): hook is IndexHtmlTransformHook => hook != null);
  const transformResults: Array<IndexHtmlTransformResult | undefined> =
    await Promise.all(
      pluginTransforms.map(async (transformHook) => {
        // The parameters to the transform hook are not used in the cases we currently support
        const result = await transformHook("", { path: "", filename: "" });
        return result ?? undefined;
      }),
    );

  // We are only interested in extracting scripts that Vite would usually inject as inline scripts
  const inlineScriptDescriptors: HtmlTagDescriptor[] = transformResults
    .filter((result): result is HtmlTagDescriptor[] =>
      result != null && typeof result !== "string"
    )
    .flat()
    .filter((descriptor: HtmlTagDescriptor) =>
      descriptor.tag === "script" && typeof descriptor.children === "string"
    );

  return inlineScriptDescriptors.map((descriptor) => descriptor.children).join(
    "\n",
  );
}

/**
 * The Vite plugin API for transformIndexHtml supports a few different formats,
 * all which ultimately resolve to the function that we want to call.
 */
function getPluginTransformHook(
  plugin: Plugin<unknown>,
): IndexHtmlTransformHook | undefined {
  if (typeof plugin.transformIndexHtml === "function") {
    return plugin.transformIndexHtml;
  } else if (
    typeof plugin.transformIndexHtml === "object"
    && "handler" in plugin.transformIndexHtml
  ) {
    return plugin.transformIndexHtml.handler;
  } else if (
    typeof plugin.transformIndexHtml === "object"
    && "transform" in plugin.transformIndexHtml
  ) {
    return plugin.transformIndexHtml.transform;
  }
}
