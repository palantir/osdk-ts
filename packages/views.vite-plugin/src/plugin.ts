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

import {
  MANIFEST_FILE_LOCATION,
  type ViewConfig,
  type ViewManifest,
  type ViewManifestConfig,
} from "@osdk/views-api.unstable";
import escodegen from "escodegen";
import type { ObjectExpression } from "estree";
import fs from "fs-extra";
import path from "node:path";
import type { Plugin } from "vite";

export interface Options {
  /**
   * By default, looks in the directory from which vite is invoked
   */
  packageJsonPath?: string;
}

const CONFIG_FILE_SUFFIX = ".config";

export function FoundryViewVitePlugin(options: Options = {}): Plugin {
  const { packageJsonPath = path.join(process.cwd(), "package.json") } =
    options;

  const entrypointFileIds: string[] = [];
  const jsSourceFileToEntrypointMap: Record<string, string> = {};
  const fileIdToSourceFileMap: Record<string, string> = {};
  const configSourceFileToEntrypointMap: Record<string, string> = {};
  const entrypointFileIdToConfigMap: Record<string, ViewConfig> = {};

  return {
    name: "@osdk:view-manifest",
    enforce: "pre",
    // Look for .config.(j|t)s files that are imported from an entrypoint JS file
    resolveId: (source, importer, options) => {
      if (options.isEntry) {
        entrypointFileIds.push(source);
      } else if (importer != null) {
        if (entrypointFileIds.includes(importer)) {
          // This is a JS entrypoint, save it so we can look for a config file that it imports
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
          // We found a .parameters file that's imported from an entrypoint JS file, save it
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
          "View config object must be the default export in " + moduleInfo.id,
        );
      }

      /**
       * export default {
       *  // config
       * };
       */
      if (defaultExport.declaration.type === "ObjectExpression") {
        entrypointFileIdToConfigMap[entrypointForConfig] = extractViewConfig(
          defaultExport.declaration,
        );
        return;
      }

      /**
       * const MyParameterConfig = {
       *   // config
       * };
       * export default MyParameterConfig;
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
            if (variableDeclarator?.init?.type === "ObjectExpression") {
              entrypointFileIdToConfigMap[entrypointForConfig] =
                extractViewConfig(variableDeclarator?.init);
              return;
            }
          }
        }

        throw new Error(
          `Could not find view configuration object in ${moduleInfo.id}. Ensure that the default export is a view configuration object of type ViewConfig`,
        );
      }

      // todo: deal with common JS
    },
    // We hook into the produced bundle information to generate a view configuration file that includes both the entrypoint info and any inferred parameter information.
    generateBundle(options, bundle) {
      const packageJsonFile = fs.readJSONSync(packageJsonPath);
      const viewConfigManifest: ViewManifest = {
        views: {},
      };

      // This is inspired by vite's native manifest plugin, but we only care about entrypoints
      for (const file in bundle) {
        const chunk = bundle[file];
        if (
          chunk.type === "chunk" && chunk.isEntry
          && chunk.facadeModuleId != null
        ) {
          if (entrypointFileIdToConfigMap[chunk.facadeModuleId] == null) {
            throw new Error(
              "Missing view configuration for entrypoint: "
                + chunk.fileName,
            );
          }
          const viewConfig: ViewManifestConfig = {
            entrypointJs: [chunk.fileName],
            entrypointCss: chunk.viteMetadata?.importedCss.size
              ? [...chunk.viteMetadata.importedCss]
              : [],
            rid: entrypointFileIdToConfigMap[chunk.facadeModuleId].rid,
            version: packageJsonFile.version ?? "0.0.0",
            parameters:
              entrypointFileIdToConfigMap[chunk.facadeModuleId].parameters
                ?? {},
            events: entrypointFileIdToConfigMap[chunk.facadeModuleId].events
              ?? {},
          };
          viewConfigManifest.views[chunk.name] = viewConfig;
        }
      }

      this.emitFile({
        fileName: MANIFEST_FILE_LOCATION,
        type: "asset",
        source: JSON.stringify(viewConfigManifest, null, 2),
      });
    },
  };
}

function extractViewConfig(objectExpression: ObjectExpression) {
  // Convert from AST -> JS string
  let viewConfigString = escodegen.generate(objectExpression);
  // The output JS string is not valid JSON, so we force it into JSON that we can then print out into a JSON file

  // Wrap keys in double quotes
  viewConfigString = viewConfigString.replace(
    /([^\s:]+):/g,
    "\"$1\":",
  );
  // Convert single quote string values to double quotes
  viewConfigString = viewConfigString.replace(
    /: '(.+)'/g,
    ": \"$1\"",
  );

  // Convert single quote string values in arrays to double quotes
  viewConfigString = viewConfigString.replace(
    /: \['(.+)'\]/g,
    ": [\"$1\"]",
  );

  return JSON.parse(viewConfigString);
}
