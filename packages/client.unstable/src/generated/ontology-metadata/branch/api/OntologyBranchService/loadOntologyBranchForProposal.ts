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
import type { OntologyProposalRid as _api_OntologyProposalRid } from "../../../api/__components.js";
import type {
  LoadOntologyBranchForProposalRequest
    as _branch_api_LoadOntologyBranchForProposalRequest,
  LoadOntologyBranchForProposalResponse
    as _branch_api_LoadOntologyBranchForProposalResponse,
} from "../__components.js";

/**
 * Load a ProposalV2 and its parent branch with the provided ontologyProposalRid.
 */
export async function loadOntologyBranchForProposal(
  ctx: ConjureContext,
  ontologyProposalRid: _api_OntologyProposalRid,
  request: _branch_api_LoadOntologyBranchForProposalRequest,
): Promise<_branch_api_LoadOntologyBranchForProposalResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/load/proposalV2/${ontologyProposalRid}`,
    "POST",
    request,
  );
}
