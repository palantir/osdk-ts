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
import type { LoadPatchableEntitiesRequest } from "../LoadPatchableEntitiesRequest.js";
import type { LoadPatchableEntitiesResponse } from "../LoadPatchableEntitiesResponse.js";

/**
 * Executes a "full" load of objects and many-to-many links for patching workflows.
 *
 * Entities will be loaded in "full", with both visible and invisible to the onBehalfOf user properties, as well
 * as all necessary metadata properties necessary for patching workflows in Funnel. Thus, care must be taken
 * to never show this entity to the user, as it is loaded without any permission checks. Only the 'actions'
 * service user is allowed to use this API.
 *
 * The API can result in the following errors:
 * - NonHighburyEntitiesNotPatchable
 * - UnknownEntityTypeRids
 * - UnknownPropertyTypeRids
 * - PropertyTypeRidsNotPrimaryKey
 * - MaxRequestLocatorsExceeded
 * - CallerUnauthorized
 */
export async function loadPatchableEntities(
  ctx: ConjureContext,
  onBehalfOf: string,
  request: LoadPatchableEntitiesRequest,
): Promise<LoadPatchableEntitiesResponse> {
  return conjureFetch(ctx, `/internal/loadPatchableEntities`, "POST", request);
}
