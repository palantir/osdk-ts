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
  ClientId as _api_ClientId,
  ClientInstallationRequestRid as _api_ClientInstallationRequestRid,
  OrganizationRid as _api_OrganizationRid,
} from "../__components.js";

/**
 * Gets all client installation requests rids for a client and organization.
 * This will include pending, closed, and approved/invoked requests.
 * To get the actual status of a request, use Approval APIs.
 *
 * Requires third-party-application:view-oauth-client on the client id and
 * third-party-application:view-organization on the organization rid.
 */
export async function getClientInstallationRequestRids(
  ctx: ConjureContext,
  clientId: _api_ClientId,
  organizationRid: _api_OrganizationRid,
): Promise<Array<_api_ClientInstallationRequestRid>> {
  return conjureFetch(
    ctx,
    `/client-installation-approvals/requests/${clientId}`,
    "GET",
    undefined,
    { organizationRid },
  );
}
