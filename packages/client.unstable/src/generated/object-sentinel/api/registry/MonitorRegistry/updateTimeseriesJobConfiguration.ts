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
  UpdateTimeseriesJobConfigurationRequest
    as _api_registry_UpdateTimeseriesJobConfigurationRequest,
  UpdateTimeseriesJobConfigurationResponse
    as _api_registry_UpdateTimeseriesJobConfigurationResponse,
} from "../__components.js";

/**
 * Updates the configuration of the timeseries job which evaluates the timeseries condition monitor.
 */
export async function updateTimeseriesJobConfiguration(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  request: _api_registry_UpdateTimeseriesJobConfigurationRequest,
): Promise<_api_registry_UpdateTimeseriesJobConfigurationResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/update-timeseries-job-configuration/${monitorRid}`,
    "POST",
    request,
  );
}
