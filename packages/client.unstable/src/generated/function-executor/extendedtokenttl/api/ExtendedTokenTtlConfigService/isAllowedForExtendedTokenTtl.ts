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

import type { FunctionRid as _execution_api_FunctionRid } from "../../../execution/api/__components.js";
import type { NamespaceRid as _extendedtokenttl_api_NamespaceRid } from "../__components.js";
import type { IsAllowedResponse as _extendedtokenttl_api_IsAllowedResponse } from "../__components.js";

/**
 * Returns whether the given function, its backing repository, or its enclosing project is in the applicable
 * extended token TTL allowlist for the namespace. Called by Function Executor when scoping a token to include
 * extended TTLs.
 */
export async function isAllowedForExtendedTokenTtl(
  ctx: ConjureContext,
  namespaceRid: _extendedtokenttl_api_NamespaceRid,
  functionRid: _execution_api_FunctionRid,
): Promise<_extendedtokenttl_api_IsAllowedResponse> {
  return conjureFetch(
    ctx,
    `/extended-token-ttl/namespaces/${namespaceRid}/allowed/${functionRid}`,
    "GET",
  );
}
