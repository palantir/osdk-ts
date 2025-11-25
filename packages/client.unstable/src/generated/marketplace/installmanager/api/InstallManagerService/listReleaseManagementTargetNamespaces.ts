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
  ListReleaseManagementTargetNamespacesRequest
    as _installmanager_api_ListReleaseManagementTargetNamespacesRequest,
  ListReleaseManagementTargetNamespacesResponse
    as _installmanager_api_ListReleaseManagementTargetNamespacesResponse,
} from "../__components.js";

/**
 * Get the list of all namespaces that are configured for release management workflows, which are workflows
 * where there are stored releaseManagementSettings and the isTargetEnvironment field in those settings
 * is true.
 *
 * The results will be filtered down the list of namespaces that the user has viewer permissions on, even
 * if install permissions are missing. This endpoint does not require marketplace:use-install-manager on the
 * marketplace root rid: permissions will be fully checked on the namespace rid instead.
 *
 * Returns a maximum of 200 namespaces. If more than 200 visible namespaces are configured for release
 * management, the endpoint will return the first 200 namespaces sorted by priority, rather than throwing
 * an error.
 */
export async function listReleaseManagementTargetNamespaces(
  ctx: ConjureContext,
  request: _installmanager_api_ListReleaseManagementTargetNamespacesRequest,
): Promise<_installmanager_api_ListReleaseManagementTargetNamespacesResponse> {
  return conjureFetch(
    ctx,
    `/install-manager/namespaces/release-management`,
    "POST",
    request,
  );
}
