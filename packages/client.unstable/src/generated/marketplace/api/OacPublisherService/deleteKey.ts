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
  DeleteKeyRequest as _api_DeleteKeyRequest,
  DeleteKeyResponse as _api_DeleteKeyResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Deletes an existing key for OAC bundle verification.
 * Throws `RegisteredOacKeyNotFound` if the specified key is not registered.
 */
export async function deleteKey(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_DeleteKeyRequest,
): Promise<_api_DeleteKeyResponse> {
  return conjureFetch(
    ctx,
    `/oac-publisher/${marketplaceRid}/delete-key`,
    "DELETE",
    request,
  );
}
