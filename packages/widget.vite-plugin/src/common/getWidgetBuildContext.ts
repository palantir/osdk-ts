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
import type { WidgetSetInputSpec } from "@osdk/widget.api";

import { getWidgetSetInputSpec } from "../build-plugin/getWidgetSetInputSpec.js";

export async function getWidgetBuildContext(root: string): Promise<{
  widgetSetRid: string;
  version: string;
  inputSpec: WidgetSetInputSpec;
}> {
  const loaded = await loadFoundryConfig("widgetSet", root);
  if (loaded == null) {
    throw new Error(
      'foundry.config.json file not found. Define it with build: "local" to package widgets without a Foundry widget set.',
    );
  }
  const config = loaded.foundryConfig;
  const local = config.build === "local";
  return {
    widgetSetRid: local
      ? "ri.widgetregistry.main.widget-set.00000000-0000-0000-0000-000000000000"
      : config.widgetSet.rid!,
    version: local
      ? "0.1.0"
      : await autoVersion(
          config.widgetSet.autoVersion ?? { type: "package-json" },
          root,
        ),
    inputSpec: await getWidgetSetInputSpec(
      path.join(root, "package.json"),
      path.join(root, "resources.json"),
    ),
  };
}
