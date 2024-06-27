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
import type { ActionTypeSearchRequest } from "../search/ActionTypeSearchRequest.js";
import type { ActionTypeSearchResponse } from "../search/ActionTypeSearchResponse.js";

/**
 * Endpoint to search ActionTypes based on various filters. Endpoint allows to return results based on relevance
 * of the match. There is no timeout between fetching consecutive pages and clients do not need to page to the end.
 * In some cases updates to the Ontology between fetching pages can cause the same result to be returned more than once.
 *
 * The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
 * behind the last Ontology modification.
 */
export async function searchActionTypes(
  ctx: ConjureContext,
  request: ActionTypeSearchRequest,
): Promise<ActionTypeSearchResponse> {
  return conjureFetch(
    ctx,
    `/ontology/search/v0/searchActionTypes`,
    "POST",
    request,
  );
}
