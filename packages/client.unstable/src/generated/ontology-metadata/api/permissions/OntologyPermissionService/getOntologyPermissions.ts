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
import type {
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyRid as _api_OntologyRid,
} from "../../__components.js";
import type { GetOntologyPermissionsResponse as _api_permissions_GetOntologyPermissionsResponse } from "../__components.js";

/**
 * Returns the Ontology-level permissions which the user has.
 */
export async function getOntologyPermissions(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  ontologyBranchRid: _api_OntologyBranchRid | null | undefined,
): Promise<_api_permissions_GetOntologyPermissionsResponse> {
  return conjureFetch(
    ctx,
    `/permissions/ontology/${ontologyRid}`,
    "GET",
    undefined,
    { ontologyBranchRid },
  );
}
