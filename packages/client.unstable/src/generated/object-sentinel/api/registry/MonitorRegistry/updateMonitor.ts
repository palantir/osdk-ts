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
import type { MonitorRid as _api_MonitorRid } from "../../__components.js";
import type {
  UpdateMonitorRequest as _api_registry_UpdateMonitorRequest,
  UpdateMonitorResponse as _api_registry_UpdateMonitorResponse,
} from "../__components.js";

/**
 * Updates a monitor's metadata and logic, and creates a new monitor version. A separate call must be made to
 * publish the monitor.
 * Throws:
 * - EditMonitorPermissionDenied: if the user has insufficient permissions to edit this monitor.
 * - NotAllowedToSubscribeOthersToThisTypeOfEffect: if the user attempts to subscribe others to effects that are
 * not allowed.
 * - InvalidMonitor: if the monitor metadata or logic is invalid.
 */
export async function updateMonitor(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  request: _api_registry_UpdateMonitorRequest,
): Promise<_api_registry_UpdateMonitorResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors/${monitorRid}`,
    "POST",
    request,
  );
}
