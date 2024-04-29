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
import type { OntologyCreateRequest } from "../../modification/OntologyCreateRequest.js";
import type { OntologyCreateResponse } from "../../modification/OntologyCreateResponse.js";

/**
 * Endpoint to create an Ontology. This should be a one time action when a new
 * tenant needs to be onboarded and needs to have a private Ontology. Requires
 * the "ontology:create-ontology" permission on the Ontology root node.
 * Throws `OntologyOwnerGroupDoesNotExist` if the Owner Group passed in does not exist.
 * Throws `NamespaceCanNotHaveMorethanOneOntology` if the specified Compass Namespace already
 * has an Ontology under it.
 */
export async function createOntology(
  ctx: ConjureContext,
  request: OntologyCreateRequest,
): Promise<OntologyCreateResponse> {
  return conjureFetch(ctx, `/ontology/v2/create`, "POST", request);
}
