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

import type { LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeRequest as _api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeRequest } from "../__components.js";
import type { LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeResponse as _api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeResponse } from "../__components.js";

/**
 * Load interface type schema migration statuses for a given implementing ObjectType. Returns migration
 * statuses grouped by interface type, including compliance status and migration instructions. Requires
 * viewer permissions on the ObjectType. Interface types the caller does not have permission to view are
 * excluded from the response.
 */
export async function loadInterfaceTypeSchemaMigrationStatusesByImplementingObjectType(
  ctx: ConjureContext,
  request: _api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeRequest,
): Promise<_api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesByImplementingObjectTypeResponse> {
  return conjureFetch(
    ctx,
    `/schemamigrations/load/interfacetype/objecttype/statuses`,
    "PUT",
    request,
  );
}
