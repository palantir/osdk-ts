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
import type { OntologyRid as _api_OntologyRid } from "../../../api/__components.js";
import type {
  LoadOntologyBranchWithProposalRequest
    as _approvals_api_LoadOntologyBranchWithProposalRequest,
  LoadOntologyBranchWithProposalResponse
    as _approvals_api_LoadOntologyBranchWithProposalResponse,
} from "../__components.js";

/**
 * Load an existing branch in the provided ontology. Users who can view atleast one entity modified on that branch will be able to load it.
 */
export async function loadOntologyBranchWithProposal(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  request: _approvals_api_LoadOntologyBranchWithProposalRequest,
): Promise<_approvals_api_LoadOntologyBranchWithProposalResponse> {
  return conjureFetch(
    ctx,
    `/ontology/approvals/experimental/ontology/${ontologyRid}/loadBranchWithProposal`,
    "POST",
    request,
  );
}
