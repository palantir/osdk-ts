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
import type { UntypedExecuteFunctionRequest as _execution_api_UntypedExecuteFunctionRequest } from "../__components.js";
import type { UntypedExecuteFunctionResponse as _execution_api_UntypedExecuteFunctionResponse } from "../__components.js";

/**
 * Similar to executeFunction endpoint, except that the request and response handle untyped values (see UntypedValue).
 * Can be used when the client doesn't want to incur the overhead of wrapping values in a Value union or doesn't have sufficient library support.
 */
export async function executeFunctionUntyped(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  functionRid: _execution_api_FunctionRid,
  version: _execution_api_SemanticVersionRange,
  request: _execution_api_UntypedExecuteFunctionRequest,
): Promise<_execution_api_UntypedExecuteFunctionResponse> {
  return conjureFetch(
    ctx,
    `/functions/${functionRid}/versions/${version}/executeUntyped`,
    "POST",
    request,
  );
}
