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

import type { CopyRuntimeConfigurationsRequest as _configuration_api_CopyRuntimeConfigurationsRequest } from "../../../configuration/api/__components.js";
import type { SetRuntimeConfigurationsResponse as _configuration_api_SetRuntimeConfigurationsResponse } from "../../../configuration/api/__components.js";

/**
 * Copies the runtime configuration across versions of the same Function RID. If the source version does not have
 * a configuration set, the target version will not have a configuration set and there will not be an entry in
 * the response object for the function RID and target version. If the source version does not exist as a
 * function, the target version will not have a configuration set and there will not be an entry in the response.
 */
export async function copyRuntimeConfigurations(
  ctx: ConjureContext,
  request: _configuration_api_CopyRuntimeConfigurationsRequest,
): Promise<_configuration_api_SetRuntimeConfigurationsResponse> {
  return conjureFetch(
    ctx,
    `/runtime-configuration/configurations/copy`,
    "POST",
    request,
  );
}
