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

import type { DeploymentRid as _deployments_api_DeploymentRid } from "../__components.js";
import type { UpdateDeploymentConfigurationV2Request as _deployments_api_UpdateDeploymentConfigurationV2Request } from "../__components.js";
import type { UpdateDeploymentConfigurationV2Response as _deployments_api_UpdateDeploymentConfigurationV2Response } from "../__components.js";

/**
 * Update mutable configuration values of a deployment (resources and scaling).
 */
export async function updateDeploymentConfigurationV2(
  ctx: ConjureContext,
  deploymentRid: _deployments_api_DeploymentRid,
  request: _deployments_api_UpdateDeploymentConfigurationV2Request,
): Promise<_deployments_api_UpdateDeploymentConfigurationV2Response> {
  return conjureFetch(
    ctx,
    `/deployment/deployments/${deploymentRid}/configurationV2`,
    "PUT",
    request,
  );
}
