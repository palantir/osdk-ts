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
  PutMarketplaceMetadataRequest as _api_PutMarketplaceMetadataRequest,
  VersionedMarketplaceMetadata as _api_VersionedMarketplaceMetadata,
} from "../__components.js";

/**
 * / Creates a new version of marketplace metadata that will be set to exactly the same as the request.
 * Throws `PutStoreMetadataPermissionDenied` if the user does not have `marketplace:edit-local-marketplace` on the given `marketplaceRid`. Throws `StoreMetadataExceedsLimits` if the number of categories or tags exceeds the limit. Default 10 for categories and 20 for tags Throws `StoreMetadataExceedsNameLimit` if the number of characters in the category or tag name exceeds the limit of 100 characters Throws `LatestKnownMetadataVersionIsNotCurrent` if the provided `latestKnownVersion` is not the latest version in the database
 */
export async function putMarketplaceMetadata(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_PutMarketplaceMetadataRequest,
): Promise<_api_VersionedMarketplaceMetadata> {
  return conjureFetch(
    ctx,
    `/marketplaces/${marketplaceRid}/metadata`,
    "PUT",
    request,
  );
}
