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
  UninstallRequest as _api_UninstallRequest,
  UninstallResponse as _api_UninstallResponse,
} from "../__components.js";

/**
 * Uninstalls a block set installation by:
 * 1. Unlocking the installation.
 * 2. Deleting resources across ALL installation versions (not just the current version).
 * 3. Deleting the install location Compass folder (if it is empty).
 * 4. Deleting the block set installation Compass resource.
 *
 * Use the `previewInstallation` endpoint to get all resources that are going to be deleted during uninstallation.
 *
 * If the uninstall fails, the response might contain `BlockSetShapesRemovalError` and/or UninstallErrors
 * (e.g. `NonEmptyCompassInstallLocation`) errors. In such cases, the installation will be left in an unlocked
 * state and can still be fetched using the normal endpoints. Be aware that the installation metadata has not
 * been modified and therefore some installation outputs may now reference non-existing resources, as those
 * resources have been deleted during the uninstallation attempt. Note that any subsequent uninstallation retry
 * will not try to delete resources that have already been successfully deleted during previous uninstallation
 * attempts, thereby avoiding `Not Found` errors.
 *
 * For permanent deletion, setting the force delete flag to true will ignore encountered errors and proceed
 * with deletion of the installation and Compass install location. If the install location is not empty
 * (if we return NonEmptyCompassInstallLocation), we will also ignore this encountered error (and thus delete
 * the installation in compass and from store) however we will not delete the install location
 * (e.g. the project).
 *
 * Throws `BlockSetInstallationNotFound` if the given installation does not exist.
 * Throws `PermanentlyDeleteInstallationWhileInstallationJobInProgress` if user tried to permanently delete
 * a block set installation while the installation job was still in progress.
 *
 * Requires `marketplace:permanently-delete-installation` on `blockSetInstallationRid`.
 * Throws `PermanentlyDeleteBlockSetInstallationPermissionDenied` if the user does not have sufficient permissions.
 */
export async function uninstall(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
  request: _api_UninstallRequest,
): Promise<_api_UninstallResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/${blockSetInstallationRid}/uninstall`,
    "POST",
    request,
  );
}
