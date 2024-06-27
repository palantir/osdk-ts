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
import type { LoadAllTypeGroupsPageRequest } from "../LoadAllTypeGroupsPageRequest.js";
import type { LoadAllTypeGroupsPageResponse } from "../LoadAllTypeGroupsPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";

/**
 * Endpoint to load a paged collection of all type groups visible to the user from the specified ontology and
 * ontology version. The maximum number of type groups returned in a page is capped at 100.
 */
export async function loadAllTypeGroupsFromOntology(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  ontologyVersion: OntologyVersion,
  request: LoadAllTypeGroupsPageRequest,
): Promise<LoadAllTypeGroupsPageResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/${ontologyRid}/${ontologyVersion}/loadAllTypeGroups`,
    "PUT",
    request,
  );
}
