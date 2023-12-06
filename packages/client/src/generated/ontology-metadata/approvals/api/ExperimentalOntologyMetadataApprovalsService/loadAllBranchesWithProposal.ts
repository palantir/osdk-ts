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
import type { OntologyRid } from "../../../api/OntologyRid.js";
import type { LoadAllOntologyBranchesWithProposalPageRequest } from "../LoadAllOntologyBranchesWithProposalPageRequest.js";
import type { LoadAllOntologyBranchesWithProposalPageResponse } from "../LoadAllOntologyBranchesWithProposalPageResponse.js";

/**
 * Loads all the OntologyBranchWithProposal in the provided ontology the user has access to. Users having Viewer access to any of the modified entities in the OntologyBranch will be able to view the branch.
 */
export async function loadAllBranchesWithProposal(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: LoadAllOntologyBranchesWithProposalPageRequest,
): Promise<LoadAllOntologyBranchesWithProposalPageResponse> {
  return conjureFetch(
    ctx,
    `/ontology/approvals/experimental/${ontologyRid}/loadAllBranchesWithProposal`,
    "POST",
    request,
  );
}
