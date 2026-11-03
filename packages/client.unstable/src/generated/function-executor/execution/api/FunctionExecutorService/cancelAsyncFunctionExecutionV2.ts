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

import type { CancelAsyncFunctionExecutionV2Request as _execution_api_CancelAsyncFunctionExecutionV2Request } from "../__components.js";
import type { CancelAsyncFunctionExecutionV2Response as _execution_api_CancelAsyncFunctionExecutionV2Response } from "../__components.js";

/**
 * Cancel a running v2 async execution. This endpoint is idempotent.
 */
export async function cancelAsyncFunctionExecutionV2(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _execution_api_CancelAsyncFunctionExecutionV2Request,
): Promise<_execution_api_CancelAsyncFunctionExecutionV2Response> {
  return conjureFetch(ctx, `/v2/executeAsync/cancel`, "PUT", request);
}
