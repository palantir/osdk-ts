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
import type { GetAllObjectsInitialPageRequest } from "../GetAllObjectsInitialPageRequest.js";
import type { GetAllObjectsInitialPageResponse } from "../GetAllObjectsInitialPageResponse.js";

/**
 * Returns an initial page of all `FoundryObject`s of an evaluated object set.
 *
 * Except for object types with streaming input datasources, this endpoint guarantees consistency and will throw if an
 * inconsistency is detected.
 *
 * For object types with streaming input datasources, this endpoint does not guarantee consistency, and may or
 * may not throw if an inconsistency is detected. In this case, frequent exceptions are expected and clients
 * should use `getTopObjectsInitialPage` instead which will not throw across index changes.
 *
 * Consumers should confirm that the total number of received unique primary keys matches the value of
 * the total number of results returned in response to the initial page request.
 */
export async function getAllObjectsInitialPage(
  ctx: ConjureContext,
  request: GetAllObjectsInitialPageRequest,
  backend: Backend | undefined,
): Promise<GetAllObjectsInitialPageResponse> {
  return conjureFetch(ctx, `/objectSets/objects/all/initial`, "POST", request);
}
