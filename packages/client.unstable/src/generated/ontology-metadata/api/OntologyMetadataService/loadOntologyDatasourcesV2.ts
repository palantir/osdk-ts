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

import type { OntologyLoadDatasourcesRequestV2 as _api_OntologyLoadDatasourcesRequestV2 } from "../__components.js";
import type { OntologyLoadDatasourcesResponse as _api_OntologyLoadDatasourcesResponse } from "../__components.js";

/**
 * Endpoint to load datasources for Ontology entities at a given VersionReference or at the latest default
 * branch OntologyVersion. The returned OntologyDatasourcesLoadResponse will only contain datasources that are
 * visible to the user. If a requested VersionReference cannot be resolved or an objectTypeId does not exist in
 * the specified version, the corresponding entry will include an empty set of datasources.
 *
 * At most 100 object types and 100 link types can be requested.
 */
export async function loadOntologyDatasourcesV2(
  ctx: ConjureContext,
  request: _api_OntologyLoadDatasourcesRequestV2,
): Promise<_api_OntologyLoadDatasourcesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/datasourcesV2`,
    "POST",
    request,
  );
}
