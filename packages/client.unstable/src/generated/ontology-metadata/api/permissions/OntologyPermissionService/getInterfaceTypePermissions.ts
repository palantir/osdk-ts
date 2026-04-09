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
import type { InterfaceTypeRid as _api_InterfaceTypeRid } from "../../__components.js";
import type { GetInterfaceTypePermissionsResponse as _api_permissions_GetInterfaceTypePermissionsResponse } from "../__components.js";

/**
 * Returns which permissions the user has on the InterfaceType.
 */
export async function getInterfaceTypePermissions(
  ctx: ConjureContext,
  interfaceTypeRid: _api_InterfaceTypeRid,
): Promise<_api_permissions_GetInterfaceTypePermissionsResponse> {
  return conjureFetch(
    ctx,
    `/permissions/interfaceType/${interfaceTypeRid}`,
    "GET",
  );
}
