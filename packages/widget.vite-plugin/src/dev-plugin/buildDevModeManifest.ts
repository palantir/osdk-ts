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
  WidgetManifestConfig,
  WidgetSetInputSpec,
} from "@osdk/widget.api";
import path from "node:path";
import type { ViteDevServer } from "vite";
import { convertParameters } from "../build-plugin/buildWidgetSetManifest.js";
import { getWidgetSetInputSpec } from "../build-plugin/getWidgetSetInputSpec.js";
import { VITE_INJECTIONS_PATH } from "../common/constants.js";
import { extractWidgetConfig } from "../common/extractWidgetConfig.js";
import type { FoundryWidgetPluginOptions } from "../index.js";
import { extractInjectedScripts } from "./extractInjectedScripts.js";

export interface DevModeManifest {
  manifestVersion: "1.0.0";
  devSettings: {
    baseHref: string;
    widgets: Record<string, WidgetManifestConfig>;
    inputSpec?: WidgetSetInputSpec;
  };
}

export async function buildDevModeManifest(
  server: ViteDevServer,
  codeEntrypoints: Record<string, string>,
  configFileToEntrypoint: Record<string, string>,
  baseHref: string,
  pluginOptions?: FoundryWidgetPluginOptions,
): Promise<DevModeManifest> {
  const injectedScripts = await extractInjectedScripts(server);

  const widgets: Record<string, WidgetManifestConfig> = Object.fromEntries(
    await Promise.all(
      Object.keys(configFileToEntrypoint).map(async (configFile) => {
        const widgetConfig = await extractWidgetConfig(configFile, server);
        const entrypointFile = configFileToEntrypoint[configFile];
        const entrypointRelativePath = codeEntrypoints[entrypointFile];

        const scriptPaths = [
          VITE_INJECTIONS_PATH,
          ...injectedScripts.scriptSources.map((script) =>
            removeBasePath(script, baseHref)
          ),
          entrypointRelativePath.slice(1),
        ];

        const manifest: WidgetManifestConfig = {
          id: widgetConfig.id,
          name: widgetConfig.name,
          description: widgetConfig.description,
          type: "workshopWidgetV1",
          entrypointJs: scriptPaths.map((p) => ({
            path: `${baseHref}${p}`,
            type: "module" as const,
          })),
          entrypointCss: [],
          parameters: convertParameters(widgetConfig.parameters),
          events: widgetConfig.events,
          permissions: widgetConfig.permissions,
          refreshHostDataOnAction: widgetConfig.refreshHostDataOnAction
            ?? pluginOptions?.defaults?.refreshHostDataOnAction,
        };

        return [widgetConfig.id, manifest];
      }),
    ),
  );

  const inputSpec = await getWidgetSetInputSpec(
    path.resolve(server.config.root, "package.json"),
  );

  return {
    manifestVersion: "1.0.0",
    devSettings: {
      baseHref,
      widgets,
      inputSpec,
    },
  };
}

function removeBasePath(scriptPath: string, baseHref: string): string {
  const baseHrefPath = new URL(baseHref).pathname;
  return scriptPath.replace(baseHrefPath, "");
}
