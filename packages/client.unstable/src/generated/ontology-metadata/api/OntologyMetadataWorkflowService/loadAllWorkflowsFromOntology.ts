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
import type { LoadAllWorkflowsPageRequest } from "../../workflow/api/LoadAllWorkflowsPageRequest.js";
import type { LoadAllWorkflowsPageResponse } from "../../workflow/api/LoadAllWorkflowsPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";

/**
 * Endpoint to get all the Workflows a user has access to. There are no guarantees that the Workflow will have
 * all the required entities to be able to adhere to the associated Workflow Archetype.
 *
 * Clients are expected to continue to page until there is an empty nextPageToken in the
 * `LoadAllWorkflowsPageResponse`, which indicates that there are no more workflows to retrieve.
 */
export async function loadAllWorkflowsFromOntology(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  ontologyVersion: OntologyVersion,
  request: LoadAllWorkflowsPageRequest,
): Promise<LoadAllWorkflowsPageResponse> {
  return conjureFetch(
    ctx,
    `/workflow/ontology/load/${ontologyRid}/${ontologyVersion}/loadAllWorkflowsFromOntology`,
    "POST",
    request,
  );
}
