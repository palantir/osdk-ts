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

import type { InlineConfig } from "vite";
import { createServer } from "vite";

import { MODULE_EVALUATION_MODE } from "../common/constants.js";
import {
  getWidgetDeclarations,
  type WidgetDeclaration,
} from "../common/getWidgetDeclarations.js";

export type { WidgetDeclaration } from "../common/getWidgetDeclarations.js";

/** Read and validate widget declarations without executing the widget UI or building assets. */
export async function extractWidgetDeclarations(
  config: InlineConfig = {},
): Promise<WidgetDeclaration[]> {
  const server = await createServer({
    ...config,
    mode: MODULE_EVALUATION_MODE,
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  try {
    return await getWidgetDeclarations(server);
  } finally {
    await server.close();
  }
}
