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
import type { OntologyRid as _api_OntologyRid } from "../../../api/__components.js";
import type {
  ModifyOntologyBranchRequest as _approvals_api_ModifyOntologyBranchRequest,
  ModifyOntologyBranchResponse as _approvals_api_ModifyOntologyBranchResponse,
} from "../__components.js";

/**
 * Modify an existing branch in the provided ontology. Users who can view the branch will be able to modify the branch.
 */
export async function modifyBranch(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  request: _approvals_api_ModifyOntologyBranchRequest,
): Promise<_approvals_api_ModifyOntologyBranchResponse> {
  return conjureFetch(
    ctx,
    `/ontology/approvals/experimental/ontology/${ontologyRid}/modifyBranch`,
    "POST",
    request,
  );
}
