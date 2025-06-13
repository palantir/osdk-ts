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
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  PreviewUninstallResponse as _api_PreviewUninstallResponse,
} from "../__components.js";

/**
 * Returns resources that will be deleted during the block set uninstallation.
 *
 * This includes resources across ALL installation versions (not just the current version).
 * Resources that have already been successfully deleted in previous uninstallation attempts
 * will not be present in the response (and will not be deleted again). Hidden, implicitly deleted
 * or unsupported resources will also not be present in the response.
 *
 * Throws `BlockSetInstallationNotFound` if the given installation does not exist.
 *
 * Requires `marketplace:permanently-delete-installation` on `blockSetInstallationRid`.
 * Throws `PermanentlyDeleteBlockSetInstallationPermissionDenied` if the user does not have sufficient permissions.
 */
export async function previewUninstall(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
): Promise<_api_PreviewUninstallResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/${blockSetInstallationRid}/uninstall/preview`,
    "POST",
  );
}
