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

import path from "path";

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api";
import type { Rollup, ViteDevServer } from "vite";

import { extractWidgetConfig } from "../common/extractWidgetConfig.js";
import type { BuildOutputs } from "./extractBuildOutputs.js";
import { extractBuildOutputs } from "./extractBuildOutputs.js";
import { isConfigFile } from "./isConfigFile.js";

export interface WidgetBuildOutputs extends BuildOutputs {
  widgetConfig: WidgetConfig<ParameterConfig>;
}

export async function getWidgetBuildOutputs(
  bundle: Rollup.OutputBundle,
  input: string,
  buildDir: string,
  server: ViteDevServer,
): Promise<WidgetBuildOutputs> {
  const inputHtmlFilePath = path.resolve(
    buildDir,
    path.relative(server.config.root, input),
  );
  const extracted = extractBuildOutputs(inputHtmlFilePath);
  const htmlPath = path
    .relative(buildDir, inputHtmlFilePath)
    .split(path.sep)
    .join("/");
  const resolveAsset = (src: string): string => {
    const url = new URL(src, `http://widget.local/${htmlPath}`);
    const base = server.config.base;
    if (src.startsWith("/") && base !== "./" && url.pathname.startsWith(base)) {
      return `/${url.pathname.slice(base.length)}`;
    }
    return url.pathname;
  };
  const buildOutputs = {
    scripts: extracted.scripts.map((script) => ({
      ...script,
      src: resolveAsset(script.src),
    })),
    stylesheets: extracted.stylesheets.map(resolveAsset),
  };
  const scriptPaths = new Set(
    buildOutputs.scripts.map((script) => script.src.slice(1)),
  );
  const entrypointChunk = Object.values(bundle).find(
    (chunk): chunk is Rollup.OutputChunk =>
      chunk.type === "chunk" &&
      chunk.isEntry &&
      scriptPaths.has(chunk.fileName),
  );
  if (entrypointChunk == null) {
    throw new Error(`Entrypoint chunk not found for input file: ${input}`);
  }
  const configModuleId = getChunkConfigModuleId(entrypointChunk);
  const widgetConfig = await extractWidgetConfig(configModuleId, server);
  return { ...buildOutputs, widgetConfig };
}

function getChunkConfigModuleId(chunk: Rollup.OutputChunk): string {
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

  return configModuleIds[0];
}
