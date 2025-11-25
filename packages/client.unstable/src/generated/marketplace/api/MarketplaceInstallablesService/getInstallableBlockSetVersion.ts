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
  GetInstallableBlockSetVersionResponse
    as _api_GetInstallableBlockSetVersionResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Get a block set version.
 */
export async function getInstallableBlockSetVersion(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
  onlyLoadMetadata: boolean | null | undefined,
): Promise<_api_GetInstallableBlockSetVersionResponse> {
  return conjureFetch(
    ctx,
    `/installation-app-service/installable/${marketplaceRid}/blockSet/version/${blockSetVersionId}`,
    "GET",
    undefined,
    { onlyLoadMetadata },
  );
}
