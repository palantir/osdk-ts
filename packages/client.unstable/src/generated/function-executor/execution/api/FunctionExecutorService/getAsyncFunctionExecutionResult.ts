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

import type { AsyncFunctionExecutionResultRequest as _execution_api_AsyncFunctionExecutionResultRequest } from "../__components.js";
import type { AsyncFunctionExecutionResultResponse as _execution_api_AsyncFunctionExecutionResultResponse } from "../__components.js";

/**
 * Poll for the result of an async function execution.
 *
 * The function RID and version are looked up internally using the executionId.
 *
 * - If execution is still in progress, returns HTTP 202 with empty body
 * - If execution is complete, returns HTTP 200 with the full result
 */
export async function getAsyncFunctionExecutionResult(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _execution_api_AsyncFunctionExecutionResultRequest,
): Promise<_execution_api_AsyncFunctionExecutionResultResponse> {
  return conjureFetch(ctx, `/executeAsync/result`, "POST", request);
}
