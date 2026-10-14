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

import type { BulkRevertPublicProjectEntitiesRequest as _api_permissions_BulkRevertPublicProjectEntitiesRequest } from "../__components.js";
import type { BulkRevertPublicProjectEntitiesResponse as _api_permissions_BulkRevertPublicProjectEntitiesResponse } from "../__components.js";

/**
 * Reverts the permission model for up to 50 public-project based entities. Each entity is validated and
 * processed independently, similarly to /revertPublicProjectEntity. Returns a response containing the set of
 * entity rids that were successfully reverted and the set of entity rids that could not be reverted along with
 * their corresponding error types and messages. If reverting to roles, will apply the requesting user as an
 * owner of successfully migrated resources. Typed conjure exceptions are returned per entity and do not stop
 * the remaining entities from being processed. Other failures are propagated to the caller without rolling
 * back already processed entities.
 *
 * Checks that the calling user has declassify permissions on all non-organization markings.
 * **Will declassify all MANDATORY and CBAC markings on the entity being reverted.**
 */
export async function bulkRevertPublicProjectEntities(
  ctx: ConjureContext,
  request: _api_permissions_BulkRevertPublicProjectEntitiesRequest,
): Promise<_api_permissions_BulkRevertPublicProjectEntitiesResponse> {
  return conjureFetch(
    ctx,
    `/permissions/bulkRevertPublicProjectEntities`,
    "POST",
    request,
  );
}
