/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import type { AggregateRequest } from "../AggregateRequest.js";
import type { AggregateResponse } from "../AggregateResponse.js";
import type { Backend } from "../Backend.js";

/**
 * Groups objects in provided Object Set into defined buckets and possibly collects metrics for such buckets. Returns computed metrics.
 * WARNING: Please note that for Phonograph2-backed OSS, the results of some aggregations may be approximate under certain conditions. Please refer to the aggregations documentation for more detailed information.
 */
export async function aggregate(
  ctx: ConjureContext,
  request: AggregateRequest,
  backend: Backend | undefined,
): Promise<AggregateResponse> {
  return conjureFetch(ctx, `/aggregate`, "PUT", request);
}
