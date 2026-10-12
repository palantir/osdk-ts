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
import type { SemanticVersionRange as _execution_api_SemanticVersionRange } from "../__components.js";
import type { ExecuteFunctionRequest as _execution_api_ExecuteFunctionRequest } from "../__components.js";
import type { ExecuteFunctionAsyncResponse as _execution_api_ExecuteFunctionAsyncResponse } from "../__components.js";

/**
 * Asynchronously execute a function. Note that this is a beta endpoint and should not be used in production.
 * Clients should expect breaking changes, and not all remote executors are guaranteed to implement this endpoint.
 * Clients are expected to poll the status of the execution using the returned execution ID. Likewise, remote backends
 * are expected to return an ID on submission and provide endpoints to poll that execution's status.
 */
export async function executeFunctionAsync(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  upstreamServiceUser: string | null | undefined,
  functionRid: _execution_api_FunctionRid,
  version: _execution_api_SemanticVersionRange,
  request: _execution_api_ExecuteFunctionRequest,
): Promise<_execution_api_ExecuteFunctionAsyncResponse> {
  return conjureFetch(
    ctx,
    `/functions/${functionRid}/versions/${version}/executeAsync`,
    "POST",
    request,
  );
}
