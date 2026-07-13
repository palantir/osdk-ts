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
  SetProjectImmutabilityRequest as _api_SetProjectImmutabilityRequest,
  SetProjectImmutabilityResponse as _api_SetProjectImmutabilityResponse,
} from "../__components.js";

/**
 * Unlocks a project by setting its role context to the default project role context. This endpoint can be
 * leveraged to both lock and unlock projects in a context where the marketplace installation as not yet
 * been created. If the installation exists, use `setBlockSetInstallationImmutability`.
 *
 * This endpoint does not affect ontology entities.
 *
 * Requires `marketplace:unlock-project` on the given `projectRid`. This operation is granted to owners by
 * default.
 *
 * Throws `SetBlockSetImmutabilityForFolderDenied` if the given `projectRid` is not a project.
 */
export async function setProjectImmutability(
  ctx: ConjureContext,
  request: _api_SetProjectImmutabilityRequest
): Promise<_api_SetProjectImmutabilityResponse> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/project-immutability`,
    "POST",
    request
  );
}
