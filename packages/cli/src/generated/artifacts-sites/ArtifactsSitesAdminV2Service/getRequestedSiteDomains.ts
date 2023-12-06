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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { SiteDomainInfo } from "../SiteDomainInfo.js";

/**
 * Get domains that have been requested for a given repository. For control panel domains that require
 * an approval, this will also include pending requests. Closed/rejected requests will only be included as long
 * as their domain hasn't been re-requested for another repository.
 *
 * artifacts:sites:read-deployment-info permission is needed on the repository rid to call this endpoint.
 */
export async function getRequestedSiteDomains(
  ctx: ConjureContext,
  repositoryRid: string,
): Promise<Array<SiteDomainInfo>> {
  return conjureFetch(
    ctx,
    `/sites/v2/admin/repository/${repositoryRid}/domains/requested`,
    "GET",
  );
}
