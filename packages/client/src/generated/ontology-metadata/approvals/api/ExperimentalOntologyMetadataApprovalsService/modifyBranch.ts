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
import type { ModifyOntologyBranchRequest } from "../ModifyOntologyBranchRequest.js";
import type { ModifyOntologyBranchResponse } from "../ModifyOntologyBranchResponse.js";

/**
 * Modify an existing branch in the provided ontology. Users who can view the branch will be able to modify the branch.
 */
export async function modifyBranch(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: ModifyOntologyBranchRequest,
): Promise<ModifyOntologyBranchResponse> {
  return conjureFetch(
    ctx,
    `/ontology/approvals/experimental/ontology/${ontologyRid}/modifyBranch`,
    "POST",
    request,
  );
}
