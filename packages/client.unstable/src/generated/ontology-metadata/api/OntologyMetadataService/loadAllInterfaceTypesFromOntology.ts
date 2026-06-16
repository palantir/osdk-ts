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
  LoadAllInterfaceTypesPageRequest as _api_LoadAllInterfaceTypesPageRequest,
  LoadAllInterfaceTypesPageResponse as _api_LoadAllInterfaceTypesPageResponse,
  OntologyRid as _api_OntologyRid,
  OntologyVersion as _api_OntologyVersion,
} from "../__components.js";

/**
 * Endpoint to load a paged collection of all interfaces visible to the user from the specified ontology and
 * ontology version. The maximum number of interfaces returned in a page is capped at 100.
 */
export async function loadAllInterfaceTypesFromOntology(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  ontologyVersion: _api_OntologyVersion,
  request: _api_LoadAllInterfaceTypesPageRequest,
): Promise<_api_LoadAllInterfaceTypesPageResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/${ontologyRid}/${ontologyVersion}/loadAllInterfaceTypes`,
    "PUT",
    request,
  );
}
