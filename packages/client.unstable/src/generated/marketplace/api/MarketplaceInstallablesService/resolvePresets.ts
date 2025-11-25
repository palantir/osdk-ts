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
  BlockSetVersionId as _api_BlockSetVersionId,
  MarketplaceRid as _api_MarketplaceRid,
  ResolvePresetsRequest as _api_ResolvePresetsRequest,
  ResolvePresetsResponse as _api_ResolvePresetsResponse,
} from "../__components.js";

/**
 * Returns resolved input shapes generated from preset inputs created by the packager. Only shapes that the
 * installing user has access to will be returned, otherwise a resolution failure will be be returned.
 * Inputs as resolved as follows:
 * - If the preset is based on a stack-independent identifier, such as an API name, this involves returning
 * a resource that has the same identifier in the target install location. For example, an object type
 * would be resolved in the target ontology based on the object API name on the preset.
 * - If the preset is already based on a resolved shape, this will return the same resolved shape. This
 * can be either a resolved shape that is stack-independent, such as a constant parameter value, or the same
 * resource used for packaging.
 *
 * Throws `LocalMarketplaceNotFound` if the user does not have the "marketplace:read-local-marketplace"
 * operation on the owning marketplace.
 * Throws `BlockSet:InstallableBlockSetVersionNotFound` if the specified `InstallableBlockSetVersionId`
 * is not found.
 */
export async function resolvePresets(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_ResolvePresetsRequest,
): Promise<_api_ResolvePresetsResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/installable/v2/${marketplaceRid}/blockSet/version/${blockSetVersionId}/resolve-presets`,
    "POST",
    request,
  );
}
