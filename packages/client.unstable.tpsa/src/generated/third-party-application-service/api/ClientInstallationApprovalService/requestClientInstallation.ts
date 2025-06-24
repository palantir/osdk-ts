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
  ClientInstallationApprovalRequest as _api_ClientInstallationApprovalRequest,
  OrganizationRid as _api_OrganizationRid,
  RequestClientInstallationRequest as _api_RequestClientInstallationRequest,
} from "../__components.js";

/**
 * Creates a request to install a client for an organization, setting up an
 * Approval task for the request, that will need to be approved by admins of
 * the organization.
 *
 * Requires third-party-application:view-oauth-client on the client id and
 * third-party-application:view-organization on the organization rid.
 */
export async function requestClientInstallation(
  ctx: ConjureContext,
  clientId: _api_ClientId,
  organizationRid: _api_OrganizationRid,
  request: _api_RequestClientInstallationRequest,
): Promise<_api_ClientInstallationApprovalRequest> {
  return conjureFetch(
    ctx,
    `/client-installation-approvals/request/${clientId}`,
    "POST",
    request,
    { organizationRid },
  );
}
