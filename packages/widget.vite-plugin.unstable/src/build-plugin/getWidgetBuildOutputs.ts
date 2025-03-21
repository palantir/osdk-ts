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

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api.unstable";
import path from "path";
import type { Rollup } from "vite";
import { standardizeFileExtension } from "../common/standardizeFileExtension.js";
import type { BuildOutputs } from "./extractBuildOutputs.js";
import { extractBuildOutputs } from "./extractBuildOutputs.js";
import { isConfigFile } from "./isConfigFile.js";

export interface WidgetBuildOutputs extends BuildOutputs {
  widgetConfig: WidgetConfig<ParameterConfig>;
}

export function getWidgetBuildOutputs(
  bundle: Rollup.OutputBundle,
  input: string,
  buildDir: string,
  configFiles: Record<string, WidgetConfig<ParameterConfig>>,
): WidgetBuildOutputs {
  const inputHtmlFilePath = path.resolve(
    buildDir,
    path.relative(process.cwd(), input),
  );
  const buildOutputs = extractBuildOutputs(inputHtmlFilePath);
  const scriptPaths = new Set(
    buildOutputs.scripts.map((script) => script.src.slice(1)),
  );
  const entrypointChunk = Object.values(bundle).find((
    chunk,
  ): chunk is Rollup.OutputChunk =>
    chunk.type === "chunk" && chunk.isEntry
    && scriptPaths.has(chunk.fileName)
  );
  if (entrypointChunk == null) {
    throw new Error(`Entrypoint chunk not found for input file: ${input}`);
  }
  const widgetConfig = getChunkConfigFile(entrypointChunk, configFiles);
  return { ...buildOutputs, widgetConfig };
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
