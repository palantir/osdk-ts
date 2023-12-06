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
import type { SetOntologyBranchOrganizationMarkingsRequest } from "../SetOntologyBranchOrganizationMarkingsRequest.js";
import type { SetOntologyBranchOrganizationMarkingsResponse } from "../SetOntologyBranchOrganizationMarkingsResponse.js";

/**
 * Manually set the org markings for an ontology branch. This will throw if the stack does
 * not have the `organizationMarkingsRequiredOnOntologyProposals` set to true.
 */
export async function setOntologyBranchOrganizationMarkings(
  ctx: ConjureContext,
  request: SetOntologyBranchOrganizationMarkingsRequest,
): Promise<SetOntologyBranchOrganizationMarkingsResponse> {
  return conjureFetch(
    ctx,
    `/ontology/branch/setBranchOrganizationMarkings`,
    "PUT",
    request,
  );
}
