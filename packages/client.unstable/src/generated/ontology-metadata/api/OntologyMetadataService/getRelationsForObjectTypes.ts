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
import type { GetRelationsForObjectTypesRequest } from "../GetRelationsForObjectTypesRequest.js";
import type { GetRelationsForObjectTypesResponse } from "../GetRelationsForObjectTypesResponse.js";

/**
 * Endpoint to batch load relations associated to given objectTypeIds. The GetRelationsForObjectTypesResponse
 * will only contain relations that are visible to the user. If the user has requested to get relations at
 * invalid ontology versions or for objectTypeIds that do not exist in the specified versions, those entries
 * will include an empty set of relations.
 */
export async function getRelationsForObjectTypes(
  ctx: ConjureContext,
  request: GetRelationsForObjectTypesRequest,
): Promise<GetRelationsForObjectTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/relationsForObjectTypes`,
    "POST",
    request,
  );
}
