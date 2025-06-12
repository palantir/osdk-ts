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
  GetProductVersionMetadataResponse as _api_GetProductVersionMetadataResponse,
  MarketplaceRid as _api_MarketplaceRid,
  ProductVersionId as _api_ProductVersionId,
} from "../__components.js";

/**
 * Fetch the product version metadata for a product version.
 */
export async function getProductVersionMetadata(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  productVersionId: _api_ProductVersionId,
): Promise<_api_GetProductVersionMetadataResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/installable/${marketplaceRid}/product/version/${productVersionId}/productMetadata`,
    "GET",
  );
}
