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
import type { ExecuteFunctionAsyncV2Response as _execution_api_ExecuteFunctionAsyncV2Response } from "../__components.js";

/**
 * Asynchronously execute a function using the v2 stateless async execution API. Note that this is a beta
 * endpoint and should not be used in production.
 *
 * Clients should poll the status of the execution using the returned executionId. The identifier is
 * opaque and must be passed back exactly as received.
 */
export async function executeFunctionAsyncV2(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  upstreamServiceUser: string | null | undefined,
  functionRid: _execution_api_FunctionRid,
  version: _execution_api_SemanticVersionRange,
  request: _execution_api_ExecuteFunctionRequest,
): Promise<_execution_api_ExecuteFunctionAsyncV2Response> {
  return conjureFetch(
    ctx,
    `/v2/functions/${functionRid}/versions/${version}/executeAsync`,
    "POST",
    request,
  );
}
