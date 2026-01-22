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
  MergeOntologyBranchDryRunRequest
    as _branch_api_MergeOntologyBranchDryRunRequest,
  MergeOntologyBranchDryRunResponse
    as _branch_api_MergeOntologyBranchDryRunResponse,
} from "../__components.js";

/**
 * Endpoint to validate a branch to determine if it is mergeable with the default branch. The main purpose
 * of this endpoint is to be called to determine if the branch is mergeable before calling the merge endpoint.
 * If a branch merge does not pass validations, a set of OntologyValidationErrors is returned that
 * specifies which validations failed for what reasons.
 */
export async function dryRunMergeOntologyBranch(
  ctx: ConjureContext,
  ontologyBranchRid: _api_OntologyBranchRid,
  request: _branch_api_MergeOntologyBranchDryRunRequest,
): Promise<_branch_api_MergeOntologyBranchDryRunResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/${ontologyBranchRid}/merge/dry-run`,
    "POST",
    request,
  );
}
