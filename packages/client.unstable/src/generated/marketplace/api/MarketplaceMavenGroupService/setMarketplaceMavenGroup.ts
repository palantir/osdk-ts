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
  MarketplaceRid as _api_MarketplaceRid,
  SetMarketplaceMavenGroupRequest as _api_SetMarketplaceMavenGroupRequest,
  SetMarketplaceMavenGroupResponse as _api_SetMarketplaceMavenGroupResponse,
} from "../__components.js";

/**
 * Sets the Maven group for a given marketplace. The Maven group must follow
 * Java package naming conventions (e.g., com.example.mygroup).
 */
export async function setMarketplaceMavenGroup(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_SetMarketplaceMavenGroupRequest,
): Promise<_api_SetMarketplaceMavenGroupResponse> {
  return conjureFetch(
    ctx,
    `/marketplace-maven-group/${marketplaceRid}/maven-group`,
    "PUT",
    request,
  );
}
