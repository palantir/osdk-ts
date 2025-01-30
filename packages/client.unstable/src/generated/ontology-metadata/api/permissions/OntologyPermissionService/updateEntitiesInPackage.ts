/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import type { UpdateEntitiesInPackageRequest } from "../UpdateEntitiesInPackageRequest.js";
import type { UpdateEntitiesInPackageResponse } from "../UpdateEntitiesInPackageResponse.js";

/**
 * Adds or removes entities to/from the specified package.
 *
 * Note that for ObjectTypes, LinkTypes and ActionTypes that are not yet using roles, this will throw an error.
 *
 * All entities must belong to the same ontology.
 *
 * The requested package must have been created in the same ontology as the entities to add/remove.
 *
 * Requires `ontology:move-into-package` on the owning rid corresponding to the package.
 * Requires `ontology:update-entity-roles` on the entity rid.
 */
export async function updateEntitiesInPackage(
  ctx: ConjureContext,
  packageRid: OntologyPackageRid,
  request: UpdateEntitiesInPackageRequest,
): Promise<UpdateEntitiesInPackageResponse> {
  return conjureFetch(
    ctx,
    `/permissions/packages/${packageRid}`,
    "PUT",
    request,
  );
}
