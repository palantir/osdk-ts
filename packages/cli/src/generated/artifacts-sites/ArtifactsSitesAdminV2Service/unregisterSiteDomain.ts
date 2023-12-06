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
import type { UnregisterDomainRequest } from "../UnregisterDomainRequest.js";

/**
 * Unregisters a domain from a repository, visiting the domain will no longer serve the repository assets.
 *
 * Depending on how the domain for the repository was setup, this might also result in deleting the domain
 * itself.
 *
 * artifacts:sites:manage-domains permission is needed on the repository rid to call this endpoint.
 */
export async function unregisterSiteDomain(
  ctx: ConjureContext,
  repositoryRid: string,
  request: UnregisterDomainRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/sites/v2/admin/repository/${repositoryRid}/domains/unregister`,
    "POST",
    request,
  );
}
