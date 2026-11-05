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
import type { ExtendedTokenTtlSettings as _extendedtokenttl_api_ExtendedTokenTtlSettings } from "../__components.js";

/**
 * Returns all extended token TTL allowlists for the given namespace. Used by control panel to display
 * current settings.
 * Users are expected to have `function-executor:read-extended-ttl-allowlist` on the namespaceRid.
 */
export async function getSettings(
  ctx: ConjureContext,
  namespaceRid: _extendedtokenttl_api_NamespaceRid,
): Promise<_extendedtokenttl_api_ExtendedTokenTtlSettings> {
  return conjureFetch(
    ctx,
    `/extended-token-ttl/namespaces/${namespaceRid}/settings`,
    "GET",
  );
}
