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

import type { LoadInterfaceTypeSchemaMigrationStatusesRequest as _api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesRequest } from "../__components.js";
import type { LoadInterfaceTypeSchemaMigrationStatusesResponse as _api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesResponse } from "../__components.js";

/**
 * Load schema migration statuses for a given InterfaceType. Returns transition-level statuses with
 * aggregate compliance counts, ordered from most recent to least recent. Requires viewer permissions
 * on the InterfaceType. Use loadInterfaceTypeSchemaMigrationObjectTypeCompliance to page through
 * per-object-type compliance details for a specific transition.
 */
export async function loadInterfaceTypeSchemaMigrationStatuses(
  ctx: ConjureContext,
  request: _api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesRequest,
): Promise<_api_schemamigrations_LoadInterfaceTypeSchemaMigrationStatusesResponse> {
  return conjureFetch(
    ctx,
    `/schemamigrations/load/interfacetype/statuses`,
    "PUT",
    request,
  );
}
