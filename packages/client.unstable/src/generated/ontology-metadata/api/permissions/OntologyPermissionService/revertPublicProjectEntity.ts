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
  RevertPublicProjectEntityRequest as _api_permissions_RevertPublicProjectEntityRequest,
  RevertPublicProjectEntityResponse as _api_permissions_RevertPublicProjectEntityResponse,
} from "../__components.js";

/**
 * Reverts the permission model for a public-project based entity. Will throw if the specified entity is not
 * using the public-project permission model or if the user lacks authorization to change the entity permissions.
 * If reverting to roles, will apply the requesting user as an owner of the resource.
 *
 * Checks that the calling user has declassify permissions on all non-organization markings.
 * **Will declassify all MANDATORY and CBAC markings on the entity being reverted.**
 */
export async function revertPublicProjectEntity(
  ctx: ConjureContext,
  request: _api_permissions_RevertPublicProjectEntityRequest
): Promise<_api_permissions_RevertPublicProjectEntityResponse> {
  return conjureFetch(
    ctx,
    `/permissions/revertPublicProjectEntity`,
    "POST",
    request
  );
}
