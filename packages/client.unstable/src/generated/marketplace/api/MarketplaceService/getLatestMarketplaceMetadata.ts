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
  VersionedMarketplaceMetadata as _api_VersionedMarketplaceMetadata,
} from "../__components.js";

/**
 * / Returns the latest version of Marketplace Metadata which contains a version number and a set of categories and tags. If the store does not have any existing metadata versions, then a default metadata with version 1 and no categories or tags will be created in the database and returned to the user
 * Throws `LocalMarketplaceNotFound` if the user does not have `marketplace:read-local-marketplace` on the given `marketplaceRid`.
 */
export async function getLatestMarketplaceMetadata(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
): Promise<_api_VersionedMarketplaceMetadata> {
  return conjureFetch(ctx, `/marketplaces/${marketplaceRid}/metadata`, "GET");
}
