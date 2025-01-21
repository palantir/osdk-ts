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
import type { GetEntityModificationHistoryRequest } from "../../modification/GetEntityModificationHistoryRequest.js";
import type { GetEntityModificationHistoryResponse } from "../../modification/GetEntityModificationHistoryResponse.js";

/**
 * Returns pages of metadata about the history of modifications to the provided entity, including the
 * OntologyVersion and Attribution for each modification. The order of the items returned is from the most recent
 * to the oldest. Unlike `getEntityModificationHistory`, does not require OntologyRid as a path parameter, and
 * attempts to find the OntologyRid given either the EntityRid or the OntologyBranchRid.
 */
export async function getEntityModificationHistoryV2(
  ctx: ConjureContext,
  request: GetEntityModificationHistoryRequest,
): Promise<GetEntityModificationHistoryResponse> {
  return conjureFetch(
    ctx,
    `/ontology/v2/modification/history/entity`,
    "POST",
    request,
  );
}
