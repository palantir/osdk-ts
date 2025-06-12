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
  GetRecallsForBlockSetResponse as _api_GetRecallsForBlockSetResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Get recall announcements issued for a block set ordered by creation time, newest first. Currently only recalls that are
 * not cancelled are returned. Requires marketplace:read-local-marketplace permission.
 */
export async function getRecallsForBlockSet(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetId: _api_BlockSetId,
): Promise<_api_GetRecallsForBlockSetResponse> {
  return conjureFetch(
    ctx,
    `/automation/product/${marketplaceRid}/${blockSetId}/release/getRecalls`,
    "GET",
  );
}
