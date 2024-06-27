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
import type { OrganizationRid } from "../../OrganizationRid.js";
import type { SetOrgSettingsRequest } from "../SetOrgSettingsRequest.js";
import type { SetOrgSettingsResponse } from "../SetOrgSettingsResponse.js";

/**
 * Endpoint to modify the organization-wide Ontology settings. User requires
 * `ontology:manage-org-settings` on the OrganizationRid.
 */
export async function setOrgSettings(
  ctx: ConjureContext,
  organizationRid: OrganizationRid,
  request: SetOrgSettingsRequest,
): Promise<SetOrgSettingsResponse> {
  return conjureFetch(
    ctx,
    `/organization/setSettings/${organizationRid}`,
    "PUT",
    request,
  );
}
