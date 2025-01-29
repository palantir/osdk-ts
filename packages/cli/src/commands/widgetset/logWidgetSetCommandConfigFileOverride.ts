/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { FoundryConfig } from "@osdk/foundry-config-json";
import { consola } from "consola";
import type { Arguments } from "yargs";
import type { CommonWidgetSetArgs } from "./CommonWidgetSetArgs.js";

export function logWidgetSetCommandConfigFileOverride(
  args: Arguments<CommonWidgetSetArgs>,
  config: FoundryConfig<"widgetSet"> | undefined,
): void {
  if (
    config?.widgetSet.rid != null
    && args.rid !== config.widgetSet.rid
  ) {
    consola.debug(
      `Overriding "rid" from config file with ${args.rid}`,
    );
  }

  if (config?.foundryUrl != null && args.foundryUrl !== config.foundryUrl) {
    consola.debug(
      `Overriding "foundryUrl" from config file with ${args.foundryUrl}`,
    );
  }
}
