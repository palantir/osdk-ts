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
  LoadMergedRebaseStateRequest as _api_LoadMergedRebaseStateRequest,
  OntologyBulkLoadEntitiesResponse as _api_OntologyBulkLoadEntitiesResponse,
} from "../__components.js";

/**
 * Loads the merged rebase base state for a branch at a given rebase target version.
 *
 * When rebasing a branch, OMS merges sub-concepts (property types, datasources, action type
 * parameters/sections/validations, property security groups) from the parent into the
 * branch's entities. This endpoint returns the result of that merge — the base state that
 * OMS will diff against when processing the subsequent rebase modification request.
 *
 * For entities modified on the branch, the response contains the branch's version with parent
 * sub-concepts merged in. For entities not modified on the branch, the response contains the
 * entity as it exists at the rebase target version on the parent. Entities deleted on the
 * branch are returned at their parent version if they still exist on the parent, enabling
 * restoration as updates rather than creates.
 *
 * The response follows the same positional list format as OntologyBulkLoadEntitiesResponse:
 * each entry corresponds to the RID at the same index in the request.
 *
 * The ontologyVersion and resolvedBranch fields on each entity response are contextual — this
 * is a synthetic merge state that does not exist at any single stored version.
 *
 * This endpoint is intended for OMA (Ontology Metadata App) use during rebase mode.
 */
export async function loadMergedRebaseState(
  ctx: ConjureContext,
  request: _api_LoadMergedRebaseStateRequest,
): Promise<_api_OntologyBulkLoadEntitiesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/loadMergedRebaseState`,
    "POST",
    request,
  );
}
