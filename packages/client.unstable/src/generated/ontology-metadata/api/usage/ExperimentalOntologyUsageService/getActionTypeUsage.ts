/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { GetActionTypeUsageRequest } from "../GetActionTypeUsageRequest.js";
import type { GetActionTypeUsageResponse } from "../GetActionTypeUsageResponse.js";

/**
 * Endpoint to load usage settings by day for an action type.
 * Will fail if internal-tables has not been installed on the stack, or return empty
 * if the data has not yet been indexed.
 * Needs 'ontology:view-action-type' on the ActionTypeRid.
 */
export async function getActionTypeUsage(
  ctx: ConjureContext,
  request: GetActionTypeUsageRequest,
): Promise<GetActionTypeUsageResponse> {
  return conjureFetch(ctx, `/usage/search`, "PUT", request);
}
