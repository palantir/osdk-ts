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

import type { LoadInterfaceTypeSchemaMigrationObjectTypeComplianceRequest as _api_schemamigrations_LoadInterfaceTypeSchemaMigrationObjectTypeComplianceRequest } from "../__components.js";
import type { LoadInterfaceTypeSchemaMigrationObjectTypeComplianceResponse as _api_schemamigrations_LoadInterfaceTypeSchemaMigrationObjectTypeComplianceResponse } from "../__components.js";

/**
 * Load per-object-type compliance details for a specific interface type schema migration transition.
 * Requires viewer permissions on the InterfaceType. Object types the caller does not have permission
 * to view are filtered from the response.
 */
export async function loadInterfaceTypeSchemaMigrationObjectTypeCompliance(
  ctx: ConjureContext,
  request: _api_schemamigrations_LoadInterfaceTypeSchemaMigrationObjectTypeComplianceRequest,
): Promise<_api_schemamigrations_LoadInterfaceTypeSchemaMigrationObjectTypeComplianceResponse> {
  return conjureFetch(
    ctx,
    `/schemamigrations/load/interfacetype/implementingobjecttypecompliance`,
    "PUT",
    request,
  );
}
