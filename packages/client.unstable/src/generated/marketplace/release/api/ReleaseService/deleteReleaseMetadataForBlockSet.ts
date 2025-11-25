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
  MarketplaceRid as _api_MarketplaceRid,
} from "../../../api/__components.js";
import type { DeleteReleaseMetadataForBlockSetResponse as _release_api_DeleteReleaseMetadataForBlockSetResponse } from "../__components.js";

/**
 * Deletes the release metadata for a block set. This only deletes the release metadata for the given block set,
 * effectively unlinking the block set from any compass release.
 *
 * The user requires `marketplace:edit-block-set` on the provided marketplaceRid
 *
 * Throws:
 * `EditBlockSetInMarketplacePermissionDenied` if the user does not have `marketplace:edit-block-set`
 * on the provided `marketplaceRid`.
 */
export async function deleteReleaseMetadataForBlockSet(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId,
): Promise<_release_api_DeleteReleaseMetadataForBlockSetResponse> {
  return conjureFetch(
    ctx,
    `/releases/deleteReleaseMetadataForBlockSet`,
    "DELETE",
    undefined,
    { marketplaceRid, blockSetId },
  );
}
