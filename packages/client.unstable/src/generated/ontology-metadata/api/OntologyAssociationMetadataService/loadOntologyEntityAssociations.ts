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
import type { OntologyRid as _api_OntologyRid } from "../__components.js";
import type {
  LoadOntologyEntityAssociationsRequest
    as _api_association_metadata_LoadOntologyEntityAssociationsRequest,
  LoadOntologyEntityAssociationsResponse
    as _api_association_metadata_LoadOntologyEntityAssociationsResponse,
} from "../association/metadata/__components.js";

/**
 * Endpoint to load the ontology associations linked to the requested ontology entities.
 */
export async function loadOntologyEntityAssociations(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  request: _api_association_metadata_LoadOntologyEntityAssociationsRequest,
): Promise<_api_association_metadata_LoadOntologyEntityAssociationsResponse> {
  return conjureFetch(
    ctx,
    `/association/ontology/${ontologyRid}/loadOntologyEntityAssociation`,
    "POST",
    request,
  );
}
