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
import type { RemoveAllowlistedFunctionsRequest as _extendedtokenttl_api_RemoveAllowlistedFunctionsRequest } from "../__components.js";
import type { RemoveAllowlistedFunctionsResponse as _extendedtokenttl_api_RemoveAllowlistedFunctionsResponse } from "../__components.js";

/**
 * Removes the supplied functions from the extended token TTL allowlist for the namespace. Idempotent:
 * removing a function that is not present is a no-op. Returns the functions that were actually removed.
 * Users are expected to have `function-executor:write-extended-ttl-allowlist` on the namespaceRid.
 */
export async function removeAllowlistedFunctions(
  ctx: ConjureContext,
  namespaceRid: _extendedtokenttl_api_NamespaceRid,
  request: _extendedtokenttl_api_RemoveAllowlistedFunctionsRequest,
): Promise<_extendedtokenttl_api_RemoveAllowlistedFunctionsResponse> {
  return conjureFetch(
    ctx,
    `/extended-token-ttl/namespaces/${namespaceRid}/allowlisted-functions`,
    "DELETE",
    request,
  );
}
