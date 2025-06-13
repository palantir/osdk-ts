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
  ManageExistingInstallationRequest
    as _installmanager_api_ManageExistingInstallationRequest,
  ManageExistingInstallationResponse
    as _installmanager_api_ManageExistingInstallationResponse,
} from "../__components.js";

/**
 * Requests the initial installation of a block set into a namespace.
 *
 * This endpoint is temporary and will be removed after MIM refactorings.
 *
 * For instructions on use, consult https://palantir.quip.com/XfjnAvqUGDLK
 */
export async function manageExistingInstallation(
  ctx: ConjureContext,
  request: _installmanager_api_ManageExistingInstallationRequest,
): Promise<_installmanager_api_ManageExistingInstallationResponse> {
  return conjureFetch(
    ctx,
    `/install-manager/installations/manage-existing-this-endpoint-will-be-removed-again`,
    "POST",
    request,
  );
}
