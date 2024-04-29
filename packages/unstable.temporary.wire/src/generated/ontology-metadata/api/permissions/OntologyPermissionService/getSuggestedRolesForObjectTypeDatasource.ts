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
import type { ObjectTypeRid } from "../../ObjectTypeRid.js";
import type { GetSuggestedRolesDatasourceResponse } from "../GetSuggestedRolesDatasourceResponse.js";

/**
 * Returns the ids of the principals that are suggested to have the editor or owner role on the ObjectType.
 *
 * The suggestions are based on what operations each principal has on the the backing dataset.
 *
 * The endpoint won't suggest any roles if the ObjectType has more than one backing datasources.
 *
 * This endpoint requires the `ontology:update-entity-roles` operation on the ObjectTypeRid and
 * `ontology:unrestrict-from-datasource` operation on the dataset rid backing the ObjectType.
 */
export async function getSuggestedRolesForObjectTypeDatasource(
  ctx: ConjureContext,
  objectTypeRid: ObjectTypeRid,
): Promise<GetSuggestedRolesDatasourceResponse> {
  return conjureFetch(
    ctx,
    `/permissions/suggestRoles/objectType/${objectTypeRid}/datasource`,
    "GET",
  );
}
