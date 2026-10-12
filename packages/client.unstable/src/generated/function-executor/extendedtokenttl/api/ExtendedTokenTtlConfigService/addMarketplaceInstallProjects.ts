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
import type { AddMarketplaceInstallProjectsRequest as _extendedtokenttl_api_AddMarketplaceInstallProjectsRequest } from "../__components.js";
import type { AddMarketplaceInstallProjectsResponse as _extendedtokenttl_api_AddMarketplaceInstallProjectsResponse } from "../__components.js";

/**
 * Adds the supplied projects to the marketplace install extended token TTL allowlist for the namespace.
 * Functions with extended token TTLs can only be marketplace installed into allowlisted projects.
 * Idempotent: adding a project already present is a no-op. Returns the projects that were actually added.
 * Users are expected to have `function-executor:write-extended-ttl-allowlist` on the namespaceRid.
 */
export async function addMarketplaceInstallProjects(
  ctx: ConjureContext,
  namespaceRid: _extendedtokenttl_api_NamespaceRid,
  request: _extendedtokenttl_api_AddMarketplaceInstallProjectsRequest,
): Promise<_extendedtokenttl_api_AddMarketplaceInstallProjectsResponse> {
  return conjureFetch(
    ctx,
    `/extended-token-ttl/namespaces/${namespaceRid}/marketplace-install-projects`,
    "POST",
    request,
  );
}
