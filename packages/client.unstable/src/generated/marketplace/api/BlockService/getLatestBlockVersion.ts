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
  BlockId as _api_BlockId,
  GetLatestBlockVersionResponse as _api_GetLatestBlockVersionResponse,
} from "../__components.js";

/**
 * Get the data for the latest version of a block.
 *
 * User should have the "marketplace:read-local-marketplace" permission on the MarketplaceRid. This operation
 * is typically granted to users with the Viewer role.
 */
export async function getLatestBlockVersion(
  ctx: ConjureContext,
  blockId: _api_BlockId,
): Promise<_api_GetLatestBlockVersionResponse | null | undefined> {
  return conjureFetch(ctx, `/blocks/${blockId}/latest`, "GET");
}
