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
import type { LinkTypeRid } from "../../LinkTypeRid.js";
import type { GetSuggestedRolesDatasourceResponse } from "../GetSuggestedRolesDatasourceResponse.js";

/**
 * Returns the ids of the principals that are suggested to have the editor or owner role on the many to many link type.
 *
 * The suggestions are based on what operations each principal has on the the backing dataset.
 *
 * If the requested link type already has roles applied, `RolesAreAlreadyAppliedToEntity` will be thrown.
 *
 * This endpoint requires the `ontology:update-entity-roles` operation on the LinkTypeRid and
 * `ontology:unrestrict-from-datasource` operation on the dataset rid backing the LinkTypeRid.
 */
export async function getSuggestedRolesForManyToManyLinkTypeDatasource(
  ctx: ConjureContext,
  linkTypeRid: LinkTypeRid,
): Promise<GetSuggestedRolesDatasourceResponse> {
  return conjureFetch(
    ctx,
    `/permissions/suggestRoles/linkType/${linkTypeRid}/datasource`,
    "GET",
  );
}
