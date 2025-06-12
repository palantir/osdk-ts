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
  FinalizeBlockSetVersionResponse as _api_FinalizeBlockSetVersionResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Finalize a pending block set version. This locks e.g. any documentation changes and marks the block set
 * version as ready to ship.
 *
 * V1 compatible: Compatible with pending block sets created with `createBlockSetVersion`.
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 */
export async function finalizeBlockSetVersion(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_FinalizeBlockSetVersionResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/version/${blockSetVersionId}/finalize`,
    "POST",
  );
}
