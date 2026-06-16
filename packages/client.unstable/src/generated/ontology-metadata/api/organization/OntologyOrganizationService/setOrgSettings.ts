/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import type { OrganizationRid as _api_OrganizationRid } from "../../__components.js";
import type {
  SetOrgSettingsRequest as _api_organization_SetOrgSettingsRequest,
  SetOrgSettingsResponse as _api_organization_SetOrgSettingsResponse,
} from "../__components.js";

/**
 * Endpoint to modify the organization-wide Ontology settings. User requires
 * `ontology:manage-org-settings` on the OrganizationRid.
 */
export async function setOrgSettings(
  ctx: ConjureContext,
  organizationRid: _api_OrganizationRid,
  request: _api_organization_SetOrgSettingsRequest,
): Promise<_api_organization_SetOrgSettingsResponse> {
  return conjureFetch(
    ctx,
    `/organization/setSettings/${organizationRid}`,
    "PUT",
    request,
  );
}
