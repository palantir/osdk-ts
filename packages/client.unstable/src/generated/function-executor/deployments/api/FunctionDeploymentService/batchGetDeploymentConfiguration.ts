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

import type { BatchGetDeploymentConfigurationRequest as _deployments_api_BatchGetDeploymentConfigurationRequest } from "../__components.js";
import type { BatchGetDeploymentConfigurationResponse as _deployments_api_BatchGetDeploymentConfigurationResponse } from "../__components.js";

/**
 * Retrieves the configuration for the specified deployments.
 */
export async function batchGetDeploymentConfiguration(
  ctx: ConjureContext,
  request: _deployments_api_BatchGetDeploymentConfigurationRequest,
): Promise<_deployments_api_BatchGetDeploymentConfigurationResponse> {
  return conjureFetch(
    ctx,
    `/deployment/batch/deployments/configuration`,
    "POST",
    request,
  );
}
