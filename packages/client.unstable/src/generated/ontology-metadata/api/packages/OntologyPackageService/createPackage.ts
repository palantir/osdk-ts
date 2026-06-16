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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { OntologyRid as _api_OntologyRid } from "../../__components.js";
import type {
  CreatePackageRequest as _api_packages_CreatePackageRequest,
  CreatePackageResponse as _api_packages_CreatePackageResponse,
} from "../__components.js";

/**
 * Creates a new package in the specified ontology. Requires the privileged operation `ontology:service-create-package`
 * on the ontology root rid rid.
 *
 * If using a Compass project as OwningRid, the project must be in the same namespace as the ontology.
 */
export async function createPackage(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  ontologyRid: _api_OntologyRid,
  request: _api_packages_CreatePackageRequest,
): Promise<_api_packages_CreatePackageResponse> {
  return conjureFetch(
    ctx,
    `/ontology/packages/${ontologyRid}/create`,
    "PUT",
    request,
  );
}
