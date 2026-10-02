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

import type { CancelAsyncExecutionRequest as _runtime_execution_api_CancelAsyncExecutionRequest } from "../__components.js";
import type { CancelAsyncExecutionResponse as _runtime_execution_api_CancelAsyncExecutionResponse } from "../__components.js";

/**
 * Cancel a running async execution.
 *
 * The runtime will attempt to stop the execution. This is a best-effort
 * operation - the execution may have already completed or may not be
 * cancellable.
 */
export async function cancelAsyncExecution(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _runtime_execution_api_CancelAsyncExecutionRequest,
): Promise<_runtime_execution_api_CancelAsyncExecutionResponse> {
  return conjureFetch(ctx, `/functions/runtime/cancelAsync`, "POST", request);
}
