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
  checkFoundryCli,
  FoundryCLIInstallation,
  MIN_FOUNDRY_CLI_VERSION,
} from "../utils/version.js";
import { installFoundryCli } from "./download.js";

export const postinstall = async (): Promise<void> => {
  const { result, version } = await checkFoundryCli();
  switch (result) {
    case FoundryCLIInstallation.INSTALLED:
      consola.info(
        `✅ Foundry CLI (v${version}) is installed already, skipping installation.`,
      );
      return;
    case FoundryCLIInstallation.INCOMPATIBLE_VERSION:
      invariant(
        false,
        `Foundry CLI (v${version}) is installed already, but the minimum required version is ${MIN_FOUNDRY_CLI_VERSION}. Please run "foundry update self" to update foundry cli.`,
      );
      return;
    case FoundryCLIInstallation.NOT_INSTALLED:
      consola.info(`Foundry CLI not found locally, attempting to install...`);
      await installFoundryCli();
      return;
  }
};
