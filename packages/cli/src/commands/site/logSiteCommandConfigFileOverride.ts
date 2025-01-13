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
import type { CommonSiteArgs } from "./CommonSiteArgs.js";

export async function logSiteCommandConfigFileOverride(
  args: Arguments<CommonSiteArgs>,
  config: FoundryConfig<"site"> | undefined,
) {
  if (
    config?.site.application != null
    && args.application !== config.site.application
  ) {
    consola.debug(
      `Overriding "application" from config file with ${args.application}`,
    );
  }

  if (config?.foundryUrl != null && args.foundryUrl !== config.foundryUrl) {
    consola.debug(
      `Overriding "foundryUrl" from config file with ${args.foundryUrl}`,
    );
  }
}
