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
  CreateOntologyBranchRequest as _branch_api_CreateOntologyBranchRequest,
  CreateOntologyBranchResponse as _branch_api_CreateOntologyBranchResponse,
} from "../__components.js";

/**
 * Endpoint to create a new branch in an existing ontology. Users need to have access to
 * `ontology:create-branch` operation on the OntologyRid.
 */
export async function createOntologyBranch(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  request: _branch_api_CreateOntologyBranchRequest,
): Promise<_branch_api_CreateOntologyBranchResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/${ontologyRid}/createBranch`,
    "POST",
    request,
  );
}
