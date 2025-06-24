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
  UpdateExistingEventsRequest as _api_registry_UpdateExistingEventsRequest,
  UpdateExistingEventsResponse as _api_registry_UpdateExistingEventsResponse,
} from "../__components.js";

/**
 * For use by the timeseries spark job only.
 *
 * Updates existing monitor events to track the timeseries job progress and errors.
 */
export async function updateMonitorEventsForTimeseriesJob(
  ctx: ConjureContext,
  request: _api_registry_UpdateExistingEventsRequest,
): Promise<_api_registry_UpdateExistingEventsResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors/update-timeseries-job-events`,
    "POST",
    request,
  );
}
