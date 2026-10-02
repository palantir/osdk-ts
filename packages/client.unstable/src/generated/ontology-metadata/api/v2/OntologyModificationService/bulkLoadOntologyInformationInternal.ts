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

import { conjureFetch, type ConjureContext } from "conjure-lite";

import type { BulkLoadOntologyInformationInternalRequest as _api_modification_BulkLoadOntologyInformationInternalRequest } from "../../modification/__components.js";
import type { BulkLoadOntologyInformationInternalResponse as _api_modification_BulkLoadOntologyInformationInternalResponse } from "../../modification/__components.js";

/**
 * Endpoint to batch load metadata about Ontologies by their RIDs. Prefer this over `loadAllOntologiesInternal`
 * when the set of Ontologies needed is known. Requested Ontologies are only returned if they exist and the user
 * has `ontology:view-ontology` on the Ontology RID. At most 100 Ontologies can be requested per batch.
 */
export async function bulkLoadOntologyInformationInternal(
  ctx: ConjureContext,
  request: _api_modification_BulkLoadOntologyInformationInternalRequest,
): Promise<_api_modification_BulkLoadOntologyInformationInternalResponse> {
  return conjureFetch(ctx, `/ontology/v2/load/bulk`, "POST", request);
}
