/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { OntologyPackageRid } from "../../OntologyPackageRid.js";
import type { UpdatePackageRolesRequest } from "../UpdatePackageRolesRequest.js";
import type { UpdatePackageRolesResponse } from "../UpdatePackageRolesResponse.js";

/**
 * Updates the roles on the specified package.
 *
 * Must be a package owned by a compass project.
 *
 * Requires `ontology:discover-package` on the package rid.
 * Requires `ontology:update-ontology-package-roles` on the owning rid corresponding to the package.
 */
export async function updatePackageRoles(
  ctx: ConjureContext,
  packageRid: OntologyPackageRid,
  request: UpdatePackageRolesRequest,
): Promise<UpdatePackageRolesResponse> {
  return conjureFetch(
    ctx,
    `/permissions/packages/${packageRid}/roles`,
    "PUT",
    request,
  );
}
