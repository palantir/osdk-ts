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
  ListProductsPageToken as _api_ListProductsPageToken,
  ListProductsResponse as _api_ListProductsResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * List all installable products and their latest version, ordered by creation date (newest first).
 * Products without a published version will be omitted from the result.
 */
export async function listProducts(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  pageToken: _api_ListProductsPageToken | null | undefined,
  limit: number | null | undefined,
): Promise<_api_ListProductsResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/${marketplaceRid}/product/list`,
    "GET",
    undefined,
    { pageToken, limit },
  );
}
