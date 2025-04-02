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
  CreateOntologyServiceBranchRequest
    as _branch_api_CreateOntologyServiceBranchRequest,
  CreateOntologyServiceBranchResponse
    as _branch_api_CreateOntologyServiceBranchResponse,
} from "../__components.js";

/**
 * Create a new branch for use with a service that creates Ontology updates other than
 * OMS. The branch will be hidden in most cases. This endpoint should only be called by
 * services with the "ontology:service-branch-create" operation on the
 * "ri.ontology.<instance>.service-branch-root.1" resource.
 */
export async function createOntologyServiceBranch(
  ctx: ConjureContext,
  onBehalfOf: string,
  ontologyRid: _api_OntologyRid,
  request: _branch_api_CreateOntologyServiceBranchRequest,
): Promise<_branch_api_CreateOntologyServiceBranchResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/service-branch/create/${ontologyRid}`,
    "PUT",
    request,
  );
}
