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
  ExportMultipleBlockSetsRequest as _api_ExportMultipleBlockSetsRequest,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Streams many block sets as a single archive in a standard layout.
 * This streamed archive will contain both block set metadata and block data.
 *
 * The format is not expected to be usable/editable by external consumers, and should be exclusively used to
 * transport data between stacks.
 *
 * requires marketplace:read-local-marketplace operation on store
 */
export async function exportMultipleBlockSets(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_ExportMultipleBlockSetsRequest,
): Promise<string> {
  return conjureFetch(
    ctx,
    `/block-set-transport/${marketplaceRid}/bulk`,
    "POST",
    request,
    undefined,
    undefined,
    "application/octet-stream",
  );
}
