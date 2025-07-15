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
  GetStreamingTimeseriesMonitorGroupRequest
    as _api_registry_GetStreamingTimeseriesMonitorGroupRequest,
  GetStreamingTimeseriesMonitorGroupResponse
    as _api_registry_GetStreamingTimeseriesMonitorGroupResponse,
} from "../__components.js";

/**
 * Gets the monitors in the streaming timeseries monitor group. Throws if there is mismatch between the monitor
 * group rid in the request and the one stored or if permission is insufficient.
 */
export async function getStreamingTimeseriesMonitorGroup(
  ctx: ConjureContext,
  request: _api_registry_GetStreamingTimeseriesMonitorGroupRequest,
): Promise<_api_registry_GetStreamingTimeseriesMonitorGroupResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/get-streaming-timeseries-monitor-group`,
    "POST",
    request,
  );
}
