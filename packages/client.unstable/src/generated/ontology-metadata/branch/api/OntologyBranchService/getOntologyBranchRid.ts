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
import type { GlobalBranchRid } from "../../../api/GlobalBranchRid.js";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";

/**
 * Endpoint get the corresponding OntologyBranchRid for a global BranchRid given by BranchService.
 * Will throw if the given BranchRid does not have a corresponding OntologyBranchRid.
 *
 * Note that it is ok for services to cache the result of this map, since this mapping only encodes a rid to
 * rid mapping. The only permission check performed in this endpoint is a check that the token is valid.
 */
export async function getOntologyBranchRid(
  ctx: ConjureContext,
  globalBranchRid: GlobalBranchRid,
): Promise<OntologyBranchRid> {
  return conjureFetch(ctx, `/ontology/branch/global/${globalBranchRid}`, "GET");
}
