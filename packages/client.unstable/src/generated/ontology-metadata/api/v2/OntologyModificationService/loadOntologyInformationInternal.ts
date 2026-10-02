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

import type { LoadOntologyInformationInternalRequest as _api_modification_LoadOntologyInformationInternalRequest } from "../../modification/__components.js";
import type { LoadOntologyInformationInternalResponse as _api_modification_LoadOntologyInformationInternalResponse } from "../../modification/__components.js";

/**
 * Endpoint to load metadata about a single Ontology by its RID. Prefer this over `loadAllOntologiesInternal`
 * when only one Ontology is needed. The response is empty unless the Ontology exists and the user has
 * `ontology:view-ontology` on the Ontology RID.
 */
export async function loadOntologyInformationInternal(
  ctx: ConjureContext,
  request: _api_modification_LoadOntologyInformationInternalRequest,
): Promise<_api_modification_LoadOntologyInformationInternalResponse> {
  return conjureFetch(ctx, `/ontology/v2/load`, "POST", request);
}
