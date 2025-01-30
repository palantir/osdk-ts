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
import type { GetEditorsForObjectTypeRequest } from "../GetEditorsForObjectTypeRequest.js";
import type { GetEditorsForObjectTypeResponse } from "../GetEditorsForObjectTypeResponse.js";

/**
 * Returns the ids of the users who have the editor or owner role on the given ObjectType. Or, in the case of
 * restricted ObjectTypes, the users who additionally are editors or owners of the backing dataset(E).
 *
 * If the requested object type does not exist, an `ObjectTypeRidsNotFound` exception will be thrown.
 *
 * This endpoint requires the `ontology:admin-get-ontology-entity-editors` permission on OMS's root node.
 */
export async function getEditorsForObjectType(
  ctx: ConjureContext,
  request: GetEditorsForObjectTypeRequest,
): Promise<GetEditorsForObjectTypeResponse> {
  return conjureFetch(
    ctx,
    `/permissions/getEditorsForObjectType`,
    "POST",
    request,
  );
}
