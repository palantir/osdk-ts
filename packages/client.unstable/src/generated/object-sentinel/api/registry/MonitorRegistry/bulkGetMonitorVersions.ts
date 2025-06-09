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
  BulkGetMonitorVersionsRequest as _api_registry_BulkGetMonitorVersionsRequest,
  BulkGetMonitorVersionsResponse
    as _api_registry_BulkGetMonitorVersionsResponse,
} from "../__components.js";

/**
 * Returns the monitor metadata and the data associated to each requested monitor version of that monitor rid.
 * Can only request 100 monitors or less at one time.
 * If a monitor is deleted it will be omitted rather than an exception thrown.
 * Throws:
 * - TooManyMonitorsRequested: If too many monitorLocators were sent in the request.
 */
export async function bulkGetMonitorVersions(
  ctx: ConjureContext,
  request: _api_registry_BulkGetMonitorVersionsRequest,
): Promise<_api_registry_BulkGetMonitorVersionsResponse> {
  return conjureFetch(ctx, `/registry/v0/monitors-getVersions`, "PUT", request);
}
