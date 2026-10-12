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
import type { UntypedExecuteFunctionBatchInputsRequest as _execution_api_UntypedExecuteFunctionBatchInputsRequest } from "../__components.js";
import type { UntypedExecuteFunctionBatchInputsResponse as _execution_api_UntypedExecuteFunctionBatchInputsResponse } from "../__components.js";

/**
 * Similar to the executeFunctionUntyped endpoint, except that the request allows passing an ordered list of input parameters
 * over which the Function should be executed. Execution results in the response will be returned in the same order
 * as the corresponding input parameters.
 *
 * If any of the executions fail, a single failed result will be returned with the first error that was encountered.
 * Resource limits are applied to the entire batch of executions, not to each execution independently.
 *
 * Currently, this endpoint does not support loading object or object set parameters, and execution will fail if
 * the Function attempts to perform an Object search.
 */
export async function executeFunctionBatchInputsUntyped(
  ctx: ConjureContext,
  functionRid: _execution_api_FunctionRid,
  version: _execution_api_SemanticVersionRange,
  request: _execution_api_UntypedExecuteFunctionBatchInputsRequest,
): Promise<_execution_api_UntypedExecuteFunctionBatchInputsResponse> {
  return conjureFetch(
    ctx,
    `/functions/${functionRid}/versions/${version}/executeBatchInputsUntyped`,
    "POST",
    request,
  );
}
