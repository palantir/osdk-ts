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
  GetAutomationTriggerDependenciesResponse
    as _api_metrics_GetAutomationTriggerDependenciesResponse,
  GetDependentAutomationsRequest as _api_metrics_GetDependentAutomationsRequest,
} from "../__components.js";

/**
 * Traverses dependent automations up to the provided depth. For each automation, up to 1,000 upstream and
 * downstream automations are returned, and are only included if they are in the last 10,000 instances.
 * Dependencies are removed after 1 hour if either automation is edited.
 */
export async function getAutomationTriggerDependencies(
  ctx: ConjureContext,
  request: _api_metrics_GetDependentAutomationsRequest,
): Promise<_api_metrics_GetAutomationTriggerDependenciesResponse> {
  return conjureFetch(
    ctx,
    `/monitorMetrics/dependentAutomations`,
    "POST",
    request,
  );
}
