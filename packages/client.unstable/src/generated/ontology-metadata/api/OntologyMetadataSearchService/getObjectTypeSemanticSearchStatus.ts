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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { GetObjectTypeSemanticSearchStatusResponse as _api_search_GetObjectTypeSemanticSearchStatusResponse } from "../search/__components.js";

/**
 * Endpoint to check if semantic search on object types is available for the requesting user.
 * Returns whether it is enabled and, if not, the primary reason why it is disabled.
 */
export async function getObjectTypeSemanticSearchStatus(
  ctx: ConjureContext,
): Promise<_api_search_GetObjectTypeSemanticSearchStatusResponse> {
  return conjureFetch(
    ctx,
    `/ontology/search/v0/objectTypeSemanticSearchStatus`,
    "GET",
  );
}
