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
import type { LoadAllSharedPropertyTypesPageRequest } from "../LoadAllSharedPropertyTypesPageRequest.js";
import type { LoadAllSharedPropertyTypesPageResponse } from "../LoadAllSharedPropertyTypesPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";

/**
 * Endpoint to load a paged collection of all SharedPropertyTypes visible to the user from the specified Ontology and
 * OntologyVersion. The maximum number of SharedPropertyTypes returned in a page is capped at 100.
 */
export async function loadAllSharedPropertyTypesFromOntology(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  ontologyVersion: OntologyVersion,
  request: LoadAllSharedPropertyTypesPageRequest,
): Promise<LoadAllSharedPropertyTypesPageResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/${ontologyRid}/${ontologyVersion}/loadAllSharedPropertyTypes`,
    "PUT",
    request,
  );
}
