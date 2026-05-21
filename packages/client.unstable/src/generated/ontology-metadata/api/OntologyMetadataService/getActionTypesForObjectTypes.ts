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
  GetActionTypesForObjectTypesRequest
    as _api_GetActionTypesForObjectTypesRequest,
  GetActionTypesForObjectTypesResponse
    as _api_GetActionTypesForObjectTypesResponse,
} from "../__components.js";

/**
 * Gets the action types for multiple object types. For each object type, returns the rids of action types
 * that reference the object type or any interface type that the object type implements. At most 50 object
 * types can be requested. The response map only includes entries for object types that exist and the caller
 * has permission to view. The object types must be from the same ontology or an error is thrown.
 *
 * Note: This endpoint is expensive as it loads all action types from the ontology and filters them to those
 * referencing the requested object types. For better performance, prefer using search-based APIs once available.
 */
export async function getActionTypesForObjectTypes(
  ctx: ConjureContext,
  request: _api_GetActionTypesForObjectTypesRequest,
): Promise<_api_GetActionTypesForObjectTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/actionTypesForObjectTypes`,
    "PUT",
    request,
  );
}
