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
import type {
  RegisterInstallationRequest as _api_RegisterInstallationRequest,
  RegisterInstallationResponse as _api_RegisterInstallationResponse,
} from "../__components.js";

/**
 * Registers a versionless installation. Creates installation metadata (Compass resource, Alta metadata
 * entry) without running a job and without specifying a version. These installations are placeholders
 * that later receive state via `installBlockSets` with `modifyExistingInstallations`.
 *
 * Throws `Marketplace:InstallFromMarketplacePermissionDenied` if the user does not have
 * `marketplace:install-from-local-marketplace` on the marketplace.
 * Throws `Marketplace:InstallBlockSetPermissionDenied` if the user does not have
 * `marketplace:install-block-set` on the block set security RID.
 * Throws `Marketplace:InstallInFolderPermissionDenied` if the user does not have
 * `marketplace:install-in` on the installation destination folder.
 */
export async function registerInstallation(
  ctx: ConjureContext,
  request: _api_RegisterInstallationRequest,
): Promise<_api_RegisterInstallationResponse> {
  return conjureFetch(ctx, `/block-set-installation/register`, "POST", request);
}
