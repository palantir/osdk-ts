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

import type { TrashEntitiesRequest as _api_modification_TrashEntitiesRequest } from "../../modification/__components.js";
import type { TrashEntitiesResponse as _api_modification_TrashEntitiesResponse } from "../../modification/__components.js";

/**
 * Trash a set of ontology entities. Default-branch-owned entities are staged for review on a newly created
 * branch + proposal (trashed once the proposal is merged); entities owned by a non-default branch are trashed
 * directly in place on that branch. Trashing an entity may also trash or update related entities so the
 * ontology stays valid.
 *
 * Not supported on Edge. The flow depends on cloud-only capabilities that Edge does not have, so supporting it
 * there would first require, at minimum: the Branch Service (to fork the review branch and create the
 * proposal), Compass resource management (to move the corresponding resources to the trash on merge), and the
 * global<->local branch mapping the cloud flow relies on. Until those exist on Edge, trashEntities throws
 * there.
 */
export async function trashEntities(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _api_modification_TrashEntitiesRequest,
): Promise<_api_modification_TrashEntitiesResponse> {
  return conjureFetch(ctx, `/ontology/v2/trash`, "POST", request);
}
