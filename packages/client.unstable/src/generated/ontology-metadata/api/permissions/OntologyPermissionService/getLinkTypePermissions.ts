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
import type { LinkTypeRid as _api_LinkTypeRid } from "../../__components.js";
import type { GetLinkTypePermissionsResponse as _api_permissions_GetLinkTypePermissionsResponse } from "../__components.js";

/**
 * Returns which permissions the user has on the LinkType.
 */
export async function getLinkTypePermissions(
  ctx: ConjureContext,
  linkTypeRid: _api_LinkTypeRid,
): Promise<_api_permissions_GetLinkTypePermissionsResponse> {
  return conjureFetch(ctx, `/permissions/linkType/${linkTypeRid}`, "GET");
}
