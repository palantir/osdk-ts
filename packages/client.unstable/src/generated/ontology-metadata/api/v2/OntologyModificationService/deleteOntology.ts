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
import type { OntologyRid as _api_OntologyRid } from "../../__components.js";
import type {
  OntologyDeleteRequest as _api_modification_OntologyDeleteRequest,
  OntologyDeleteResponse as _api_modification_OntologyDeleteResponse,
} from "../../modification/__components.js";

/**
 * Endpoint to delete an Ontology. The Ontology must be empty in order
 * to delete it. Requires the "ontology:delete-ontology" permission on the OntologyRid.
 */
export async function deleteOntology(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  request: _api_modification_OntologyDeleteRequest,
): Promise<_api_modification_OntologyDeleteResponse> {
  return conjureFetch(
    ctx,
    `/ontology/v2/delete/${ontologyRid}`,
    "POST",
    request,
  );
}
