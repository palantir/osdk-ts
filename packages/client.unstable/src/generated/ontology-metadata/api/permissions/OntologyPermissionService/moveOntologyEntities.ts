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

import { conjureFetch, type ConjureContext } from "conjure-lite";

import type { MoveOntologyEntitiesRequest as _api_permissions_MoveOntologyEntitiesRequest } from "../__components.js";
import type { MoveOntologyEntitiesResponse as _api_permissions_MoveOntologyEntitiesResponse } from "../__components.js";

/**
 * Moves ontology entities with the public project permission model in Compass.
 *
 * Requires edit permission on every entity in the request as a basic permissions check. Further auth checks are
 * expected to be done by Compass itself when moving entities. In addition, we validate that:
 * - Every rid in the request is an ObjectType, LinkType, ActionType, SharedPropertyType, or InterfaceType rid.
 * - All entities that exist in the default ontology at the latest ontology version use the public project
 * permission model.
 * - The default ontology is registered under the Compass services namespace.
 *
 * Entities that do not exist in the default ontology at the latest ontology version are not moved and are
 * reported as failures in the response.
 *
 * Entities that target the same location will be moved all together or not at all. The response will indicate
 * which entities succeeded in moving and which failed to move.
 */
export async function moveOntologyEntities(
  ctx: ConjureContext,
  request: _api_permissions_MoveOntologyEntitiesRequest,
): Promise<_api_permissions_MoveOntologyEntitiesResponse> {
  return conjureFetch(
    ctx,
    `/permissions/moveOntologyEntities`,
    "POST",
    request,
  );
}
