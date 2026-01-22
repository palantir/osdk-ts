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
  SetUsageSettingsByOrganizationRequest
    as _api_usage_SetUsageSettingsByOrganizationRequest,
  SetUsageSettingsByOrganizationResponse
    as _api_usage_SetUsageSettingsByOrganizationResponse,
} from "../__components.js";

/**
 * Endpoint to modify the Ontology Usage setting for an organization. User requires
 * `ontology:manage-metrics` on the OrganizationRid.
 */
export async function setUsageSettingsByOrganization(
  ctx: ConjureContext,
  organizationRid: _api_OrganizationRid,
  request: _api_usage_SetUsageSettingsByOrganizationRequest,
): Promise<_api_usage_SetUsageSettingsByOrganizationResponse> {
  return conjureFetch(
    ctx,
    `/usage/setSettings/organization/${organizationRid}`,
    "POST",
    request,
  );
}
