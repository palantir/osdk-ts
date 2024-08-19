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
import type { BulkGetApplicationsForClientsRequest } from "../BulkGetApplicationsForClientsRequest.js";
import type { BulkGetApplicationsForClientsResponse } from "../BulkGetApplicationsForClientsResponse.js";

/**
 * Bulk load the RIDs of the third-party applications associated with the given
 * client IDs. At most 100 clients may be loaded in a single request.
 *
 * Only clients where the user has third-party-application:view-oauth-client on the
 * client rid based on its id will be returned.
 */
export async function bulkGetApplicationsForClients(
  ctx: ConjureContext,
  request: BulkGetApplicationsForClientsRequest,
): Promise<BulkGetApplicationsForClientsResponse> {
  return conjureFetch(
    ctx,
    `/application-clients/for-client/bulk`,
    "PUT",
    request,
  );
}
