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

import type { SetRuntimeConfigurationsRequest as _configuration_api_SetRuntimeConfigurationsRequest } from "../../../configuration/api/__components.js";
import type { SetRuntimeConfigurationsResponse as _configuration_api_SetRuntimeConfigurationsResponse } from "../../../configuration/api/__components.js";

/**
 * Sets the runtime configuration for the supplied Function RID and versions.
 *
 * User's are expected to have `function-executor:edit-runtime-configuration` on the Function RID, which is
 * granted via a Compass Role expanded from `compass:edit` on the Function's parent RID.
 */
export async function setRuntimeConfigurations(
  ctx: ConjureContext,
  request: _configuration_api_SetRuntimeConfigurationsRequest,
): Promise<_configuration_api_SetRuntimeConfigurationsResponse> {
  return conjureFetch(
    ctx,
    `/runtime-configuration/configurations`,
    "PUT",
    request,
  );
}
