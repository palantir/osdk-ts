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
import type { Backend } from "../Backend.js";
import type { GetTopObjectsNextPageRequest } from "../GetTopObjectsNextPageRequest.js";
import type { GetTopObjectsNextPageResponse } from "../GetTopObjectsNextPageResponse.js";

/**
 * Returns the next page of top `FoundryObject`s of an evaluated object set based on specified sort criteria.
 *
 * For OSv1 objects, the total number of results across all pages is limited to 10_000.
 * For OSv2 objects, there are no total result limits.
 *
 * This endpoint does not provide consistency guarantees. Any state changes to the underlying indices can result
 * in duplicate results or skipped results.
 */
export async function getTopObjectsNextPage(
  ctx: ConjureContext,
  request: GetTopObjectsNextPageRequest,
  backend: Backend | undefined,
): Promise<GetTopObjectsNextPageResponse> {
  return conjureFetch(ctx, `/objectSets/objects/top/next`, "PUT", request);
}
