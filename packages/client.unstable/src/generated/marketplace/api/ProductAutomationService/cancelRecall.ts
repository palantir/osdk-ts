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
  CancelRecallRequest as _api_CancelRecallRequest,
  CancelRecallResponse as _api_CancelRecallResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Cancels a single recall for all affected block set versions. Can only be done for locally developed block sets
 * requires marketplace:edit-block-set permission
 */
export async function cancelRecall(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId,
  request: _api_CancelRecallRequest,
): Promise<_api_CancelRecallResponse> {
  return conjureFetch(
    ctx,
    `/automation/product/${marketplaceRid}/${blockSetId}/release/clearRecall`,
    "POST",
    request,
  );
}
