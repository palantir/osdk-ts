/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import type { OntologyBranchRid as _api_OntologyBranchRid } from "../../../api/__components.js";
import type {
  LoadOntologyBranchMarkingsRequest
    as _branch_api_LoadOntologyBranchMarkingsRequest,
  LoadOntologyBranchMarkingsResponse
    as _branch_api_LoadOntologyBranchMarkingsResponse,
} from "../__components.js";

/**
 * Load the markings for an ontology branch. Markings for orgs the user does not belong to will be
 * filtered out.
 */
export async function loadOntologyBranchMarkings(
  ctx: ConjureContext,
  ontologyBranchRid: _api_OntologyBranchRid,
  request: _branch_api_LoadOntologyBranchMarkingsRequest,
): Promise<_branch_api_LoadOntologyBranchMarkingsResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/load/${ontologyBranchRid}/markings`,
    "POST",
    request,
  );
}
