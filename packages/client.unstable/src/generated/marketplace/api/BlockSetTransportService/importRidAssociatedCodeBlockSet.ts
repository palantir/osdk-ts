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
  BulkImportBlockSetsResponse as _api_BulkImportBlockSetsResponse,
  CodeBlockSetParentRid as _api_CodeBlockSetParentRid,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Takes in a stream of an exported set of blocksets zip (a zip bundle) BUT expects there to be only one OAC block set
 * and imports that blockset in the specified marketplace.
 */
export async function importRidAssociatedCodeBlockSet(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  parentRid: _api_CodeBlockSetParentRid,
  request: string,
): Promise<_api_BulkImportBlockSetsResponse> {
  return conjureFetch(
    ctx,
    `/block-set-transport/${marketplaceRid}/upload/asCode/${parentRid}`,
    "POST",
    request,
    undefined,
    "application/octet-stream",
  );
}
