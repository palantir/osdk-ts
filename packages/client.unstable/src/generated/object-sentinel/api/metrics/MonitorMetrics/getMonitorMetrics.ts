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
import type { GetMonitorMetricsResponse as _api_metrics_GetMonitorMetricsResponse } from "../__components.js";

/**
 * Gets aggregate metrics for a monitor. Requires view permissions on the monitor.
 */
export async function getMonitorMetrics(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
): Promise<_api_metrics_GetMonitorMetricsResponse> {
  return conjureFetch(ctx, `/monitorMetrics/metrics/${monitorRid}`, "GET");
}
