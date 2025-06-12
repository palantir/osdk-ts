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
  BatchGetInstallableBlockSetVersionsRequest
    as _api_BatchGetInstallableBlockSetVersionsRequest,
  BatchGetInstallableBlockSetVersionsResponse
    as _api_BatchGetInstallableBlockSetVersionsResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Return BlockSetVersionIds with their corresponding GetInstallableBlockSetVersionResponse.
 * Ids which do not exist or do not belong to the specified marketplace will be omitted from the result.
 *
 * Throws `ReadLocalMarketplacePermissionDenied` if the user does not have the
 * "marketplace:read-local-marketplace" permission on the specified marketplace.
 * Throws `BatchLimitExceeded` if more than 100 items are requested.
 */
export async function batchGetInstallableBlockSetVersions(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  onlyLoadMetadata: boolean | null | undefined,
  request: _api_BatchGetInstallableBlockSetVersionsRequest,
): Promise<_api_BatchGetInstallableBlockSetVersionsResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/installable/${marketplaceRid}/blockSet/version/batchGet`,
    "POST",
    request,
    { onlyLoadMetadata },
  );
}
