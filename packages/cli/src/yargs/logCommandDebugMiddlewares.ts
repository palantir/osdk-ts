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

import type { Arguments } from "yargs";
import type { CommonSiteArgs } from "../commands/site/CommonSiteArgs.js";
import type { SiteDeployArgs } from "../commands/site/deploy/SiteDeployArgs.js";
import type { GitDescribeAutoVersionConfig } from "../util/config.js";

export async function logSiteCommandDebugMiddleware(
  argv: Arguments<CommonSiteArgs>,
  application: string | undefined,
  foundryUrl: string | undefined,
) {
  const Consola = await import("consola");
  const consola = Consola.consola;

  if (application != null && argv.application !== application) {
    consola.debug(
      `Overriding "application" from config file with ${argv.application}`,
    );
  }

  if (foundryUrl != null && argv.foundryUrl !== foundryUrl) {
    consola.debug(
      `Overriding "foundryUrl" from config file with ${argv.foundryUrl}`,
    );
  }
}

export async function logDeployCommandDebugMiddleware(
  argv: Arguments<SiteDeployArgs>,
  autoVersion: GitDescribeAutoVersionConfig | undefined,
  gitTagPrefix: string | undefined,
  directory: string | undefined,
) {
  const Consola = await import("consola");
  const consola = Consola.consola;

  if (autoVersion != null && argv.autoVersion !== autoVersion.type) {
    consola.debug(
      `Overriding "autoVersion" from config file with ${argv.autoVersion}`,
    );
  }

  if (directory != null && argv.directory !== directory) {
    consola.debug(
      `Overriding "directory" from config file with ${argv.directory}`,
    );
  }

  if (gitTagPrefix != null && argv.gitTagPrefix !== gitTagPrefix) {
    consola.debug(
      `Overriding "gitTagPrefix" from config file with ${argv.gitTagPrefix}`,
    );
  }
}
