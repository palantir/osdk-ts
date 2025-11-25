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
} from "../__components.js";

/**
 * Aborts a pending block set and clears resources. Block sets will also be automatically aborted after 7 days
 * in case they have not been finalized. If the block set was previously aborted no side effects will occur and
 * this will return successfully.
 *
 * Throws 'BlockSetVersionNotPending' if the block set is not pending.
 */
export async function abortPendingBlockSetVersion(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/block-sets/${marketplaceRid}/version/${blockSetVersionId}/abort`,
    "POST",
  );
}
