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
import type { LoadActionTypesFromOntologyRequest } from "../../LoadActionTypesFromOntologyRequest.js";
import type { LoadActionTypesFromOntologyResponse } from "../../LoadActionTypesFromOntologyResponse.js";

/**
 * Endpoint to batch load ActionTypes. The returned LoadActionTypeResponse will only contain
 * ActionTypes that actually exist and are visible to the user. If the user has requested ActionTypes at
 * invalid ontology versions or ActionTypes that do not exist in the specified versions,
 * those will not be present in the response.
 *
 * There are limits on the number of action types that can be loaded in one request. Please refer to
 * documentation of LoadActionTypesFromOntologyRequest for the values of these limits.
 */
export async function loadActionTypesFromOntology(
  ctx: ConjureContext,
  request: LoadActionTypesFromOntologyRequest,
): Promise<LoadActionTypesFromOntologyResponse> {
  return conjureFetch(ctx, `/actions/types/loadFromOntology`, "POST", request);
}
