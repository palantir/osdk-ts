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
import type { GetObjectsPageRequest } from "../GetObjectsPageRequest.js";
import type { GetObjectsPageResponse } from "../GetObjectsPageResponse.js";

/**
 * Fetches object rids on requested page of evaluated object set. If more objects are available, the returned pageToken can be used to fetch the subsequent page. Note that page tokens are *not* long-lived and *may* get invalidated (for example following updates to the underlying index or indices, or after a few minutes).
 * Note that the service currently does not provide guarantees around the consistency of returned results. In particular, any state changes to the underlying indices can cause duplicate results to be returned or some results to be skipped between subsequent page requests.
 */
export async function getObjectsPage(
  ctx: ConjureContext,
  request: GetObjectsPageRequest,
  backend: Backend | undefined,
): Promise<GetObjectsPageResponse> {
  return conjureFetch(ctx, `/objectSets/objects`, "PUT", request);
}
