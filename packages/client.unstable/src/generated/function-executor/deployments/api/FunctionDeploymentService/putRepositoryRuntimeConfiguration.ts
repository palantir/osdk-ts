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

import type { ArtifactsRepositoryRid as _deployments_api_ArtifactsRepositoryRid } from "../__components.js";
import type { RepositoryRuntimeConfiguration as _deployments_api_RepositoryRuntimeConfiguration } from "../__components.js";
import type { PutRepositoryRuntimeConfigurationResponse as _deployments_api_PutRepositoryRuntimeConfigurationResponse } from "../__components.js";

/**
 * Sets the runtime configuration for functions in the specified artifacts repository.
 */
export async function putRepositoryRuntimeConfiguration(
  ctx: ConjureContext,
  repositoryRid: _deployments_api_ArtifactsRepositoryRid,
  configuration: _deployments_api_RepositoryRuntimeConfiguration,
): Promise<_deployments_api_PutRepositoryRuntimeConfigurationResponse> {
  return conjureFetch(
    ctx,
    `/deployment/repositories/${repositoryRid}/runtime-configuration`,
    "PUT",
    configuration,
  );
}
