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
import type { LoadAllOntologiesInternalRequest } from "../../modification/LoadAllOntologiesInternalRequest.js";
import type { LoadAllOntologiesInternalResponse } from "../../modification/LoadAllOntologiesInternalResponse.js";

/**
 * Endpoint to load metadata about the Ontologies a user has access to. The response will contain
 * only Ontologies on which the user has `ontology:view-ontology`. Note that the returned
 * LoadAllOntologiesInternalResponse may be empty if there is no Ontology yet.
 */
export async function loadAllOntologiesInternal(
  ctx: ConjureContext,
  request: LoadAllOntologiesInternalRequest,
): Promise<LoadAllOntologiesInternalResponse> {
  return conjureFetch(ctx, `/ontology/v2/load/all`, "POST", request);
}
