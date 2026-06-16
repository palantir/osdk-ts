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
import type {
  BulkLoadOntologyBranchesRequest
    as _branch_api_BulkLoadOntologyBranchesRequest,
  BulkLoadOntologyBranchesResponse
    as _branch_api_BulkLoadOntologyBranchesResponse,
} from "../__components.js";

/**
 * Bulk load ontology branches using the provided branch identifier.
 */
export async function bulkLoadOntologyBranches(
  ctx: ConjureContext,
  request: _branch_api_BulkLoadOntologyBranchesRequest,
): Promise<_branch_api_BulkLoadOntologyBranchesResponse> {
  return conjureFetch(ctx, `/ontology/branch/bulk-load`, "POST", request);
}
