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
  GetClientInstallationRequestsRequest
    as _api_GetClientInstallationRequestsRequest,
  GetClientInstallationRequestsResponse
    as _api_GetClientInstallationRequestsResponse,
} from "../__components.js";

/**
 * Provides metadata for client installation requests. This endpoint will return
 * metadata for pending, closed, and approved/invoked requests.
 * To get the actual status of a request, use Approval APIs.
 *
 * Requires third-party-application:manage-client-installation-request on each Approval
 * request. Requests that either do not exist, or on which the caller does not have
 * permissions, will be omitted from the response.
 *
 * At most 100 requests can be requested.
 */
export async function getClientInstallationRequests(
  ctx: ConjureContext,
  request: _api_GetClientInstallationRequestsRequest,
): Promise<_api_GetClientInstallationRequestsResponse> {
  return conjureFetch(
    ctx,
    `/client-installation-approvals/requests`,
    "PUT",
    request,
  );
}
