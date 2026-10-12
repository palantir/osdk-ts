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

import type { ExecuteFunctionRequest as _runtime_execution_api_ExecuteFunctionRequest } from "../__components.js";
import type { ExecuteFunctionAsyncResponse as _runtime_execution_api_ExecuteFunctionAsyncResponse } from "../__components.js";

/**
 * Execute a function asynchronously. Returns an execution ID for polling results.
 *
 * The runtime accepts the execution request and returns immediately with an execution ID.
 * The caller should poll getAsyncExecutionResult to check progress and retrieve results.
 */
export async function executeFunctionAsync(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _runtime_execution_api_ExecuteFunctionRequest,
): Promise<_runtime_execution_api_ExecuteFunctionAsyncResponse> {
  return conjureFetch(ctx, `/functions/runtime/executeAsync`, "POST", request);
}
