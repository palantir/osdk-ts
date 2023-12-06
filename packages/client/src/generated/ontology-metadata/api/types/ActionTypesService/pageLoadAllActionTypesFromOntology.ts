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
import type { LoadAllActionTypesPageRequest } from "../../LoadAllActionTypesPageRequest.js";
import type { LoadAllActionTypesPageResponse } from "../../LoadAllActionTypesPageResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
import type { OntologyVersion } from "../../OntologyVersion.js";

/**
 * Endpoint to load a paged collection of all ActionTypes visible to the user from the specified Ontology and
 * OntologyVersion. The maximum number of ActionTypes returned in a page is capped at 500.
 */
export async function pageLoadAllActionTypesFromOntology(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  ontologyVersion: OntologyVersion,
  request: LoadAllActionTypesPageRequest,
): Promise<LoadAllActionTypesPageResponse> {
  return conjureFetch(
    ctx,
    `/actions/types/load/all/${ontologyRid}/${ontologyVersion}`,
    "POST",
    request,
  );
}
