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
  DiscardChangesRequest as _branch_api_DiscardChangesRequest,
  DiscardChangesResponseV2 as _branch_api_DiscardChangesResponseV2,
} from "../__components.js";

/**
 * Discards the changes applied on the specified entities on the specified branch, such that they are unmodified
 * and match the state of the entities at the point of branching off of the default branch. This will be treated
 * as an Ontology modification and as such will result in a new OntologyVersion.
 *
 * Discards go through the same validations as creates/updates/deletes. If a validation check fails, this endpoint
 * returns an ErrorStatus with a list of OntologyValidationErrors.
 */
export async function discardChangesOnBranchV2(
  ctx: ConjureContext,
  ontologyBranchRid: _api_OntologyBranchRid,
  request: _branch_api_DiscardChangesRequest,
): Promise<_branch_api_DiscardChangesResponseV2> {
  return conjureFetch(
    ctx,
    `/ontology/branch/${ontologyBranchRid}/discardChangesV2`,
    "POST",
    request,
  );
}
