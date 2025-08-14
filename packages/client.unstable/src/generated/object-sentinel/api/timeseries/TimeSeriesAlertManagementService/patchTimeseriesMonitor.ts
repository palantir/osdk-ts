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
  PatchTimeseriesMonitorRequest
    as _api_timeseries_PatchTimeseriesMonitorRequest,
  PatchTimeseriesMonitorResponse
    as _api_timeseries_PatchTimeseriesMonitorResponse,
} from "../__components.js";

/**
 * DEBUG endpoint to patch a Timeseries monitor with a given config option. This endpoint should not be relied on
 * and can be deleted at any time.
 */
export async function patchTimeseriesMonitor(
  ctx: ConjureContext,
  request: _api_timeseries_PatchTimeseriesMonitorRequest,
): Promise<_api_timeseries_PatchTimeseriesMonitorResponse> {
  return conjureFetch(
    ctx,
    `/time-series/alert/v0/monitor/patch`,
    "POST",
    request,
  );
}
