/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { conjureFetch, type ConjureContext } from "conjure-lite";

import type { UntrashEntitiesRequest as _api_modification_UntrashEntitiesRequest } from "../../modification/__components.js";
import type { UntrashEntitiesResponse as _api_modification_UntrashEntitiesResponse } from "../../modification/__components.js";

/**
 * Untrash (restore) previously-trashed ontology entities onto a branch for review; see UntrashEntitiesRequest
 * for routing and staging semantics. Not supported on Edge (untrashing requires the Branch Service, Compass
 * resource management, and global<->local branch mapping, which are cloud-only)
 */
export async function untrashEntities(
  ctx: ConjureContext,
  onBehalfOf: string | null | undefined,
  request: _api_modification_UntrashEntitiesRequest,
): Promise<_api_modification_UntrashEntitiesResponse> {
  return conjureFetch(ctx, `/ontology/v2/untrash`, "POST", request);
}
