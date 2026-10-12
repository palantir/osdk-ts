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

import type { GetApplicableConfigurationsRequest as _delegates_api_GetApplicableConfigurationsRequest } from "../__components.js";
import type { GetApplicableConfigurationsResponse as _delegates_api_GetApplicableConfigurationsResponse } from "../__components.js";

/**
 * Gets the applicable configurations for the given function.
 */
export async function getApplicableConfigurations(
  ctx: ConjureContext,
  request: _delegates_api_GetApplicableConfigurationsRequest,
): Promise<_delegates_api_GetApplicableConfigurationsResponse> {
  return conjureFetch(
    ctx,
    `/functions/resources/applicable-configurations`,
    "POST",
    request,
  );
}
