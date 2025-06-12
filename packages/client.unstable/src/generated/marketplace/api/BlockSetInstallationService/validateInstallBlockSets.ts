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
  InstallBlockSetsRequest as _api_InstallBlockSetsRequest,
  ValidateInstallBlockSetsResponse as _api_ValidateInstallBlockSetsResponse,
} from "../__components.js";

/**
 * Validates correctness of the InstallBlockSetsRequest, which is a prerequiste for starting an installation job.
 *
 * May cache results from previous calls to this endpoint -  see
 * DefaultOwningServicesInstallationRequestValidator.validationErrorCache as an an example implementation
 * of the cache.
 *
 * Throws `InstallWithPreallocatedJobRidPermissionDenied` if `InstallBlockSetsRequest.preallocatedJobRid`
 * is provided by an external user.
 * Throws `BlockSet:InstallableBlockSetVersionNotFound` if a specified `InstallableBlockSetVersionId`
 * is not found.
 * Throws `Marketplace:LocalMarketplaceNotFound` if the user does not have
 * `marketplace:read-local-marketplace` operation on the marketplace they're installing from.
 * Throws `Marketplace:InstallFromMarketplacePermissionDenied` if the user does not have
 * `marketplace:install-from-local-marketplace` operation on the marketplace they're installing from.
 * Throws `Marketplace:InstallBlockSetPermissionDenied` if the user does not have `marketplace:install-block-set`
 * on the BlockSetSecurityRid, which usually comes with Viewer role on the BlockSet the user is installing.
 * Throws `BlockInstallation:BlockSetInstallationNotFound` if the user tried to edit one or more
 * block set installation that they don't have `marketplace:view-installation` operation on. It usually comes
 * with Viewer role on the installation.
 * Throws `Marketplace:EditBlockSetInstallationsPermissionDenied` if the user tried to edit one or more
 * block set installation that they don't have `marketplace:edit-installation` operation on. It usually comes
 * with Owner role on the installation.
 * Throws `Marketplace:EditBlockSetInstallationsPermissionDenied` if the user tried to install creating a new
 * project into a namespace or folder they don't have `marketplace:install-in` operation on. It usually comes
 * with Editor role.
 * Throws `BlockInstallation:NotAuthorizedToDeclassify` or `BlockInstallation:NotAuthorizedToUseMarkings` which
 * mirror respective Gatekeeper exceptions.
 * Throws `BlockInstallation:UseResourcesAsInputPermissionDenied` usually when the user does not have
 * `marketplace:use-resource-as-input` on the resource they're trying to use as input.
 * It usuall comes with Viewer role on the resource.
 * Throws `BlockInstallation:AttachResourcesPermissionDenied` when the user does not have
 * `marketplace:attach-resource` on the resource they're trying to attach as output.
 * It usually comes with Owner role on the resource.
 */
export async function validateInstallBlockSets(
  ctx: ConjureContext,
  installBlockSetsRequest: _api_InstallBlockSetsRequest,
  onBehalfOf: string | null | undefined,
): Promise<_api_ValidateInstallBlockSetsResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/validate-install-block-sets-request`,
    "POST",
    installBlockSetsRequest,
  );
}
