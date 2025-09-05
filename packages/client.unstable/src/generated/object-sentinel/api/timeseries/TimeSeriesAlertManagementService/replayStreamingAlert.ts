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
  ReplayStreamingAlertRequest as _api_timeseries_ReplayStreamingAlertRequest,
  ReplayStreamingAlertResponse as _api_timeseries_ReplayStreamingAlertResponse,
} from "../__components.js";

/**
 * Cancels any running time series alerting jobs and reruns it with the configured replay options on the inputs.
 * This has the additional effect of clearing existing serialized streaming state and picks up any new features
 * that require streaming state serialization breaks.
 */
export async function replayStreamingAlert(
  ctx: ConjureContext,
  request: _api_timeseries_ReplayStreamingAlertRequest,
): Promise<_api_timeseries_ReplayStreamingAlertResponse> {
  return conjureFetch(
    ctx,
    `/time-series/alert/v0/streaming/replay`,
    "POST",
    request,
  );
}
