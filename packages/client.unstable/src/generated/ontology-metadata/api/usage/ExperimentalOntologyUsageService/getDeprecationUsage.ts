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
  GetDeprecationUsageRequest as _api_usage_GetDeprecationUsageRequest,
  GetDeprecationUsageResponse as _api_usage_GetDeprecationUsageResponse,
} from "../__components.js";

/**
 * Endpoint to get the daily deprecation usage of an ontology entity over the last 30 days.
 *
 * Might return empty results if internal-tables is not installed on the stack, or if the usage data has not yet
 * been indexed.
 *
 * Permissions required:
 * - `ontology:view-object-type` on the ObjectTypeRid or
 * - `ontology:view-relation` on the LinkTypeRid
 */
export async function getDeprecationUsage(
  ctx: ConjureContext,
  request: _api_usage_GetDeprecationUsageRequest,
): Promise<_api_usage_GetDeprecationUsageResponse> {
  return conjureFetch(ctx, `/usage/search/getDeprecationUsage`, "PUT", request);
}
