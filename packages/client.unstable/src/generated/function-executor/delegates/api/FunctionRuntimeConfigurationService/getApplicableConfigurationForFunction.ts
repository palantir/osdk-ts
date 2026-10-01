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

import type { GetApplicableConfigurationResponse as _configuration_api_GetApplicableConfigurationResponse } from "../../../configuration/api/__components.js";
import type { FunctionRid as _execution_api_FunctionRid } from "../../../execution/api/__components.js";
import type { FunctionVersion as _execution_api_FunctionVersion } from "../../../execution/api/__components.js";

/**
 * Gets the applicable configurations for the given Function RID and version. This endpoint is expected to be
 * used to inform consumers which resource types are applicable, given the  Function RID and version's relevant
 * execution service.
 */
export async function getApplicableConfigurationForFunction(
  ctx: ConjureContext,
  functionRid: _execution_api_FunctionRid,
  functionVersion: _execution_api_FunctionVersion,
): Promise<_configuration_api_GetApplicableConfigurationResponse> {
  return conjureFetch(
    ctx,
    `/runtime-configuration/functions/${functionRid}/versions/${functionVersion}/applicable-configuration`,
    "GET",
  );
}
