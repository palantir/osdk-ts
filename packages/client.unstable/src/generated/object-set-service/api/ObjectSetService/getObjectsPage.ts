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
  Backend as _api_Backend,
  GetObjectsPageRequest as _api_GetObjectsPageRequest,
  GetObjectsPageResponse as _api_GetObjectsPageResponse,
} from "../__components.js";

/**
 * Fetches object rids on requested page of evaluated object set. If more objects are available, the returned pageToken can be used to fetch the subsequent page. Note that page tokens are *not* long-lived and *may* get invalidated (for example following updates to the underlying index or indices, or after a few minutes).
 * Note that the service currently does not provide guarantees around the consistency of returned results. In particular, any state changes to the underlying indices can cause duplicate results to be returned or some results to be skipped between subsequent page requests.
 * WARNING: Throws if the object set references object types containing object type derived properties (OTDPs).
 */
export async function getObjectsPage(
  ctx: ConjureContext,
  request: _api_GetObjectsPageRequest,
  backend: _api_Backend | null | undefined,
): Promise<_api_GetObjectsPageResponse> {
  return conjureFetch(ctx, `/objectSets/objects`, "PUT", request);
}
