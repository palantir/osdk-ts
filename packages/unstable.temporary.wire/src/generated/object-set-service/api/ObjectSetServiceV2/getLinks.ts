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
import type { GetLinksRequest } from "../GetLinksRequest.js";
import type { GetLinksResponse } from "../GetLinksResponse.js";

/**
 * Returns a page of all `FoundryLink`s for a given relation based on a list of object identifiers.
 * The API supports fetching links for maximum 5_000 ObjectIdentifiers in a single request.
 *
 * Results are always limited to the maximum of 100_000 links, without applying any particular order. Specifically,
 * this means that if total links count is above 100_000 then the whole result set should be considered partial,
 * i.e. there is no guarantee that for a given object all links have been retrieved.
 *
 * Note that this endpoint does not check if objects referenced by the returned links actually exist. For instance,
 * when primary keys in the join table become stale, it will still return links based on the stale join table records.
 */
export async function getLinks(
  ctx: ConjureContext,
  request: GetLinksRequest,
): Promise<GetLinksResponse> {
  return conjureFetch(ctx, `/links`, "PUT", request);
}
