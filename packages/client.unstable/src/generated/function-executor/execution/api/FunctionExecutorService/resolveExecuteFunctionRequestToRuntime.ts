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
import type { FunctionVersion as _execution_api_FunctionVersion } from "../__components.js";
import type { ResolveExecuteFunctionRequestToRuntimeRequest as _execution_api_ResolveExecuteFunctionRequestToRuntimeRequest } from "../__components.js";
import type { ResolveExecuteFunctionRequestToRuntimeResponse as _execution_api_ResolveExecuteFunctionRequestToRuntimeResponse } from "../__components.js";

/**
 * Returns the resolved ExecuteFunctionRequest from the function-executor runtime API that
 * would have been passed to the downstream executor had the function been executed. Throws if the
 * provided function doesn't support the function-executor runtime API.
 *
 * Currently, this endpoint can only be called by service users that have the
 * function-executor:resolve-request-to-runtime operation. Please speak with the functions team
 * before using this endpoint.
 */
export async function resolveExecuteFunctionRequestToRuntime(
  ctx: ConjureContext,
  onBehalfOf: string,
  functionRid: _execution_api_FunctionRid,
  version: _execution_api_FunctionVersion,
  request: _execution_api_ResolveExecuteFunctionRequestToRuntimeRequest,
): Promise<_execution_api_ResolveExecuteFunctionRequestToRuntimeResponse> {
  return conjureFetch(
    ctx,
    `/functions/${functionRid}/versions/${version}/runtime/executeFunctionRequest`,
    "POST",
    request,
  );
}
