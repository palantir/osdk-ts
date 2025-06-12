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
  ListBlockInstallationJobsResponseV2
    as _api_ListBlockInstallationJobsResponseV2,
  ListBlockInstallationJobsV2PageToken
    as _api_ListBlockInstallationJobsV2PageToken,
  MarketplaceRid as _api_MarketplaceRid,
  PageSizeLimitHint as _api_PageSizeLimitHint,
} from "../__components.js";

/**
 * Lists all installation jobs that the user has access to in a given marketplace corresponding to a given
 * installation, ordered by descending `updatedAtTimestamp` and `installationTimestamp`.
 *
 * A user has access to an installation job if they have `marketplace:view-installation-job` on its
 * `InstallBlocksJobRid`.
 *
 * Finished jobs (failed and successful) will be eventually cleaned up, and so this does not return all history.
 * Currently returns all jobs (active, failed, successful), but in future may take additional query parameters
 * for filtering the returned jobs.
 *
 * Initially, only the user that created the job has access to it. When the block set installations in the job
 * have been created and registered in Compass, any user with `marketplace:view-installation-job` on all
 * block set installations in the job will have access to it.
 *
 * Throws `LocalMarketplaceNotFound` if the user does not have `marketplace:read-local-marketplace` on the given
 * `marketplaceRid`.
 */
export async function listBlockInstallationJobsV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetInstallationRid: _api_BlockSetInstallationRid | null | undefined,
  pageToken: _api_ListBlockInstallationJobsV2PageToken | null | undefined,
  limit: _api_PageSizeLimitHint | null | undefined,
): Promise<_api_ListBlockInstallationJobsResponseV2> {
  return conjureFetch(ctx, `/block-installation/v2/jobs`, "GET", undefined, {
    marketplaceRid,
    blockSetInstallationRid,
    pageToken,
    limit,
  });
}
