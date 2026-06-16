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
import type { OntologyRid as _api_OntologyRid } from "../__components.js";
import type {
  DeleteAssociationsRequest
    as _api_association_metadata_DeleteAssociationsRequest,
  DeleteAssociationsResponse
    as _api_association_metadata_DeleteAssociationsResponse,
} from "../association/metadata/__components.js";

/**
 * Endpoint to delete associations between one or more <ontology entity, resource> pairs
 */
export async function deleteAssociations(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  request: _api_association_metadata_DeleteAssociationsRequest,
): Promise<_api_association_metadata_DeleteAssociationsResponse> {
  return conjureFetch(
    ctx,
    `/association/ontology/${ontologyRid}/deleteOntologyEntityAssociations`,
    "PUT",
    request,
  );
}
