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

import consola from "consola";
import invariant from "tiny-invariant";

import {
  getFoundryVersion,
  MIN_FOUNDRY_CLI_VERSION,
  versionIsAtMinimum,
} from "../utils/version.js";
import { installFoundryCli } from "./download.js";

const main = async () => {
  const foundryVersion = await getFoundryVersion();
  if (typeof foundryVersion === "string") {
    invariant(
      versionIsAtMinimum(foundryVersion, MIN_FOUNDRY_CLI_VERSION),
      `Foundry CLI (v${foundryVersion}) is installed already, but the minimum required version is ${MIN_FOUNDRY_CLI_VERSION}. Please run "foundry update self" to update foundry cli.`
    );
    consola.info(
      `✅ Foundry CLI (v${foundryVersion}) is installed already, skipping installation.`
    );
    return;
  }
  consola.info(`Foundry CLI not found locally, attempting to install...`);
  await installFoundryCli();
};

main().catch((error: unknown) => {
  // Failing the install is deliberate — a missing token or an out-of-date CLI
  // is not something to defer. Report why, rather than leaving node to print an
  // unhandled rejection trace around the message that actually says what to do.
  consola.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
