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

import type { AsyncExecutionResultRequest as _runtime_execution_api_AsyncExecutionResultRequest } from "../__components.js";
import type { AsyncExecutionResultResponse as _runtime_execution_api_AsyncExecutionResultResponse } from "../__components.js";

/**
 * Poll for the result of an async function execution.
 *
 * Supports optional timeout for long-polling. If timeout is specified, the
 * connection will be held open until execution completes or timeout expires.
 */
export async function getAsyncExecutionResult(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _runtime_execution_api_AsyncExecutionResultRequest,
): Promise<_runtime_execution_api_AsyncExecutionResultResponse> {
  return conjureFetch(ctx, `/functions/runtime/asyncResult`, "POST", request);
}
