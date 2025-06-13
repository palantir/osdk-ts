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
import type { NamespaceRid as _api_NamespaceRid } from "../../../api/__components.js";
import type { ReleaseManagementNamespaceSettings as _installmanager_api_ReleaseManagementNamespaceSettings } from "../__components.js";

/**
 * Updates the settings related to Release Management for a managed namespace.
 *
 * The user must have permission to edit namespace settings, which requires marketplace:manage-namespace-settings
 * on the namespace rid. This endpoint does NOT require marketplace:use-install-manager on the marketplace root
 * rid -permissions will be fully checked on the namespace rid instead.
 *
 * - throws PutNamespaceSettingsPermissionDenied if the user does not have permission to edit namespace settings.
 * - throws NamespaceHasNoEnrollmentRid if the namespace does not have an owning enrollment RID.
 */
export async function putNamespaceReleaseManagementSettings(
  ctx: ConjureContext,
  namespaceRid: _api_NamespaceRid,
  settings: _installmanager_api_ReleaseManagementNamespaceSettings,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/install-manager/namespaces/${namespaceRid}/release-management-settings`,
    "PUT",
    settings,
  );
}
