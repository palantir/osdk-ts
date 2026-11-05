/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import path from "node:path";

import { autoVersion, loadFoundryConfig } from "@osdk/foundry-config-json";
import type { WidgetSetManifest } from "@osdk/widget.api";
import { createServer, type InlineConfig } from "vite";

import { buildWidgetSetManifest } from "../build-plugin/buildWidgetSetManifest.js";
import { getWidgetSetInputSpec } from "../build-plugin/getWidgetSetInputSpec.js";
import { MODULE_EVALUATION_MODE } from "../common/constants.js";
import { getWidgetDeclarations } from "../common/getWidgetDeclarations.js";
import type { FoundryWidgetPluginOptions } from "../index.js";

/** Read widget manifest metadata without executing the widget UI or building assets. */
export async function extractWidgetManifest(
  options?: FoundryWidgetPluginOptions,
  config: InlineConfig = {},
): Promise<WidgetSetManifest> {
  const server = await createServer({
    ...config,
    mode: MODULE_EVALUATION_MODE,
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  try {
    const root = server.config.root;
    const foundryConfig = await loadFoundryConfig("widgetSet", { cwd: root });
    if (foundryConfig == null) {
      throw new Error("foundry.config.json file not found.");
    }
    const { widgetSet } = foundryConfig.foundryConfig;
    const declarations = await getWidgetDeclarations(server);
    return buildWidgetSetManifest(
      widgetSet.rid,
      await autoVersion(widgetSet.autoVersion ?? { type: "package-json" }, {
        cwd: root,
      }),
      declarations.map(({ config: widgetConfig }) => ({
        widgetConfig,
        scripts: [],
        stylesheets: [],
      })),
      await getWidgetSetInputSpec(
        path.resolve(root, "package.json"),
        path.resolve(root, "resources.json"),
      ),
      options,
    );
  } finally {
    await server.close();
  }
}
