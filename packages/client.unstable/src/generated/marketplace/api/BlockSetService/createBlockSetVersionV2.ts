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
  CreateBlockSetVersionRequestV2 as _api_CreateBlockSetVersionRequestV2,
  CreateBlockSetVersionResponseV2 as _api_CreateBlockSetVersionResponseV2,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Create a new version of an existing block set, or the first version of a new block set that will be created
 * as part of the request.
 *
 * Throws `CreateBlockSetInMarketplacePermissionDenied` if the user does not have `marketplace:create-block` on
 * the `marketplaceRid`.
 *
 * V2-compatible only: Versions created with this endpoint are are created with Block Set Creation V2 logic, and
 * can only be interacted with via V2-compatible endpoints for the duration of the draft.
 */
export async function createBlockSetVersionV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_CreateBlockSetVersionRequestV2,
): Promise<_api_CreateBlockSetVersionResponseV2> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/${marketplaceRid}/version`,
    "POST",
    request,
  );
}
