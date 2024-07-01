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
import type { ObjectTypeSearchRequest } from "../search/ObjectTypeSearchRequest.js";
import type { ObjectTypeSearchResponse } from "../search/ObjectTypeSearchResponse.js";

/**
 * This endpoint should only be used for batch processing workflows where all matches to a query need
 * to be retrieved with a consistent view of the search index across pages. For other workflows use the
 * `searchObjectTypes` endpoint.
 * Time between fetching consecutive pages must not be more than 1 minute. Clients should always
 * page until an empty page token is returned. Use the `searchObjectTypes` endpoint to avoid the timeout
 * between pages.
 *
 * The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
 * behind the last Ontology modification.
 */
export async function objectTypes(
  ctx: ConjureContext,
  request: ObjectTypeSearchRequest,
): Promise<ObjectTypeSearchResponse> {
  return conjureFetch(ctx, `/ontology/search/v0/objectTypes`, "POST", request);
}
