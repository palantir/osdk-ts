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
  checkFoundryCliVersion,
  MIN_FOUNDRY_CLI_VERSION,
} from "../utils/foundry-cli.js";
import { installFoundryCli } from "./download.js";
import { readGitRemoteUrl } from "./gitRemote.js";

export const postinstall = async (): Promise<void> => {
  const remote = await readGitRemoteUrl();
  if (
    remote === "git@github.com:palantir/osdk-ts.git" ||
    remote === "https://github.com/palantir/osdk-ts.git"
  ) {
    consola.info(`✅ In osdk-ts repo, skipping installation.`);
    return;
  }
  const result = await checkFoundryCliVersion();
  switch (result.type) {
    case "installed":
      consola.info(
        `✅ Foundry CLI (v${result.version}) is installed already, skipping installation.`,
      );
      return;
    case "version-error":
      consola.warn(
        `Foundry CLI is installed, but we could not probe its version.`,
      );
      return;
    case "version-incompatible":
      invariant(
        false,
        `Foundry CLI (v${result.version}) is installed already, but the minimum required version is ${MIN_FOUNDRY_CLI_VERSION}. Please run "foundry update self" to update foundry cli.`,
      );
      return;
    case "not-found":
      consola.info(`Foundry CLI not found locally, attempting to install...`);
      await installFoundryCli();
      return;
  }
};
