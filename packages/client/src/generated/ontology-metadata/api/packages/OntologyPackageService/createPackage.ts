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
import type { OntologyRid } from "../../OntologyRid.js";
import type { CreatePackageRequest } from "../CreatePackageRequest.js";
import type { CreatePackageResponse } from "../CreatePackageResponse.js";

/**
 * Creates a new package in the specified ontology. Requires the privileged operation `ontology:service-create-package`
 * on the ontology root rid rid.
 */
export async function createPackage(
  ctx: ConjureContext,
  onBehalfOf: string,
  ontologyRid: OntologyRid,
  request: CreatePackageRequest,
): Promise<CreatePackageResponse> {
  return conjureFetch(
    ctx,
    `/ontology/packages/${ontologyRid}/create`,
    "PUT",
    request,
  );
}
