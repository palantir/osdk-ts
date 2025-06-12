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
  ListInstallableBlockSetVersionsRequest
    as _api_ListInstallableBlockSetVersionsRequest,
  ListInstallableBlockSetVersionsResponse
    as _api_ListInstallableBlockSetVersionsResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Lists versions of block sets, most recent first.
 */
export async function listBlockSetVersions(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  limit: number | null | undefined,
  blockSetId: _api_BlockSetId,
  request: _api_ListInstallableBlockSetVersionsRequest,
): Promise<_api_ListInstallableBlockSetVersionsResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/${marketplaceRid}/blockSet/${blockSetId}`,
    "POST",
    request,
    { limit },
  );
}
