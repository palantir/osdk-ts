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
  GetObjectTypesForTypeGroupsRequest as _api_GetObjectTypesForTypeGroupsRequest,
  GetObjectTypesForTypeGroupsResponse
    as _api_GetObjectTypesForTypeGroupsResponse,
} from "../__components.js";

/**
 * Gets a map of TypeGroupRids to the set of ObjectTypeRids that use the TypeGroup. At most 50 TypeGroupRids
 * can be requested.
 */
export async function getObjectTypesForTypeGroups(
  ctx: ConjureContext,
  request: _api_GetObjectTypesForTypeGroupsRequest,
): Promise<_api_GetObjectTypesForTypeGroupsResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/objectTypesForTypeGroups`,
    "PUT",
    request,
  );
}
