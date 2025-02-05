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

import type {
  ParameterConfig,
  WidgetConfig,
  WidgetManifestConfig,
  WidgetSetManifest,
} from "@osdk/widget-api.unstable";
import type { Rollup } from "vite";
import { standardizeFileExtension } from "../common/standardizeFileExtension.js";
import { isConfigFile } from "./isConfigFile.js";

export function buildWidgetSetManifest(
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

  const standardizedSource = standardizeFileExtension(configModuleIds[0]);
  const configFile = configFiles[standardizedSource];
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
