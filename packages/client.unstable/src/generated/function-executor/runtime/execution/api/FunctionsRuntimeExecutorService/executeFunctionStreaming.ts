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
import type { ExecuteFunctionStreamingResponse as _runtime_execution_api_ExecuteFunctionStreamingResponse } from "../__components.js";

/**
 * This endpoint returns the output of a function in a binary streaming format. The output is divided into
 * chunks, each wrapped in an `ExecuteFunctionResponse` object. Each chunk is approximately 1500 bytes in size.
 * The client should deserialize the stream into `ExecuteFunctionResponse` objects to reconstruct the
 * complete output item objects in `executionResult`.
 */
export async function executeFunctionStreaming(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _runtime_execution_api_ExecuteFunctionRequest,
): Promise<_runtime_execution_api_ExecuteFunctionStreamingResponse> {
  return conjureFetch(
    ctx,
    `/functions/runtime/executeStreaming`,
    "POST",
    request,
  );
}
