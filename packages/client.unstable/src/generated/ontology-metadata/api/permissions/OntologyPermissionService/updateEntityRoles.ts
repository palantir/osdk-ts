/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import type { UpdateEntityRolesRequest } from "../UpdateEntityRolesRequest.js";
import type { UpdateEntityRolesResponse } from "../UpdateEntityRolesResponse.js";

/**
 * Updates the role grants for an ontology entity. NOTE: If roles are updated on an ObjectType or LinkType, the
 * permissions on these entities will be unrestricted from their datasets.
 * Requires `ontology:update-entity-roles` on the entity and `ontology:unrestrict-from-datasource` on all backing
 * datasets.
 */
export async function updateEntityRoles(
  ctx: ConjureContext,
  updateRequest: UpdateEntityRolesRequest,
): Promise<UpdateEntityRolesResponse> {
  return conjureFetch(
    ctx,
    `/permissions/updateEntityRoles`,
    "POST",
    updateRequest,
  );
}
