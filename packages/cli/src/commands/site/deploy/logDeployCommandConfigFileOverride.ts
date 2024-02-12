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

import { consola } from "consola";
import type { Arguments } from "yargs";
import type { SiteConfig } from "../../../util/config.js";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";

export async function logDeployCommandConfigFileOverride(
  args: Arguments<SiteDeployArgs>,
  config: SiteConfig | undefined,
) {
  if (
    config?.autoVersion != null && args.autoVersion !== config?.autoVersion.type
  ) {
    consola.debug(
      `Overriding "autoVersion" from config file with ${args.autoVersion}`,
    );
  }

  if (config?.directory != null && args.directory !== config?.directory) {
    consola.debug(
      `Overriding "directory" from config file with ${args.directory}`,
    );
  }

  if (
    config?.autoVersion?.tagPrefix != null
    && args.gitTagPrefix != null
    && args.gitTagPrefix !== config?.autoVersion.tagPrefix
  ) {
    consola.debug(
      `Overriding "gitTagPrefix" from config file with ${args.gitTagPrefix}`,
    );
  }
}
