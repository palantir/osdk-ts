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
  GetInstallableBlockSetVersionResponseV2
    as _api_GetInstallableBlockSetVersionResponseV2,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Get a block set version, including its shapes and documentation.
 */
export async function getInstallableBlockSetVersionV2(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_GetInstallableBlockSetVersionResponseV2> {
  return conjureFetch(
    ctx,
    `/installation-app-service/installable/v2/${marketplaceRid}/blockSet/version/${blockSetVersionId}`,
    "GET",
  );
}
