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
  GetExecutionEffectSummaryRequest
    as _api_executor_GetExecutionEffectSummaryRequest,
  GetExecutionEffectSummaryResponse
    as _api_executor_GetExecutionEffectSummaryResponse,
} from "../__components.js";

/**
 * Returns a summary of effects for a given MonitorEvent provided a MonitorEventId.
 * Throws if the monitor event for the given ID does not exist.
 */
export async function getExecutionEffectSummary(
  ctx: ConjureContext,
  request: _api_executor_GetExecutionEffectSummaryRequest,
): Promise<_api_executor_GetExecutionEffectSummaryResponse> {
  return conjureFetch(
    ctx,
    `/executor/v0/monitors/executionEffectSummary`,
    "POST",
    request,
  );
}
