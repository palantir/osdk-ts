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
  ManagedInstallationName as _api_ManagedInstallationName,
  NamespaceRid as _api_NamespaceRid,
  OrganizationRid as _api_OrganizationRid,
} from "../../../api/__components.js";
import type { GetInstallationResponse as _installmanager_api_GetInstallationResponse } from "../__components.js";

/**
 * Gets an installation or a failed installation creation request by name.
 */
export async function getInstallation(
  ctx: ConjureContext,
  organizationRid: _api_OrganizationRid,
  namespaceRid: _api_NamespaceRid,
  installationName: _api_ManagedInstallationName,
): Promise<_installmanager_api_GetInstallationResponse> {
  return conjureFetch(
    ctx,
    `/install-manager-admin/organization/${organizationRid}/namespace/${namespaceRid}/installation/${installationName}`,
    "GET",
  );
}
