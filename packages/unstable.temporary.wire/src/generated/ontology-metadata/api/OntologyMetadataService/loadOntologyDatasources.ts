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
import type { OntologyLoadDatasourcesRequest } from "../OntologyLoadDatasourcesRequest.js";
import type { OntologyLoadDatasourcesResponse } from "../OntologyLoadDatasourcesResponse.js";

/**
 * Endpoint to load datasources for Ontology entities at a given OntologyVersion or at the latest
 * OntologyVersion. The returned OntologyDatasourcesLoadResponse will only contain datasources that are
 * visible to the user. If the user has requested to get datasources at invalid ontology versions
 * or for objectTypeIds that do not exist in the specified versions, those entries will include an
 * empty set of datasources.
 */
export async function loadOntologyDatasources(
  ctx: ConjureContext,
  request: OntologyLoadDatasourcesRequest,
): Promise<OntologyLoadDatasourcesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/datasources`,
    "POST",
    request,
  );
}
