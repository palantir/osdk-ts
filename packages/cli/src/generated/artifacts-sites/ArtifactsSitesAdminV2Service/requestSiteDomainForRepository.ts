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
import type { SubmitDomainRegistrationRequest } from "../SubmitDomainRegistrationRequest.js";

/**
 * Requests the registration of a domain with the provided repository, this will result in an approvals task
 * getting created for approval by an admin.
 *
 * Once the task has been approved, visiting the domain will serve the deployed version, if any is deployed.
 *
 * artifacts:sites:manage-domains permission is needed on the repository rid to call this endpoint.
 */
export async function requestSiteDomainForRepository(
  ctx: ConjureContext,
  repositoryRid: string,
  request: SubmitDomainRegistrationRequest,
): Promise<SiteDomainInfo> {
  return conjureFetch(
    ctx,
    `/sites/v2/admin/repository/${repositoryRid}/domains/submit-registration`,
    "POST",
    request,
  );
}
