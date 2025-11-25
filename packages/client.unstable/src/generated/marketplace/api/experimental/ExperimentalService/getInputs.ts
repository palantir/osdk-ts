/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type {
  GetInputsRequest as _api_experimental_GetInputsRequest,
  GetInputsResponse as _api_experimental_GetInputsResponse,
} from "../__components.js";

/**
 * Returns an example input mapping that can be sent to the `install` and `upgrade` endpoints. The values of the
 * inputs will be computed based on the source resources.
 */
export async function getInputs(
  ctx: ConjureContext,
  request: _api_experimental_GetInputsRequest,
): Promise<_api_experimental_GetInputsResponse> {
  return conjureFetch(
    ctx,
    `/experimental/installations/get-inputs`,
    "POST",
    request,
  );
}
