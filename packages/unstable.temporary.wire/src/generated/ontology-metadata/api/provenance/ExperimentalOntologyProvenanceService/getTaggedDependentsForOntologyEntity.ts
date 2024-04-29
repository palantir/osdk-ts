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
import type { GetTaggedDependentsForOntologyEntityRequest } from "../GetTaggedDependentsForOntologyEntityRequest.js";
import type { GetTaggedDependentsForOntologyEntityResponse } from "../GetTaggedDependentsForOntologyEntityResponse.js";

/**
 * Endpoint to get the tagged dependents on the requested OntologyEntity. Requires view permissions on the
 * requested ontology entity.
 */
export async function getTaggedDependentsForOntologyEntity(
  ctx: ConjureContext,
  request: GetTaggedDependentsForOntologyEntityRequest,
): Promise<GetTaggedDependentsForOntologyEntityResponse> {
  return conjureFetch(
    ctx,
    `/provenance/getTaggedDependentsForOntologyEntity`,
    "PUT",
    request,
  );
}
