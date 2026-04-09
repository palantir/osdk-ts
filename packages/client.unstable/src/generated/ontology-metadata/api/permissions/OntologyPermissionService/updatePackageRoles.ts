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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { OntologyPackageRid as _api_OntologyPackageRid } from "../../__components.js";
import type {
  UpdatePackageRolesRequest as _api_permissions_UpdatePackageRolesRequest,
  UpdatePackageRolesResponse as _api_permissions_UpdatePackageRolesResponse,
} from "../__components.js";

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
  packageRid: _api_OntologyPackageRid,
  request: _api_permissions_UpdatePackageRolesRequest,
): Promise<_api_permissions_UpdatePackageRolesResponse> {
  return conjureFetch(
    ctx,
    `/permissions/packages/${packageRid}/roles`,
    "PUT",
    request,
  );
}
