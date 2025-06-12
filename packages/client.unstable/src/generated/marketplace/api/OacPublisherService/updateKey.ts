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
  MarketplaceRid as _api_MarketplaceRid,
  UpdateKeyRequest as _api_UpdateKeyRequest,
  UpdateKeyResponse as _api_UpdateKeyResponse,
} from "../__components.js";

/**
 * Updates an existing key for OAC bundle verification.
 * Throws `RegisteredOacKeyNotFound` if the specified key is not registered.
 */
export async function updateKey(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_UpdateKeyRequest,
): Promise<_api_UpdateKeyResponse> {
  return conjureFetch(
    ctx,
    `/oac-publisher/${marketplaceRid}/update-key`,
    "POST",
    request,
  );
}
