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

import { ExitProcessError } from "@osdk/cli.common";
import type { LoadedFoundryConfig } from "@osdk/foundry-config-json";
import { loadFoundryConfig } from "@osdk/foundry-config-json";

let configPromise: Promise<LoadedFoundryConfig | undefined> | undefined =
  undefined;

function getConfig(): Promise<LoadedFoundryConfig | undefined> {
  if (configPromise == null) {
    configPromise = loadFoundryConfig().catch((e) => {
      throw new ExitProcessError(2, e instanceof Error ? e.message : undefined);
    });
  }
  return configPromise;
}

export default getConfig;
