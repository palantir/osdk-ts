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
  StreamingTimeseriesMonitorGroupRid
    as _api_timeseries_StreamingTimeseriesMonitorGroupRid,
  UpdateStreamingTimeseriesTemplateInstancesRequest
    as _api_timeseries_UpdateStreamingTimeseriesTemplateInstancesRequest,
  UpdateStreamingTimeseriesTemplateInstancesResponse
    as _api_timeseries_UpdateStreamingTimeseriesTemplateInstancesResponse,
} from "../__components.js";

/**
 * Updates the compiled template instances for the streaming timeseries job. Uses streaming monitor group rid for
 * authentication. Throws if the monitor group has been updated before.
 *
 * This endpoint should only be used by the streaming job.
 */
export async function updateStreamingTimeseriesTemplateInstances(
  ctx: ConjureContext,
  monitorGroupRid: _api_timeseries_StreamingTimeseriesMonitorGroupRid,
  request: _api_timeseries_UpdateStreamingTimeseriesTemplateInstancesRequest,
): Promise<_api_timeseries_UpdateStreamingTimeseriesTemplateInstancesResponse> {
  return conjureFetch(
    ctx,
    `/time-series/alert/v0/streaming/update-template-instances/${monitorGroupRid}`,
    "POST",
    request,
  );
}
