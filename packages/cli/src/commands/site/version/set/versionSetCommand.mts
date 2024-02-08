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
  createInternalClientContext,
  thirdPartyApplicationService,
} from "#net";
import { loadToken } from "../../../../util/token.js";
import type { SiteVersionArgs } from "../SiteVersionArgs.js";

export default async function versionSetCommand(
  { version, application, foundryUrl, token, tokenFile }: SiteVersionArgs,
) {
  consola.start(`Setting live version`);
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  const repositoryRid = await thirdPartyApplicationService
    .fetchWebsiteRepositoryRid(clientCtx, application);

  const ctx = createConjureContext(foundryUrl, "/artifacts/api", tokenProvider);
  if (version) {
    await ArtifactsSitesAdminV2Service.updateDeployedVersion(
      ctx,
      repositoryRid,
      { siteVersion: { version } },
    );
  }

  consola.success(`Set live version to ${version}`);
}
