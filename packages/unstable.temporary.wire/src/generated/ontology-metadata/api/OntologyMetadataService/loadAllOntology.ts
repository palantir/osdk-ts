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
import type { OntologyLoadAllRequest } from "../OntologyLoadAllRequest.js";
import type { OntologyLoadResponse } from "../OntologyLoadResponse.js";

/**
 * Endpoint to load the whole Ontology at a given OntologyVersion or at the latest OntologyVersion.
 * The returned OntologyLoadResponse will only contain entities that are visible to the user.
 * If the user has requested to load the Ontology at an invalid OntologyVersion,
 * an empty response will be returned.
 *
 * In the presence of multiple ontologies, this endpoint will implicitly choose which ontology the user
 * expects to load given the organization membership of the user. If the user is not a member of any organization,
 * the default Ontology will be chosen.
 */
export async function loadAllOntology(
  ctx: ConjureContext,
  request: OntologyLoadAllRequest,
): Promise<OntologyLoadResponse> {
  return conjureFetch(ctx, `/ontology/ontology/load/all`, "POST", request);
}
