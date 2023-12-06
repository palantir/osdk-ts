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
import type { GetObjectTypesRequest } from "../GetObjectTypesRequest.js";
import type { GetObjectTypesResponse } from "../GetObjectTypesResponse.js";

/**
 * Returns types of objects that can be present in the supplied object set based on its definition at the time
 * of the request.
 *
 * Note that this endpoint does not perform a full evaluation of the supplied object set - the guarantees provided
 * are that only the returned object types can be present in the supplied object set at the time of the request.
 * It is not however guaranteed that there in fact is at least one object of each returned object type - consider
 * using aggregations instead if false-positives are not desired.
 *
 * Note that object types belonging to an object set can change over time - this information should be treated as
 * dynamic and should not be persisted or treated as immutable.
 */
export async function getObjectTypes(
  ctx: ConjureContext,
  request: GetObjectTypesRequest,
): Promise<GetObjectTypesResponse> {
  return conjureFetch(ctx, `/objectSets/objectTypes`, "PUT", request);
}
