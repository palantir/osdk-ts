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
  IssueRecallRequest as _api_IssueRecallRequest,
  IssueRecallResponse as _api_IssueRecallResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Recall many block set versions. Can only be done for locally developed block sets
 * requires marketplace:edit-block-set permission
 */
export async function issueRecall(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId,
  request: _api_IssueRecallRequest,
): Promise<_api_IssueRecallResponse> {
  return conjureFetch(
    ctx,
    `/automation/product/${marketplaceRid}/${blockSetId}/release/recall`,
    "POST",
    request,
  );
}
