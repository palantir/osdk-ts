/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/**/
import { conjureFetch, type ConjureContext } from "conjure-lite";

import type { NamespaceRid as _extendedtokenttl_api_NamespaceRid } from "../__components.js";
import type { RemoveMarketplaceInstallProjectsRequest as _extendedtokenttl_api_RemoveMarketplaceInstallProjectsRequest } from "../__components.js";
import type { RemoveMarketplaceInstallProjectsResponse as _extendedtokenttl_api_RemoveMarketplaceInstallProjectsResponse } from "../__components.js";

/**
 * Removes the supplied projects from the marketplace install extended token TTL allowlist for the
 * namespace. Idempotent: removing a project not present is a no-op. Returns the projects that were
 * actually removed.
 * Users are expected to have `function-executor:write-extended-ttl-allowlist` on the namespaceRid.
 */
export async function removeMarketplaceInstallProjects(
  ctx: ConjureContext,
  namespaceRid: _extendedtokenttl_api_NamespaceRid,
  request: _extendedtokenttl_api_RemoveMarketplaceInstallProjectsRequest,
): Promise<_extendedtokenttl_api_RemoveMarketplaceInstallProjectsResponse> {
  return conjureFetch(
    ctx,
    `/extended-token-ttl/namespaces/${namespaceRid}/marketplace-install-projects`,
    "DELETE",
    request,
  );
}
