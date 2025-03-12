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
import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api.unstable";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget.api.unstable";
import fs from "fs";
import path from "path";
import type { Plugin, ResolvedConfig } from "vite";
import { extractWidgetConfig } from "../common/extractWidgetConfig.js";
import { getInputHtmlEntrypoints } from "../common/getInputHtmlEntrypoints.js";
import { standardizeFileExtension } from "../common/standardizeFileExtension.js";
import { buildWidgetSetManifest } from "./buildWidgetSetManifest.js";
import { getWidgetBuildOutputs } from "./getWidgetBuildOutputs.js";
import { isConfigFile } from "./isConfigFile.js";

export function FoundryWidgetBuildPlugin(): Plugin {
  // The root HTML entrypoints of the build process
  let htmlEntrypoints: string[];
  // Store the configuration per module ID, e.g. /repo/src/widget-one.config.ts -> { ... }
  const configFiles: Record<string, WidgetConfig<ParameterConfig>> = {};
  let config: ResolvedConfig;

  return {
    name: "@osdk:widget-build-plugin",
    enforce: "pre",

    /**
     * Capture the entrypoints from the Vite config for use in later build steps.
     */
    buildStart(options) {
      htmlEntrypoints = getInputHtmlEntrypoints(options);
    },

    /**
     * Store the resolved Vite config for use in later build steps.
     */
    configResolved(_config) {
      config = _config;
    },

    /**
     * Attempt to parse any module that looks like a widget configuration file, storing the result
     * to be matched to entrypoints later.
     */
    moduleParsed(moduleInfo) {
      if (!isConfigFile(moduleInfo.id)) {
        return;
      }

      const widgetConfig = extractWidgetConfig(moduleInfo.id, moduleInfo.ast);
      if (widgetConfig != null) {
        const standardizedSource = standardizeFileExtension(moduleInfo.id);
        configFiles[standardizedSource] = widgetConfig;
      }
    },

    /**
     * Once the build is complete, generate the widget set manifest based on the entrypoints and
     * configuration files that were found.
     *
     * Write the manifest to the expected location in the dist directory.
     */
    async writeBundle(_, bundle) {
      const foundryConfig = await loadFoundryConfig("widgetSet");
      if (foundryConfig == null) {
        throw new Error("foundry.config.json file not found.");
      }

      // Build widget set manifest
      const widgetSetVersion = await computeWidgetSetVersion(foundryConfig);
      const widgetBuilds = htmlEntrypoints.map((input) =>
        getWidgetBuildOutputs(bundle, input, config.build.outDir, configFiles)
      );
      const widgetSetManifest = buildWidgetSetManifest(
        foundryConfig.foundryConfig.widgetSet.rid,
        widgetSetVersion,
        widgetBuilds,
      );

      // Write the manifest to the dist directory
      const manifestPath = path.join(
        config.build.outDir,
        MANIFEST_FILE_LOCATION,
      );
      fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
      fs.writeFileSync(
        manifestPath,
        JSON.stringify(widgetSetManifest, null, 2),
      );
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
