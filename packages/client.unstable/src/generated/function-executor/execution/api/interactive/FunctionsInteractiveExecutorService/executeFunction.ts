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

import type { ExecuteFunctionResponse as _runtime_execution_api_ExecuteFunctionResponse } from "../../../../runtime/execution/api/__components.js";
import type { InteractiveExecuteFunctionRequest as _execution_api_interactive_InteractiveExecuteFunctionRequest } from "../__components.js";

/**
 * Executes a function provided interactively by the user.
 * The function is specified by its code files.
 * Input parameters are passed to the function according to the conventions of the specific runtime.
 */
export async function executeFunction(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _execution_api_interactive_InteractiveExecuteFunctionRequest,
): Promise<_runtime_execution_api_ExecuteFunctionResponse> {
  return conjureFetch(ctx, `/functions/interactive/execute`, "POST", request);
}
