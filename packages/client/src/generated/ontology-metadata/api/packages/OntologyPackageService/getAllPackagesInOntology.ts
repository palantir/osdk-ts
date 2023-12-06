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
import type { OntologyPackageRid } from "../../OntologyPackageRid.js";
import type { OntologyRid } from "../../OntologyRid.js";
import type { OntologyPackageMetadata } from "../OntologyPackageMetadata.js";

/**
 * Gets all packages in the specified ontology. Requires `ontology:view-ontology` on the ontology rid and
 * packages where the user does not have `ontology:discover-package` will be filtered out.
 */
export async function getAllPackagesInOntology(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
): Promise<Record<OntologyPackageRid, OntologyPackageMetadata>> {
  return conjureFetch(ctx, `/ontology/packages/${ontologyRid}/packages`, "GET");
}
