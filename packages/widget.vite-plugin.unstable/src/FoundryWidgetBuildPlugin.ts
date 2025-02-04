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
import type {
  ParameterConfig,
  WidgetConfig,
  WidgetManifestConfig,
  WidgetSetManifest,
} from "@osdk/widget-api.unstable";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget-api.unstable";
import type { Plugin, Rollup } from "vite";
import { CONFIG_FILE_SUFFIX } from "./constants.js";
import { extractWidgetConfig } from "./extractWidgetConfig.js";

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

      const widgetConfig = extractWidgetConfig(moduleInfo);
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
      const manifest = widgetSetManifest(
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
function widgetSetManifest(
  widgetSetRid: string,
  widgetSetVersion: string,
  configFiles: Record<string, WidgetConfig<ParameterConfig>>,
  bundle: Rollup.OutputBundle,
): WidgetSetManifest {
  const entrypointChunks = Object.values(bundle).filter(
    (chunk): chunk is Rollup.OutputChunk =>
      chunk.type === "chunk" && chunk.isEntry && chunk.facadeModuleId != null,
  );
  const widgets = entrypointChunks.map((chunk) =>
    widgetConfig(
      chunk,
      getChunkConfigFile(chunk, configFiles),
    )
  ).reduce<Record<string, WidgetManifestConfig>>((acc, widget) => {
    acc[widget.id] = widget;
    return acc;
  }, {});

  return {
    manifestVersion: "1.0.0",
    widgetSet: {
      rid: widgetSetRid,
      version: widgetSetVersion,
      widgets,
    },
  };
}

function getChunkConfigFile(
  chunk: Rollup.OutputChunk,
  configFiles: Record<string, WidgetConfig<ParameterConfig>>,
): WidgetConfig<ParameterConfig> {
  const configModuleIds = chunk.moduleIds.filter(isConfigFile);
  if (configModuleIds.length === 0) {
    throw new Error(
      `No widget config files found for entrypoint ${chunk.facadeModuleId}`,
    );
  }
  if (configModuleIds.length > 1) {
    throw new Error(
      `Multiple widget config files found for entrypoint ${chunk.facadeModuleId}`,
    );
  }

  const configFile = configFiles[configModuleIds[0]];
  if (configFile == null) {
    throw new Error(
      `No config file found for entrypoint ${chunk.facadeModuleId}`,
    );
  }

  return configFile;
}

function widgetConfig(
  chunk: Rollup.OutputChunk,
  widgetConfig: WidgetConfig<ParameterConfig>,
): WidgetManifestConfig {
  const cssFiles = Array.from(chunk.viteMetadata?.importedCss ?? []);
  return {
    id: widgetConfig.id,
    name: widgetConfig.name,
    description: widgetConfig.description,
    type: "workshopWidgetV1",
    entrypointJs: [
      { path: chunk.fileName, type: "module" },
    ],
    entrypointCss: cssFiles.map((path) => ({
      path,
    })),
    parameters: widgetConfig.parameters,
    events: widgetConfig.events,
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

/**
 * Trim the file extension and check if it ends with the config file suffix.
 */
function isConfigFile(filePath: string): boolean {
  const trimmedFilePath = filePath.replace(/\.[^/.]+$/, "");
  return trimmedFilePath.endsWith(CONFIG_FILE_SUFFIX);
}
