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

import type { GetRuntimeConfigurationsRequest as _configuration_api_GetRuntimeConfigurationsRequest } from "../../../configuration/api/__components.js";
import type { GetRuntimeConfigurationsResponse as _configuration_api_GetRuntimeConfigurationsResponse } from "../../../configuration/api/__components.js";

/**
 * Gets the runtime configuration for the supplied Function RID and versions. Returns either overidden
 * configurations or the default configuration if none is set.
 *
 * This endpoint is expected to return results for all function RID and version pairs in the request, though that
 * does not guarantee that the function RID and version exists.
 */
export async function getRuntimeConfigurations(
  ctx: ConjureContext,
  request: _configuration_api_GetRuntimeConfigurationsRequest,
): Promise<_configuration_api_GetRuntimeConfigurationsResponse> {
  return conjureFetch(
    ctx,
    `/runtime-configuration/configurations`,
    "POST",
    request,
  );
}
