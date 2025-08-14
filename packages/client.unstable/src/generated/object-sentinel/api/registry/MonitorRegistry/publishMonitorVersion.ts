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
  MonitorRid as _api_MonitorRid,
  MonitorVersion as _api_MonitorVersion,
} from "../../__components.js";
import type {
  PublishMonitorVersionRequest as _api_registry_PublishMonitorVersionRequest,
  PublishMonitorVersionResponse as _api_registry_PublishMonitorVersionResponse,
} from "../__components.js";

/**
 * Publishes a specific version of a monitor. This unpublishes other versions of the monitor. Only the published
 * monitor can be triggered.
 * Throws:
 * - EditMonitorPermissionDenied: if the user has insufficient permissions to edit this monitor.
 */
export async function publishMonitorVersion(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  monitorVersion: _api_MonitorVersion,
  request: _api_registry_PublishMonitorVersionRequest,
): Promise<_api_registry_PublishMonitorVersionResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors/${monitorRid}/versions/${monitorVersion}/publish`,
    "POST",
    request,
  );
}
