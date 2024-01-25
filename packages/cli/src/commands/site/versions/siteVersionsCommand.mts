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
import { colorize } from "consola/utils";
import {
  artifacts,
  ArtifactsSitesAdminV2Service,
  createConjureContext,
  thirdPartyApplicationService,
} from "../../../net/index.mjs";
import type { CommonSiteArgs } from "../CommonSiteArgs.js";

export default async function siteVersionsCommand(
  { baseUrl, appRid }: CommonSiteArgs,
) {
  consola.start("Fetching versions & deployed version");

  const repositoryRid = await thirdPartyApplicationService
    .fetchWebsiteRepositoryRid(baseUrl, appRid);

  const ctx = createConjureContext(baseUrl, "/artifacts/api");

  const [versions, deployedVersion] = await Promise.all([
    artifacts.SiteAssetArtifactsService.fetchSiteVersions(baseUrl, appRid),
    ArtifactsSitesAdminV2Service.getDeployedVersion(ctx, repositoryRid),
  ]);

  if (versions.length == 0) {
    consola.warn(
      "Successfully connected to server, but no versions were found.",
    );
    return;
  }

  consola.success("Found versions:");
  for (const version of versions) {
    consola.log(
      `    - ${version}${
        deployedVersion
          && version === deployedVersion.version
          ? colorize("green", ` (deployed)`)
          : ""
      }`,
    );
  }
}
