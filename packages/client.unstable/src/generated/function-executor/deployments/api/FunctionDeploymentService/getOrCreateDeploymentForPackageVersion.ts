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

import type { PackageRid as _deployments_api_PackageRid } from "../__components.js";
import type { SemanticVersion as _deployments_api_SemanticVersion } from "../__components.js";
import type { GetOrCreateDeploymentForPackageVersionResponse as _deployments_api_GetOrCreateDeploymentForPackageVersionResponse } from "../__components.js";
export async function getOrCreateDeploymentForPackageVersion(
  ctx: ConjureContext,
  packageRid: _deployments_api_PackageRid,
  semanticVersion: _deployments_api_SemanticVersion,
): Promise<_deployments_api_GetOrCreateDeploymentForPackageVersionResponse> {
  return conjureFetch(
    ctx,
    `/deployment/packages/${packageRid}/version/${semanticVersion}`,
    "PUT",
  );
}
