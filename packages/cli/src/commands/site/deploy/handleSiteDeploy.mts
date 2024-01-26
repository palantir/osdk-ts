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

import {
  ArtifactsSitesAdminV2Service,
  createConjureContext,
  thirdPartyApplicationService,
} from "#net";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";

export default async function handleSiteDeploy(
  { siteVersion: version, appRid, baseUrl, clearVersion }: SiteDeployArgs,
) {
  const repositoryRid = await thirdPartyApplicationService
    .fetchWebsiteRepositoryRid(baseUrl, appRid);

  const ctx = createConjureContext(baseUrl, "/artifacts/api");
  if (version) {
    await ArtifactsSitesAdminV2Service.updateDeployedVersion(
      ctx,
      repositoryRid,
      { siteVersion: { version } },
    );
  } else if (clearVersion) {
    await ArtifactsSitesAdminV2Service.clearDeployedVersion(ctx, repositoryRid);
  }

  consola.success("Deploy successful");
}
