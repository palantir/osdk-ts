/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  FindConflictsRequest as _branch_api_FindConflictsRequest,
  FindConflictsResponse as _branch_api_FindConflictsResponse,
} from "../__components.js";

/**
 * Endpoint to determine if there are conflicts for entities between the branch with the provided
 * ontologyBranchRid and the default branch at the provided OntologyVersion. An entity is defined to be
 * conflicting if it is modified/deleted on a branch and is also modified/deleted on the default branch
 * between the latestRebasedVersion of the branch and the provided OntologyVersion.
 */
export async function findConflicts(
  ctx: ConjureContext,
  ontologyBranchRid: _api_OntologyBranchRid,
  request: _branch_api_FindConflictsRequest,
): Promise<_branch_api_FindConflictsResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/${ontologyBranchRid}/findConflicts`,
    "POST",
    request,
  );
}
