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

import type { FoundryConfig } from "./config.js";
import { loadFoundryConfig } from "./config.js";

let config: FoundryConfig | undefined | null = null;
let configFilePath: string | undefined | null = null;

async function getConfig(): Promise<FoundryConfig | undefined> {
  if (config === null) {
    const loadedConfig = await loadFoundryConfig();
    config = loadedConfig?.foundryConfig;
    configFilePath = loadedConfig?.configFilePath;
  }
  return config;
}

// This middleware will be run after parsing is complete so we know
// we have loaded the config prior during construction of the commands
export async function logConfigFileMiddleware(): Promise<void> {
  if (configFilePath != null) {
    const Consola = await import("consola");
    const consola = Consola.consola;
    consola.debug(
      `Using configuration from file: "${configFilePath}"`,
    );
  }
}

export default getConfig;
