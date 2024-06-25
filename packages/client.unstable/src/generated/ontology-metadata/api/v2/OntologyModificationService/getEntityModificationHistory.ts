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
import type { GetEntityModificationHistoryRequest } from "../../modification/GetEntityModificationHistoryRequest.js";
import type { GetEntityModificationHistoryResponse } from "../../modification/GetEntityModificationHistoryResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";

/**
 * Returns pages of metadata about the history of modifications to the provided entity, including the
 * OntologyVersion and Attribution for each modification. The order of the items returned is from the most recent
 * to the oldest.
 *
 * Note that an entry for a version is only returned for an ObjectType or a LinkType if the corresponding
 * `OntologyModificationRequest` included an `ObjectTypeModifyRequest` or a `LinkTypeModifyRequest` for
 * the ObjectType or LinkType. If the OntologyMOdificationRequest only contained EntityMetadata or
 * Schema migration modifications for the ObjectType or LinkType, then no entry will be returned for
 * the entity at that version.
 */
export async function getEntityModificationHistory(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: GetEntityModificationHistoryRequest,
): Promise<GetEntityModificationHistoryResponse> {
  return conjureFetch(
    ctx,
    `/ontology/v2/${ontologyRid}/modification/history/entity`,
    "POST",
    request,
  );
}
