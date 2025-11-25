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
  GetMarketplaceRidForMavenGroupRequest
    as _api_GetMarketplaceRidForMavenGroupRequest,
  GetMarketplaceRidForMavenGroupResponse
    as _api_GetMarketplaceRidForMavenGroupResponse,
} from "../__components.js";

/**
 * Gets the marketplace RID that owns the specified Maven group within the given namespace.
 *
 * Returns empty if no marketplace has this Maven group or if the user lacks view permissions on the marketplace
 * that uses this maven group.
 */
export async function getMarketplaceRidForMavenGroup(
  ctx: ConjureContext,
  request: _api_GetMarketplaceRidForMavenGroupRequest,
): Promise<_api_GetMarketplaceRidForMavenGroupResponse> {
  return conjureFetch(
    ctx,
    `/marketplace-maven-group/marketplace-rid-for-maven-group`,
    "POST",
    request,
  );
}
