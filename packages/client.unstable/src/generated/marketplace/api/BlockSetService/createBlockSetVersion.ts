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
  BlockSetId as _api_BlockSetId,
  CreateBlockSetVersionRequest as _api_CreateBlockSetVersionRequest,
  CreateBlockSetVersionResponse as _api_CreateBlockSetVersionResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Create a new version of the block set specified by `blockSetId`. This block set can currently only reference
 * block versions already available in the block set's marketplace.
 *
 * Throws `BlockSetLatestVersionMismatch` if `lastVersionId` is not the actual last version of the block set.
 *
 * V1-compatible only: Versions created with this endpoint are are created with Block Set Creation V1 logic, and
 * whilst pending can only be interacted with via V1-compatible endpoints for the duration of the draft.
 */
export async function createBlockSetVersion(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId,
  createBlocSetkVersionRequest: _api_CreateBlockSetVersionRequest,
): Promise<_api_CreateBlockSetVersionResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/${blockSetId}`,
    "POST",
    createBlocSetkVersionRequest,
  );
}
