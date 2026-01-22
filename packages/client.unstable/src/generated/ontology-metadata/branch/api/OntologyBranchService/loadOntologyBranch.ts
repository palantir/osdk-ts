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
  LoadOntologyBranchRequest as _branch_api_LoadOntologyBranchRequest,
  LoadOntologyBranchResponse as _branch_api_LoadOntologyBranchResponse,
} from "../__components.js";

/**
 * Load an existing branch with the provided ontologyBranchRid.
 */
export async function loadOntologyBranch(
  ctx: ConjureContext,
  ontologyBranchRid: _api_OntologyBranchRid,
  request: _branch_api_LoadOntologyBranchRequest,
): Promise<_branch_api_LoadOntologyBranchResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/load/${ontologyBranchRid}`,
    "POST",
    request,
  );
}
