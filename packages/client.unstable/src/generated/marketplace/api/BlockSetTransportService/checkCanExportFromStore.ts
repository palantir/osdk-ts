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
  CheckCanExportFromStoreResponse as _api_CheckCanExportFromStoreResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Checks if the user has prerequisite permissions to export from a given marketplace store.
 * Note that on the actual export of products more permissions are checked.
 */
export async function checkCanExportFromStore(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
): Promise<_api_CheckCanExportFromStoreResponse> {
  return conjureFetch(
    ctx,
    `/block-set-transport/${marketplaceRid}/permission/export`,
    "POST",
  );
}
