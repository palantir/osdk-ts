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

import { ExitProcessError } from "@osdk/cli.common";
import { consola } from "consola";
import { createFetch } from "../createFetch.mjs";
import type { InternalClientContext } from "../internalClientContext.mjs";
import type { RepositoryRid } from "../RepositoryRid.js";
import type { ThirdPartyAppRid } from "../ThirdPartyAppRid.js";

export async function fetchWebsiteRepositoryRid(
  ctx: InternalClientContext,
  thirdPartyAppRid: ThirdPartyAppRid,
): Promise<RepositoryRid> {
  const fetch = createFetch(ctx.tokenProvider);
  const url = `
    ${ctx.foundryUrl}/third-party-application-service/api/application-websites/${thirdPartyAppRid}`;

  const result = await fetch(url);
  if (result.status >= 200 && result.status < 300) {
    const repositoryRid = await result.json();
    consola.debug(`Repository RID: ${repositoryRid}`);
    return repositoryRid;
  }
  throw new ExitProcessError(
    result.status,
    `Unexpected response code ${result.status} (${result.statusText})`,
  );
}
