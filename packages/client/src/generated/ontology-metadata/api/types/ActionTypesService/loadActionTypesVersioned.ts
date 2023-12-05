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
import type { ActionTypeLoadVersionedRequest } from "../../ActionTypeLoadVersionedRequest.js";
import type { ActionTypeLoadVersionedResponse } from "../../ActionTypeLoadVersionedResponse.js";

/**
 * Endpoint to batch load Action Types at requested versions. The returned ActionTypeLoadVersionedResponse will only
 * contain Action Types that are visible to the requesting user.
 * It throws if any of the requested VersionedActionTypeRid(s) is not found or if more than 100 entities are requested.
 */
export async function loadActionTypesVersioned(
  ctx: ConjureContext,
  request: ActionTypeLoadVersionedRequest,
): Promise<ActionTypeLoadVersionedResponse> {
  return conjureFetch(ctx, `/actions/types/load/versioned`, "POST", request);
}
