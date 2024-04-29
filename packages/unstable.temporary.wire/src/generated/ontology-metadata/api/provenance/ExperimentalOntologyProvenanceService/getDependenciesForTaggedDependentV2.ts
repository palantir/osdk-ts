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
import type { GetDependenciesForTaggedDependentRequestV2 } from "../GetDependenciesForTaggedDependentRequestV2.js";
import type { GetDependenciesForTaggedDependentResponseV2 } from "../GetDependenciesForTaggedDependentResponseV2.js";

/**
 * Endpoint to get the OntologyEntities which the requested tagged dependent depends on. This endpoint supports
 * more flexibility in the request than the previous endpoint.
 *
 * When using this endpoint, it is important to keep the requested entity types the same across page queries.
 * Failure to do so can lead to missed entities.
 *
 * Permissions required:
 * - `ontology:discover-dependent` on the requested dependent.
 * - view on any entities returned in the response (otherwise they will be filtered out)
 */
export async function getDependenciesForTaggedDependentV2(
  ctx: ConjureContext,
  request: GetDependenciesForTaggedDependentRequestV2,
): Promise<GetDependenciesForTaggedDependentResponseV2> {
  return conjureFetch(
    ctx,
    `/provenance/getDependencyForResourceV2`,
    "PUT",
    request,
  );
}
