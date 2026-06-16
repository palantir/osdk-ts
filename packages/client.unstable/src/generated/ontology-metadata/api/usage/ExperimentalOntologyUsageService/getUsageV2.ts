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
  GetUsageRequestV2 as _api_usage_GetUsageRequestV2,
  GetUsageResponseV2 as _api_usage_GetUsageResponseV2,
} from "../__components.js";

/**
 * Endpoint to get the usage of ontology entities over the last 30 days.
 * Will fail if internal-tables is not installed on the stack, or return empty if the usage data has not yet
 * been indexed.
 */
export async function getUsageV2(
  ctx: ConjureContext,
  request: _api_usage_GetUsageRequestV2,
): Promise<_api_usage_GetUsageResponseV2> {
  return conjureFetch(ctx, `/usage/search/getUsageV2`, "PUT", request);
}
