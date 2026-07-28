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
  GetEntityProjectsMigrationStatusRequest as _api_permissions_GetEntityProjectsMigrationStatusRequest,
  GetEntityProjectsMigrationStatusResponse as _api_permissions_GetEntityProjectsMigrationStatusResponse,
} from "../__components.js";

/**
 * Returns the public-project migration status of a single entity, read from the migration store. The FE
 * uses this to surface stuck or failed migrations so the user can resolve them.
 */
export async function getEntityProjectsMigrationStatus(
  ctx: ConjureContext,
  request: _api_permissions_GetEntityProjectsMigrationStatusRequest
): Promise<_api_permissions_GetEntityProjectsMigrationStatusResponse> {
  return conjureFetch(
    ctx,
    `/permissions/entityProjectsMigrationStatus`,
    "PUT",
    request
  );
}
