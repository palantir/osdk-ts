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

import type { LoadedFoundryConfig } from "@osdk/foundry-config-json";
import { autoVersion, loadFoundryConfig } from "@osdk/foundry-config-json";
import type { ParameterConfig, WidgetConfig } from "@osdk/widget-api.unstable";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget-api.unstable";
import type { Plugin } from "vite";
import { extractWidgetConfig } from "../common/extractWidgetConfig.js";
import { buildWidgetSetManifest } from "./buildWidgetSetManifest.js";
import { isConfigFile } from "./isConfigFile.js";

export function FoundryWidgetBuildPlugin(): Plugin {
  // Store the configuration per module ID, e.g. /repo/src/widget-one.config.ts -> { ... }
  const configFiles: Record<string, WidgetConfig<ParameterConfig>> = {};

  return {
    name: "@osdk:widget-build-plugin",
    enforce: "pre",

    /**
     * Attempt to parse any module that looks like a widget configuration file, storing the result
     * to be matched to entrypoints later.
     */
    moduleParsed: (moduleInfo) => {
      if (!isConfigFile(moduleInfo.id)) {
        return;
      }

      const widgetConfig = extractWidgetConfig(moduleInfo.id, moduleInfo.ast);
      if (widgetConfig != null) {
        configFiles[moduleInfo.id] = widgetConfig;
      }
    },

    /**
     * Once the build is complete, generate the widget set manifest based on the entrypoints and
     * configuration files that were found.
     *
     * Write the manifest to the expected location in the dist directory.
     */
    async generateBundle(_, bundle) {
      const foundryConfig = await loadFoundryConfig("widgetSet");
      if (foundryConfig == null) {
        throw new Error("foundry.config.json file not found.");
      }

      // Build widget set manifest
      const widgetSetVersion = await computeWidgetSetVersion(foundryConfig);
      const manifest = buildWidgetSetManifest(
        foundryConfig.foundryConfig.widgetSet.rid,
        widgetSetVersion,
        configFiles,
        bundle,
      );

      // Write the manifest to the dist directory
      this.emitFile({
        fileName: MANIFEST_FILE_LOCATION,
        type: "asset",
        source: JSON.stringify(manifest, null, 2),
      });
    },
  };
}

async function computeWidgetSetVersion(
  foundryConfig: LoadedFoundryConfig<"widgetSet">,
): Promise<string> {
  return autoVersion(
    foundryConfig.foundryConfig.widgetSet.autoVersion
      ?? { "type": "package-json" },
  );
}
