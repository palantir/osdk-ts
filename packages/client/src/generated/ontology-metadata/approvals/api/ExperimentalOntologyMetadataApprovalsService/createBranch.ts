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
import type { CreateOntologyBranchRequest } from "../CreateOntologyBranchRequest.js";
import type { CreateOntologyBranchResponse } from "../CreateOntologyBranchResponse.js";

/**
 * Endpoint to create a new branch in an existing ontology. This also creates an OntologyBranchProposal from this branch to the
 * main branch in a `DRAFT` ProposalStatus. Users need to have access to `ontology:create-branch` operation on the
 * Ontology parent node to be able to create a new branch. This operaton is granted to the Viewer(s) of the ontology
 * by default.
 */
export async function createBranch(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: CreateOntologyBranchRequest,
): Promise<CreateOntologyBranchResponse> {
  return conjureFetch(
    ctx,
    `/ontology/approvals/experimental/${ontologyRid}/createBranch`,
    "POST",
    request,
  );
}
