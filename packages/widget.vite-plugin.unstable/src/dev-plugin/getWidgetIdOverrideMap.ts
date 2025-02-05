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
} from "@osdk/widget.api.unstable";
import type { ViteDevServer } from "vite";
import { VITE_INJECTIONS_PATH } from "../common/constants.js";
import { extractInjectedScripts } from "./extractInjectedScripts.js";

export async function getWidgetIdOverrideMap(
  server: ViteDevServer,
  codeEntrypoints: Record<string, string>,
  configFileToEntrypoint: Record<string, string>,
  configFiles: Record<string, WidgetConfig<ParameterConfig>>,
  localhostUrl: string,
): Promise<Record<string, string[]>> {
  const widgetIdToEntrypoint = Object.entries(configFiles).reduce<
    Record<string, string>
  >(
    (acc, [configFile, config]) => {
      const widgetId = config.id;
      const entrypointFile = configFileToEntrypoint[configFile];
      const entrypointRelativePath = codeEntrypoints[entrypointFile];
      acc[widgetId] = entrypointRelativePath;
      return acc;
    },
    {},
  );

  const injectedScripts = await extractInjectedScripts(server);
  const widgetIdToOverrides = Object.entries(widgetIdToEntrypoint).reduce<
    Record<string, string[]>
  >(
    (acc, [widgetId, entrypoint]) => {
      const overrides = [
        `/${VITE_INJECTIONS_PATH}`,
        ...injectedScripts.scriptSources,
        entrypoint,
      ];
      // Prefix with localhost URL to create the full URL
      acc[widgetId] = overrides.map((override) => `${localhostUrl}${override}`);
      return acc;
    },
    {},
  );

  return widgetIdToOverrides;
}
