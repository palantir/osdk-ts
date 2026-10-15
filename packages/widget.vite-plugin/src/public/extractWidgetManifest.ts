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

import type { WidgetSetManifest } from "@osdk/widget.api";
import { createServer, type InlineConfig } from "vite";

import { buildWidgetSetManifest } from "../build-plugin/buildWidgetSetManifest.js";
import { MODULE_EVALUATION_MODE } from "../common/constants.js";
import { getWidgetBuildContext } from "../common/getWidgetBuildContext.js";
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
    const context = await getWidgetBuildContext(server.config.root);
    const declarations = await getWidgetDeclarations(server);
    return buildWidgetSetManifest(
      context.widgetSetRid,
      context.version,
      declarations.map(({ config: widgetConfig }) => ({
        widgetConfig,
        scripts: [],
        stylesheets: [],
      })),
      context.inputSpec,
      options,
    );
  } finally {
    await server.close();
  }
}
