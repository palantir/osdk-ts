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
  GetManagedStoresSettingsForOrgResponse
    as _api_GetManagedStoresSettingsForOrgResponse,
  OrganizationRid as _api_OrganizationRid,
} from "../__components.js";

/**
 * Returns all managed stores for org that administrative settings can be applied to and corresponding
 * permissions settings for the store.
 * For admin users with "marketplace:view-org-settings" on the id.OrganizationRid.
 */
export async function getManagedStoresSettingsForOrg(
  ctx: ConjureContext,
  organizationRid: _api_OrganizationRid,
): Promise<_api_GetManagedStoresSettingsForOrgResponse> {
  return conjureFetch(
    ctx,
    `/marketplaces/managedStoresSettings/${organizationRid}`,
    "GET",
  );
}
