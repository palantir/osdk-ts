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
  GetOrgSettingsRequest as _api_organization_GetOrgSettingsRequest,
  GetOrgSettingsResponse as _api_organization_GetOrgSettingsResponse,
} from "../__components.js";

/**
 * Endpoint to load organization-wide Ontology settings. Returns either the stored value
 * if one was set for the organization or otherwise the default value.
 * Throws if the user does not have permissions to view the organization metadata in multipass or if the
 * organization doesn't exist.
 */
export async function getOrgSettings(
  ctx: ConjureContext,
  organizationRid: _api_OrganizationRid,
  request: _api_organization_GetOrgSettingsRequest,
): Promise<_api_organization_GetOrgSettingsResponse> {
  return conjureFetch(
    ctx,
    `/organization/getSettings/${organizationRid}`,
    "POST",
    request,
  );
}
