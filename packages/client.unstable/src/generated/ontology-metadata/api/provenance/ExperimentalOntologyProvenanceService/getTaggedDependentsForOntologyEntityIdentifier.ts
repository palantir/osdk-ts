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
import type {
  GetTaggedDependentsForOntologyEntityIdentifierRequest
    as _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierRequest,
  GetTaggedDependentsForOntologyEntityIdentifierResponse
    as _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierResponse,
} from "../__components.js";

/**
 * Endpoint to get the tagged dependents given the requested OntologyEntity identifier across all versions of the Ontology Entity.
 * Requires view permissions on the requested ontology entity.
 */
export async function getTaggedDependentsForOntologyEntityIdentifier(
  ctx: ConjureContext,
  request:
    _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierRequest,
): Promise<
  _api_provenance_GetTaggedDependentsForOntologyEntityIdentifierResponse
> {
  return conjureFetch(
    ctx,
    `/provenance/getTaggedDependentsForOntologyEntityIdentifier`,
    "PUT",
    request,
  );
}
