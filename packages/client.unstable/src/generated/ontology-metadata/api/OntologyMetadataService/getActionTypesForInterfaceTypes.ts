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
  GetActionTypesForInterfaceTypesRequest as _api_GetActionTypesForInterfaceTypesRequest,
  GetActionTypesForInterfaceTypesResponse as _api_GetActionTypesForInterfaceTypesResponse,
} from "../__components.js";

/**
 * Gets the action types for multiple interfaces. For each interface, returns the rids of action types that
 * reference the interface or any interface that it extends. At most 50 interfaces can be requested. The response
 * map only includes entries for interfaces that exist and the caller has permission to view. The interfaces
 * must be from the same ontology or an error is thrown.
 *
 * Note: This endpoint is expensive as it loads all action types from the ontology and filters them to those
 * referencing the requested interfaces. For better performance, prefer using search-based APIs once available.
 */
export async function getActionTypesForInterfaceTypes(
  ctx: ConjureContext,
  request: _api_GetActionTypesForInterfaceTypesRequest
): Promise<_api_GetActionTypesForInterfaceTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/actionTypesForInterfaceTypes`,
    "PUT",
    request
  );
}
