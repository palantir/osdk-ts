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
import type {
  OntologyRid as _api_OntologyRid,
  OrganizationRidsForOntologyResponse
    as _api_OrganizationRidsForOntologyResponse,
} from "../__components.js";

/**
 * Gets the organization rids to which the ontology entities in the given ontology rid belong. If the user has
 * requested an ontology they do not have access to, no organization rids will be present in the response.
 */
export async function getOrganizationRidsForOntology(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
): Promise<_api_OrganizationRidsForOntologyResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/${ontologyRid}/organizationRids`,
    "GET",
  );
}
