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

import { createInternalClientContext, thirdPartyApplications } from "#net";
import { consola } from "consola";
import { colorize } from "consola/utils";
import { loadToken } from "../../../../util/token.js";
import type { VersionListArgs } from "./VersionListArgs.js";

export default async function versionListCommand(
  { foundryUrl, application, token, tokenFile }: VersionListArgs,
) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Fetching versions & deployed version");

  const [versions, deployment] = await Promise.all([
    thirdPartyApplications.listWebsiteVersions(clientCtx, application),
    thirdPartyApplications.getWebsiteDeployment(clientCtx, application),
  ]);

  if (versions.data.length === 0) {
    consola.info("No site versions found");
    return;
  }

  consola.success("Found versions:");

  const semver = await import("semver");
  const sortedVersions = semver.rsort(
    versions.data.map(v => v.version).filter(v => semver.valid(v)),
  );
  for (const version of sortedVersions) {
    consola.log(
      `    - ${version}${
        deployment
          && version === deployment.version
          ? colorize("green", ` (deployed)`)
          : ""
      }`,
    );
  }
}
