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

import type { InferOutputTypeRequest as _execution_api_interactive_InferOutputTypeRequest } from "../__components.js";
import type { InferOutputTypeResponse as _execution_api_interactive_InferOutputTypeResponse } from "../__components.js";

/**
 * Statically analyzes a TypeScript function to infer its return type without executing it.
 * Used during semantics validation to provide early feedback on type compatibility.
 * Requires an index.ts file with a default exported function.
 */
export async function inferOutputType(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _execution_api_interactive_InferOutputTypeRequest,
): Promise<_execution_api_interactive_InferOutputTypeResponse> {
  return conjureFetch(
    ctx,
    `/functions/interactive/inferOutputType`,
    "POST",
    request,
  );
}
