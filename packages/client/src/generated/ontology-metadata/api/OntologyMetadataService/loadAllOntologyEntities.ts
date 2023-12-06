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
import type { OntologyLoadAllEntitiesRequest } from "../OntologyLoadAllEntitiesRequest.js";
import type { OntologyLoadEntitiesResponse } from "../OntologyLoadEntitiesResponse.js";

/**
 * Endpoint to load entity rids from the whole Ontology at a given OntologyVersion or at the latest
 * OntologyVersion. The returned OntologyLoadResponse will only contain entity rids that are visible
 * to the user. If the user has requested to load the Ontology at an invalid OntologyVersion,
 * an empty response will be returned.
 *
 * In the presence of multiple ontologies, this endpoint will implicitly choose which ontology the user
 * expects to load given the organization membership of the user. If the user is not a member of any organization,
 * the default Ontology will be chosen.
 *
 * The includeObjectTypesWithoutSearchableDatasources flag is respected if present in the request,
 * else we set it to a default (false) unless the user-agent is blocklisted.
 * The flag is set to true for blocklisted user agents. Currently the blocklist
 * includes functions-typescript-gradle-plugin only.
 */
export async function loadAllOntologyEntities(
  ctx: ConjureContext,
  request: OntologyLoadAllEntitiesRequest,
): Promise<OntologyLoadEntitiesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/allEntities`,
    "POST",
    request,
  );
}
