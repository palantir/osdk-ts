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
  ValidateMarketplaceMavenGroupRequest
    as _api_ValidateMarketplaceMavenGroupRequest,
  ValidateMarketplaceMavenGroupResponse
    as _api_ValidateMarketplaceMavenGroupResponse,
} from "../__components.js";

/**
 * Validates whether a Maven group can be set for a given marketplace without actually setting it.
 * Performs all the same validation checks as setMarketplaceMavenGroup but does not persist the data.
 */
export async function validateMarketplaceMavenGroup(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_ValidateMarketplaceMavenGroupRequest,
): Promise<_api_ValidateMarketplaceMavenGroupResponse> {
  return conjureFetch(
    ctx,
    `/marketplace-maven-group/${marketplaceRid}/maven-group/validate`,
    "POST",
    request,
  );
}
