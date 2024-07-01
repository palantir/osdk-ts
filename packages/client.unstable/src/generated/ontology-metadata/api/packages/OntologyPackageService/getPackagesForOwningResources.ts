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
import type { GetPackagesForOwningResourcesRequest } from "../GetPackagesForOwningResourcesRequest.js";
import type { GetPackagesForOwningResourcesResponse } from "../GetPackagesForOwningResourcesResponse.js";

/**
 * Gets all packages owned by the specified resources. Resources which have no package associated will not have
 * a corresponding entry in the resulting set. Packages where the user does not have `ontology:discover-package`
 * will be filtered out.
 */
export async function getPackagesForOwningResources(
  ctx: ConjureContext,
  request: GetPackagesForOwningResourcesRequest,
): Promise<GetPackagesForOwningResourcesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/packages/packagesForOwningResources`,
    "PUT",
    request,
  );
}
