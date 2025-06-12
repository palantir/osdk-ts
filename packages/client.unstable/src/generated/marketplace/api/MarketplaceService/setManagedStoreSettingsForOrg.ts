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
  OrganizationRid as _api_OrganizationRid,
  SetManagedStoreSettingsForOrgRequest
    as _api_SetManagedStoreSettingsForOrgRequest,
  SetManagedStoreSettingsForOrgResponse
    as _api_SetManagedStoreSettingsForOrgResponse,
} from "../__components.js";

/**
 * Updates settings for the requested managed stores for a given orgRid.
 * Permissions on the stores will be updated for users in the given org.
 * The marketplaceRid must have existing settings for organizationRid already, else we will throw
 * `InvalidAdminSettingsRequested`.
 * For admin users with "marketplace:manage-org-settings" on the id.OrganizationRid.
 */
export async function setManagedStoreSettingsForOrg(
  ctx: ConjureContext,
  organizationRid: _api_OrganizationRid,
  setManagedStoreSettingsForOrgRequest:
    _api_SetManagedStoreSettingsForOrgRequest,
): Promise<_api_SetManagedStoreSettingsForOrgResponse> {
  return conjureFetch(
    ctx,
    `/marketplaces/managedStoresSettings/${organizationRid}`,
    "POST",
    setManagedStoreSettingsForOrgRequest,
  );
}
