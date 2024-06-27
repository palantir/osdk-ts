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
import type { BulkLoadObjectTypeSchemaMigrationsRequest } from "../BulkLoadObjectTypeSchemaMigrationsRequest.js";
import type { BulkLoadObjectTypeSchemaMigrationsResponse } from "../BulkLoadObjectTypeSchemaMigrationsResponse.js";

/**
 * Endpoint to bulk load schema migrations for ObjectTypes at a given OntologyVersions. Requires viewer
 * permissions on the ObjectTypes, and will filter out ObjectTypes for which the user does not have the required
 * permissions as well as ObjectTypes that do not exist at the given version.
 * Limited to maximum 50 VersionedObjectTypeRids per call and will throw if the limit is exceeded.
 */
export async function bulkLoadObjectTypeSchemaMigrations(
  ctx: ConjureContext,
  request: BulkLoadObjectTypeSchemaMigrationsRequest,
): Promise<BulkLoadObjectTypeSchemaMigrationsResponse> {
  return conjureFetch(
    ctx,
    `/schemamigrations/load/objecttypes`,
    "PUT",
    request,
  );
}
