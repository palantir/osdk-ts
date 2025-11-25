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
  RegisterKeyRequest as _api_RegisterKeyRequest,
  RegisterKeyResponse as _api_RegisterKeyResponse,
} from "../__components.js";

/**
 * Registers a new key for OAC bundle verification.
 * Throws `OacKeyAlreadyRegistered` if the specified key is already registered.
 */
export async function registerKey(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  request: _api_RegisterKeyRequest,
): Promise<_api_RegisterKeyResponse> {
  return conjureFetch(
    ctx,
    `/oac-publisher/${marketplaceRid}/register-key`,
    "POST",
    request,
  );
}
