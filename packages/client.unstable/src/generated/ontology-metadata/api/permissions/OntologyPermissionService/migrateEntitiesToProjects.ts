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
  MigrateEntitiesToProjectsRequest
    as _api_permissions_MigrateEntitiesToProjectsRequest,
  MigrateEntitiesToProjectsResponse
    as _api_permissions_MigrateEntitiesToProjectsResponse,
} from "../__components.js";

/**
 * Moves the specified entities to the target folder.
 * - The folder must exist in the same namespace as the ontology.
 * - The user must be owner of the requested entities and have write permissions on the folder.
 * - At most 50 projects per request
 * - At most 2000 entities per project
 */
export async function migrateEntitiesToProjects(
  ctx: ConjureContext,
  request: _api_permissions_MigrateEntitiesToProjectsRequest,
): Promise<_api_permissions_MigrateEntitiesToProjectsResponse> {
  return conjureFetch(
    ctx,
    `/permissions/migrateEntitiesToProjects`,
    "PUT",
    request,
  );
}
