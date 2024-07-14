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
import type { OntologyRid } from "../OntologyRid.js";
import type { LoadGothamTypeInstallationStatusesRequest } from "../typemapping/LoadGothamTypeInstallationStatusesRequest.js";
import type { LoadGothamTypeInstallationStatusesResponse } from "../typemapping/LoadGothamTypeInstallationStatusesResponse.js";

/**
 * Retrieves the install status of a type by URI. Also returns its corresponding Foundry ontology version
 * if the type is created by type mapping from Foundry.
 * This will return the most recently queued version or most
 * recently staged version or the runtime version if neither of the first two exist.
 *
 * For mapped Foundry object types, the installation status represents the status of the object itself along with
 * all of its local property types. Specifically:
 * 1. status shows "installed" only when all of its local property types have also been installed
 * 2. status shows "failed" if any of its local property types failed installation
 * For individual property type installation statuses, query by the property type URIs.
 */
export async function loadGothamTypeInstallationStatuses(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: LoadGothamTypeInstallationStatusesRequest,
): Promise<LoadGothamTypeInstallationStatusesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/typemapping/loadGothamTypeInstallationStatuses/${ontologyRid}`,
    "PUT",
    request,
  );
}
