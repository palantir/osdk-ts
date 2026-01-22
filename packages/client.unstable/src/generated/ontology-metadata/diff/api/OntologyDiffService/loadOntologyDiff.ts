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
import type { OntologyRid as _api_OntologyRid } from "../../../api/__components.js";
import type {
  LoadOntologyDiffRequest as _diff_api_LoadOntologyDiffRequest,
  LoadOntologyDiffResponse as _diff_api_LoadOntologyDiffResponse,
} from "../__components.js";

/**
 * Experimental endpoint that loads the difference in entities between two ontology versions
 * Currently non-functional, please do not use.
 */
export async function loadOntologyDiff(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid,
  request: _diff_api_LoadOntologyDiffRequest,
): Promise<_diff_api_LoadOntologyDiffResponse> {
  return conjureFetch(
    ctx,
    `/ontology/diff/load/ontologyDiff/${ontologyRid}`,
    "POST",
    request,
  );
}
