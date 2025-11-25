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
  MavenProductId as _api_MavenProductId,
  SlsVersion as _api_SlsVersion,
} from "../__components.js";

/**
 * Fetch a product version's metadata using its Maven product ID and semantic version.
 *
 * Used for retrieving metadata about products that have a Foundry Product Artifact Installation (via Apollo)
 *
 * The product must have a corresponding Foundry Product Artifact Installation in the specified marketplace at
 * the specified version
 *
 * Requires `marketplace:read-local-marketplace` permission on the specified marketplace RID.
 *
 * Throws:
 * - `LocalMarketplaceNotFound`: User lacks read permission on the marketplace
 * - `FoundryProductInstallationWithMavenProductIdNotFound`: No product artifact installation exists for the specified Maven product ID
 * - `InstallableBlockSetVersionWithSemVerNotFound`: No installable version exists matching the requested semantic version
 */
export async function getProductVersionMetadataByMavenProductId(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  mavenProductId: _api_MavenProductId,
  version: _api_SlsVersion,
): Promise<_api_GetProductVersionMetadataResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/installable/${marketplaceRid}/mavenProductId/${mavenProductId}/version/${version}/productMetadata`,
    "GET",
  );
}
