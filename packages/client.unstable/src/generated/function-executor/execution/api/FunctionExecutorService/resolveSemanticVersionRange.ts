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

import type { FunctionRid as _execution_api_FunctionRid } from "../__components.js";
import type { ResolveVersionForRangeRequest as _execution_api_ResolveVersionForRangeRequest } from "../__components.js";
import type { FunctionVersion as _execution_api_FunctionVersion } from "../__components.js";

/**
 * Returns the resolved version that would be executed for a given semantic version range. Callers should not
 * rely on the resolved version for subsequent executions, as resolution constraints may change.
 */
export async function resolveSemanticVersionRange(
  ctx: ConjureContext,
  functionRid: _execution_api_FunctionRid,
  request: _execution_api_ResolveVersionForRangeRequest,
): Promise<_execution_api_FunctionVersion> {
  return conjureFetch(
    ctx,
    `/functions/${functionRid}/resolveVersionRange`,
    "POST",
    request,
  );
}
