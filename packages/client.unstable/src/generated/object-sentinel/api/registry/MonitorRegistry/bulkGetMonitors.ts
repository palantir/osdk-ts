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
  BulkGetMonitorsRequest as _api_registry_BulkGetMonitorsRequest,
  BulkGetMonitorsResponse as _api_registry_BulkGetMonitorsResponse,
} from "../__components.js";

/**
 * Returns the latest monitors for all the requested monitor rids.
 * Throws:
 * - TooManyMonitorsRequested: If too many monitorRids were sent in the request.
 */
export async function bulkGetMonitors(
  ctx: ConjureContext,
  request: _api_registry_BulkGetMonitorsRequest,
): Promise<_api_registry_BulkGetMonitorsResponse> {
  return conjureFetch(ctx, `/registry/v0/monitors-getMonitors`, "PUT", request);
}
