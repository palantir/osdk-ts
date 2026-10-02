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

import type { FunctionRid as _execution_api_FunctionRid } from "../../../execution/api/__components.js";
import type { CreateOrUpdateDeploymentForFunctionRequest as _deployments_api_CreateOrUpdateDeploymentForFunctionRequest } from "../__components.js";
import type { CreateOrUpdateDeploymentResponse as _deployments_api_CreateOrUpdateDeploymentResponse } from "../__components.js";

/**
 * Creates the deployment for the specified function at the
 * specified package version.
 *
 * The deployment is shared by all functions packaged in the same
 * deployable artifact.
 *
 * This endpoint will throw if a deployment already exists for any
 * function in the same artifact.
 */
export async function createOrUpdateDeploymentForFunction(
  ctx: ConjureContext,
  functionRid: _execution_api_FunctionRid,
  request: _deployments_api_CreateOrUpdateDeploymentForFunctionRequest,
): Promise<_deployments_api_CreateOrUpdateDeploymentResponse> {
  return conjureFetch(
    ctx,
    `/deployment/functions/${functionRid}/deployment`,
    "PUT",
    request,
  );
}
