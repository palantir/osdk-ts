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

import {
  ArtifactsSitesAdminV2Service,
  createClientContext,
  createConjureContext,
  thirdPartyApplicationService,
} from "#net";
import { consola } from "consola";
import { loadToken } from "../../../../util/token.js";
import type { CommonSiteArgs } from "../../CommonSiteArgs.js";

export default async function versionGetCommand(
  { foundryUrl, application, token, tokenFile }: CommonSiteArgs,
) {
  const loadedToken = await loadToken(token, tokenFile);
  const clientCtx = createClientContext(foundryUrl, loadedToken);
  consola.start("Getting live version");

  const repositoryRid = await thirdPartyApplicationService
    .fetchWebsiteRepositoryRid(clientCtx, application);

  const ctx = createConjureContext(foundryUrl, "/artifacts/api", loadedToken);

  const deployedVersion = await ArtifactsSitesAdminV2Service.getDeployedVersion(
    ctx,
    repositoryRid,
  );

  if (!deployedVersion) {
    consola.info("No live site version set");
  } else {
    consola.success(`Live site version is ${deployedVersion.version}`);
  }
}
