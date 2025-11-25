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
import type { OrganizationRid as _api_OrganizationRid } from "../../../api/__components.js";
import type {
  ListProductIdsForOrganizationRequest
    as _installmanager_api_ListProductIdsForOrganizationRequest,
  ListProductIdsForOrganizationResponse
    as _installmanager_api_ListProductIdsForOrganizationResponse,
} from "../__components.js";

/**
 * Lists all product ids of products that have failed or managed installations in an organization.
 * This endpoint relies on cache so results may be stale by up to 5 minutes.
 *
 * Requires `marketplace:manage-foundry-product-installations` on the organization, which is granted to
 * organization admins by default.
 */
export async function listProductIdsForOrganization(
  ctx: ConjureContext,
  organizationRid: _api_OrganizationRid,
  request: _installmanager_api_ListProductIdsForOrganizationRequest,
): Promise<_installmanager_api_ListProductIdsForOrganizationResponse> {
  return conjureFetch(
    ctx,
    `/install-manager-admin/organization/${organizationRid}/product-ids/list`,
    "POST",
    request,
  );
}
