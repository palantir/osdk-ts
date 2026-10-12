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
import type { AddPublishReposRequest as _extendedtokenttl_api_AddPublishReposRequest } from "../__components.js";
import type { AddPublishReposResponse as _extendedtokenttl_api_AddPublishReposResponse } from "../__components.js";

/**
 * Adds the supplied repositories to the extended token TTL publishing allowlist for the namespace.
 * Functions can only be configured with extended token TTLs when published from an allowlisted repository.
 * Idempotent: adding a repository already present is a no-op. Returns the repositories that were actually
 * added.
 * Users are expected to have `function-executor:write-extended-ttl-allowlist` on the namespaceRid.
 */
export async function addPublishRepos(
  ctx: ConjureContext,
  namespaceRid: _extendedtokenttl_api_NamespaceRid,
  request: _extendedtokenttl_api_AddPublishReposRequest,
): Promise<_extendedtokenttl_api_AddPublishReposResponse> {
  return conjureFetch(
    ctx,
    `/extended-token-ttl/namespaces/${namespaceRid}/publish-repos`,
    "POST",
    request,
  );
}
