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

import type { ReportAsyncExecutionCompletionRequest as _execution_api_ReportAsyncExecutionCompletionRequest } from "../__components.js";
import type { ReportAsyncExecutionCompletionResponse as _execution_api_ReportAsyncExecutionCompletionResponse } from "../__components.js";

/**
 * Internal callback for async executor backends to report terminal execution telemetry.
 *
 * This endpoint records telemetry for a completed async execution, such as terminal success/failure request
 * logs and duration metrics emitted under the function RID and resolved version. It does not store the async
 * execution result and is not read by getAsyncFunctionExecutionResult polling; the backend executor remains
 * responsible for persisting and serving the result. Calling this endpoint does not mark the async execution
 * complete, and an async execution can complete even if this best-effort telemetry callback is never called.
 */
export async function reportAsyncExecutionCompletion(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _execution_api_ReportAsyncExecutionCompletionRequest,
): Promise<_execution_api_ReportAsyncExecutionCompletionResponse> {
  return conjureFetch(ctx, `/executeAsync/completion`, "POST", request);
}
