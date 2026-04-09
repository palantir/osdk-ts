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
import type {
  BatchGetEnrichedActionTypeMetadataRequest
    as _api_BatchGetEnrichedActionTypeMetadataRequest,
  BatchGetEnrichedActionTypeMetadataResponse
    as _api_BatchGetEnrichedActionTypeMetadataResponse,
} from "../../__components.js";

/**
 * Endpoint to load enriched ActionType metadata that is not present in the ActionTypeMetadata that is
 * normally returned when loading ActionTypes.
 *
 * Requires `ontology:view-action-type` on the provided ActionTypeRids.
 * At most 100 ActionTypes can be requested per batch.
 */
export async function batchGetEnrichedActionTypeMetadata(
  ctx: ConjureContext,
  request: _api_BatchGetEnrichedActionTypeMetadataRequest,
): Promise<_api_BatchGetEnrichedActionTypeMetadataResponse> {
  return conjureFetch(
    ctx,
    `/actions/types/load/enriched/metadata`,
    "PUT",
    request,
  );
}
