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
import type { BulkGetApplicationsRequest } from "../BulkGetApplicationsRequest.js";
import type { BulkGetApplicationsResponse } from "../BulkGetApplicationsResponse.js";

/**
 * Bulk load third-party application definitions at specified versions. At most 100
 * applications may be loaded in a single request.
 *
 * Only applications where the user has third-party-application:view-application on
 * the application rid will be returned.
 */
export async function bulkGetApplications(
  ctx: ConjureContext,
  request: BulkGetApplicationsRequest,
): Promise<BulkGetApplicationsResponse> {
  return conjureFetch(ctx, `/applications/bulk`, "PUT", request);
}
