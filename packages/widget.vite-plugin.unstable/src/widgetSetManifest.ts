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
  type WidgetSetManifest,
} from "@osdk/widget.api.unstable";
import type { Rollup } from "vite";
import { CONFIG_FILE_SUFFIX } from "./constants.js";

export function widgetSetManifest(
  widgetSetRid: string,
  widgetSetVersion: string,
  entrypointFileIdToConfigMap: Record<string, WidgetConfig<ParameterConfig>>,
  bundle: Rollup.OutputBundle,
): WidgetSetManifest {
  const manifest: WidgetSetManifest = {
    manifestVersion: "1.0.0",
    widgetSet: {
      rid: widgetSetRid,
      version: widgetSetVersion,
      widgets: {},
    },
  };

  const entrypointImports: { [chunkName: string]: string[] } = {};
  for (const file in bundle) {
    const chunk = bundle[file];
    if (chunk.type !== "chunk") {
      continue;
    }

    if (chunk.isEntry && chunk.facadeModuleId != null) {
      const widgetConfig = entrypointFileIdToConfigMap[chunk.facadeModuleId];
      if (widgetConfig == null) {
        throw new Error(
          `Could not find widget configuration object for entrypoint ${chunk.fileName}. Ensure that the default export of your imported *.${CONFIG_FILE_SUFFIX}.js file is a widget configuration object as returned by defineConfig()`,
        );
      }
      if (widgetConfig.type !== "workshop") {
        throw new Error(
          `Unsupported widget type for entrypoint ${chunk.fileName}. Only "workshop" widgets are supported`,
        );
      }
      manifest.widgetSet.widgets[chunk.name] = {
        id: widgetConfig.id,
        name: widgetConfig.name,
        description: widgetConfig.description,
        type: "workshopWidgetV1",
        entrypointJs: [
          { path: chunk.fileName, type: "module" },
        ],
        entrypointCss: Array.from(chunk.viteMetadata?.importedCss ?? []).map((
          path,
        ) => ({
          path,
        })),
        parameters: widgetConfig.parameters,
        events: widgetConfig.events,
      };
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
          const existingCssFiles = manifest.widgetSet.widgets[entrypointName]
            .entrypointCss?.map(
              ({ path }) => path,
            ) ?? [];
          manifest.widgetSet.widgets[entrypointName]
            .entrypointCss?.push(
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

  return manifest;
}
