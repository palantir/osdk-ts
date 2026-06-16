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
import type {
  LoadObjectTypeSchemaMigrationsRequest
    as _api_schemamigrations_LoadObjectTypeSchemaMigrationsRequest,
  LoadObjectTypeSchemaMigrationsResponse
    as _api_schemamigrations_LoadObjectTypeSchemaMigrationsResponse,
} from "../__components.js";

/**
 * Endpoint to page schema migrations for a given ObjectType at a given OntologyVersion. Requires viewer
 * permissions on the ObjectType.
 */
export async function loadObjectTypeSchemaMigrations(
  ctx: ConjureContext,
  request: _api_schemamigrations_LoadObjectTypeSchemaMigrationsRequest,
): Promise<_api_schemamigrations_LoadObjectTypeSchemaMigrationsResponse> {
  return conjureFetch(ctx, `/schemamigrations/load/objecttype`, "PUT", request);
}
