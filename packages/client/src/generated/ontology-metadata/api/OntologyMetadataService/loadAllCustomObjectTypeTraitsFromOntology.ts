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
import type { LoadAllCustomObjectTypeTraitsPageRequest } from "../LoadAllCustomObjectTypeTraitsPageRequest.js";
import type { LoadAllCustomObjectTypeTraitsPageResponse } from "../LoadAllCustomObjectTypeTraitsPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";

/**
 * Endpoint to get all the CustomObjectTypeTraits a user has access to.
 */
export async function loadAllCustomObjectTypeTraitsFromOntology(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  ontologyVersion: OntologyVersion,
  request: LoadAllCustomObjectTypeTraitsPageRequest,
): Promise<LoadAllCustomObjectTypeTraitsPageResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/${ontologyRid}/${ontologyVersion}/loadAllCustomObjectTypeTraitsFromOntology`,
    "POST",
    request,
  );
}
