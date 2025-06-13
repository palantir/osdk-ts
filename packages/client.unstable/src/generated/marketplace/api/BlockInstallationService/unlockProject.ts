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
  UnlockProjectRequest as _api_UnlockProjectRequest,
  UnlockProjectResponse as _api_UnlockProjectResponse,
} from "../__components.js";

/**
 * Unlocks a project by setting its role context to the default project role context. This endpoint is meant to
 * be a break-glass solution for when an installation request fails after the project has been created, but
 * before the installations have been created. In normal cases, the `setBlockSetInstallationImmutability`
 * endpoint should be used instead.
 *
 * This endpoint does not affect ontology entities.
 *
 * Requires `marketplace:unlock-project` on the given `projectRid`. This operation is granted to owners by
 * default.
 *
 * Throws `SetBlockSetImmutabilityForFolderDenied` if the given `projectRid` is not a project.
 */
export async function unlockProject(
  ctx: ConjureContext,
  request: _api_UnlockProjectRequest,
): Promise<_api_UnlockProjectResponse> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/unlock-project`,
    "POST",
    request,
  );
}
