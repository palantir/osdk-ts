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
import type { ImportSharedPropertyTypesRequest } from "../../modification/ImportSharedPropertyTypesRequest.js";
import type { ImportSharedPropertyTypesResponse } from "../../modification/ImportSharedPropertyTypesResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";

/**
 * Imports SharedPropertyTypes from their corresponding ontology to another. This will result in both ontologies
 * having the exact same SharedPropertyType in their latest ontology version. An imported SharedPropertyType can
 * no longer be modified while it is still imported into at least one ontology.
 *
 * The user running the import must be owner of the imported SharedPropertyTypes and have owner privileges on the
 * importing ontology.
 *
 * The imported SharedPropertyTypes are subject to the same validations and checks as if it was created in the
 * importing ontology.
 *
 * A maximum of 50 SharedPropertyTypes can be imported per request.
 */
export async function importSharedPropertyTypes(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: ImportSharedPropertyTypesRequest,
): Promise<ImportSharedPropertyTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/v2/${ontologyRid}/import`,
    "POST",
    request,
  );
}
