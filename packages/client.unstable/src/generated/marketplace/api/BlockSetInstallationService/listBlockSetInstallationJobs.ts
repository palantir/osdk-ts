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
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  ListBlockSetInstallationJobsPageToken
    as _api_ListBlockSetInstallationJobsPageToken,
  ListBlockSetInstallationJobsResponse
    as _api_ListBlockSetInstallationJobsResponse,
  MarketplaceRid as _api_MarketplaceRid,
  PageSizeLimitHint as _api_PageSizeLimitHint,
} from "../__components.js";

/**
 * Returns only the jobs that the user has `marketplace:view-installation-job` operation on.
 *
 * Throws `Marketplace:LocalMarketplaceNotFound`
 * if the user does not have `marketplace:read-local-marketplace` on the marketplaceRid.
 */
export async function listBlockSetInstallationJobs(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetInstallationRid: _api_BlockSetInstallationRid | null | undefined,
  pageToken: _api_ListBlockSetInstallationJobsPageToken | null | undefined,
  limit: _api_PageSizeLimitHint | null | undefined,
): Promise<_api_ListBlockSetInstallationJobsResponse> {
  return conjureFetch(ctx, `/block-set-installation/jobs`, "GET", undefined, {
    marketplaceRid,
    blockSetInstallationRid,
    pageToken,
    limit,
  });
}
