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
  GetActionTypesForInterfaceTypeRequest
    as _api_GetActionTypesForInterfaceTypeRequest,
  GetActionTypesForInterfaceTypeResponse
    as _api_GetActionTypesForInterfaceTypeResponse,
} from "../__components.js";

/**
 * Gets all the action types that the interface type is associated with. E.g. actions that create an interface
 * object, edit an interface object, or use the interface as a parameter. Also returns actions that are
 * associated with an interface type that the interface type extends.
 */
export async function getActionTypesForInterfaceType(
  ctx: ConjureContext,
  request: _api_GetActionTypesForInterfaceTypeRequest,
): Promise<_api_GetActionTypesForInterfaceTypeResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/actionTypesForInterfaceType`,
    "PUT",
    request,
  );
}
