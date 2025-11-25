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
} from "../../../api/__components.js";
import type {
  DeleteInstallationRequest as _installmanager_api_DeleteInstallationRequest,
  DeleteInstallationResponse as _installmanager_api_DeleteInstallationResponse,
} from "../__components.js";

/**
 * Requests the deletion of the managed installation from the namespace. This performs a soft-deletion of the
 * underlying installation, if it exists. Deletes any failed installation request from storage if the managed
 * installation does not yet exist.
 */
export async function deleteInstallation(
  ctx: ConjureContext,
  namespaceRid: _api_NamespaceRid,
  installationName: _api_ManagedInstallationName,
  request: _installmanager_api_DeleteInstallationRequest,
): Promise<_installmanager_api_DeleteInstallationResponse> {
  return conjureFetch(
    ctx,
    `/install-manager/namespaces/${namespaceRid}/installations/${installationName}`,
    "DELETE",
    request,
  );
}
