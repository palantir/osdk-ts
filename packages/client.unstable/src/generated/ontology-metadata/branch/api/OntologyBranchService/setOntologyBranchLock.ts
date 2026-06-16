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
  SetOntologyBranchLockRequest as _branch_api_SetOntologyBranchLockRequest,
  SetOntologyBranchLockResponse as _branch_api_SetOntologyBranchLockResponse,
} from "../__components.js";

/**
 * Endpoint for setting lock metadata for branches. Currently only functional for Builder branches.
 */
export async function setOntologyBranchLock(
  ctx: ConjureContext,
  onBehalfOf: string,
  ontologyBranchRid: _api_OntologyBranchRid,
  request: _branch_api_SetOntologyBranchLockRequest,
): Promise<_branch_api_SetOntologyBranchLockResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/setLock/${ontologyBranchRid}`,
    "PUT",
    request,
  );
}
