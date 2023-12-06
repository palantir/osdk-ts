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
import type { GetActionTypesForObjectTypeRequest } from "../GetActionTypesForObjectTypeRequest.js";
import type { GetActionTypesForObjectTypeResponse } from "../GetActionTypesForObjectTypeResponse.js";

/**
 * Gets all the action types that the object types are associated with. E.g. actions that create an object, edit
 * an object, or use the object as a parameter.
 */
export async function getActionTypesForObjectType(
  ctx: ConjureContext,
  request: GetActionTypesForObjectTypeRequest,
): Promise<GetActionTypesForObjectTypeResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/actionTypesForObjectType`,
    "PUT",
    request,
  );
}
