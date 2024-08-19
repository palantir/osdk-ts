/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { ApplicationRid } from "../ApplicationRid.js";
import type { GetRequestDurationMetricsRequest } from "../GetRequestDurationMetricsRequest.js";
import type { GetRequestDurationMetricsResponse } from "../GetRequestDurationMetricsResponse.js";

/**
 * Get request duration metrics (in microseconds) for the specified application over the last
 * 30 days.
 * Will fail if internal-tables is not installed on the stack, or return empty if the usage data has not yet
 * been indexed.
 *
 * Requires third-party-application:view-application on the specified application.
 */
export async function getRequestDurationMetrics(
  ctx: ConjureContext,
  applicationRid: ApplicationRid,
  request: GetRequestDurationMetricsRequest,
): Promise<GetRequestDurationMetricsResponse> {
  return conjureFetch(
    ctx,
    `/application-metrics/${applicationRid}/requestDurationMetrics`,
    "PUT",
    request,
  );
}
