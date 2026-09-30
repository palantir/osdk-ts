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

import type { PluginOption } from "vite";

import foundryWidgetPlugin, {
  type FoundryWidgetPluginOptions,
} from "../index.js";

type BuildContext = NonNullable<FoundryWidgetPluginOptions["build"]>;

/** Use the build context supplied by `foundry build custom-widget`. */
export function superrepoWidgetPlugin(
  options?: Omit<FoundryWidgetPluginOptions, "build">,
): PluginOption {
  const raw = process.env.FOUNDRY_WIDGET_BUILD_CONTEXT;
  const build = raw == null ? undefined : parseBuildContext(raw);
  return [
    {
      name: "foundry-superrepo-widget",
      apply: "build",
      config() {
        if (build == null) {
          throw new Error(
            "Run `foundry build custom-widget` to build a SuperRepo widget.",
          );
        }
      },
    },
    foundryWidgetPlugin({ ...options, build }),
  ];
}

function parseBuildContext(raw: string): BuildContext {
  const context = JSON.parse(raw) as BuildContext;
  if (
    context == null ||
    typeof context.widgetSetRid !== "string" ||
    !context.widgetSetRid.startsWith("ri.widgetregistry.") ||
    typeof context.version !== "string" ||
    context.version.length === 0 ||
    !Array.isArray(context.inputSpec?.discovered?.sdks) ||
    !context.inputSpec.discovered.sdks.every(
      (sdk) =>
        sdk != null &&
        typeof sdk.rid === "string" &&
        typeof sdk.version === "string",
    )
  ) {
    throw new Error("Invalid FOUNDRY_WIDGET_BUILD_CONTEXT from foundry-cli.");
  }
  return context;
}
