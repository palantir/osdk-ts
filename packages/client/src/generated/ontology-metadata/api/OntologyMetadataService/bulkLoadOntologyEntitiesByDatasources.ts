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
import type { OntologyBulkLoadEntitiesByDatasourcesRequest } from "../OntologyBulkLoadEntitiesByDatasourcesRequest.js";
import type { OntologyBulkLoadEntitiesByDatasourcesResponse } from "../OntologyBulkLoadEntitiesByDatasourcesResponse.js";

/**
 * Endpoint to load Ontology entities by their backing datasources in bulk.
 * The returned OntologyBulkLoadEntitiesByDatasourcesResponse will only
 * contain entities that actually exist and are visible to the user.
 * If the user has requested entities that do not exist in any of the latest Ontology versions,
 * those will not be present in the response.
 *
 * There are limits on the number of entities that can be loaded in one request. Please refer to
 * documentation of OntologyBulkLoadEntitiesByDatasourcesRequest for the values of these limits.
 */
export async function bulkLoadOntologyEntitiesByDatasources(
  ctx: ConjureContext,
  request: OntologyBulkLoadEntitiesByDatasourcesRequest,
): Promise<OntologyBulkLoadEntitiesByDatasourcesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/bulkLoadEntitiesByDatasources`,
    "POST",
    request,
  );
}
