/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { InlineConfig } from "vite";

import { buildWidgetSetManifest } from "../build-plugin/buildWidgetSetManifest.js";
import type { FoundryWidgetPluginOptions } from "../index.js";
import { extractWidgetDeclarations } from "./extractWidgetDeclarations.js";

/** Extract manifest metadata for configure without building JavaScript or CSS assets. */
export async function extractWidgetManifest(
  options: FoundryWidgetPluginOptions & {
    build: Required<NonNullable<FoundryWidgetPluginOptions["build"]>>;
  },
  config: InlineConfig = {},
): Promise<WidgetSetManifest> {
  const declarations = await extractWidgetDeclarations(config);
  return buildWidgetSetManifest(
    options.build.widgetSetRid,
    options.build.version,
    declarations.map(({ config: widgetConfig }) => ({
      widgetConfig,
      scripts: [],
      stylesheets: [],
    })),
    options.build.inputSpec,
    options,
  );
}
