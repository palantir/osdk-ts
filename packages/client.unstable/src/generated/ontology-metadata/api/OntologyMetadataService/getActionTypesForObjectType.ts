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
  GetActionTypesForObjectTypeRequest as _api_GetActionTypesForObjectTypeRequest,
  GetActionTypesForObjectTypeResponse
    as _api_GetActionTypesForObjectTypeResponse,
} from "../__components.js";

/**
 * Gets all the action types that the object type is associated with. E.g. actions that create an object, edit
 * an object, or use the object as a parameter. Also returns actions that are associated with an interface type
 * that the object type implements.
 */
export async function getActionTypesForObjectType(
  ctx: ConjureContext,
  request: _api_GetActionTypesForObjectTypeRequest,
): Promise<_api_GetActionTypesForObjectTypeResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/actionTypesForObjectType`,
    "PUT",
    request,
  );
}
