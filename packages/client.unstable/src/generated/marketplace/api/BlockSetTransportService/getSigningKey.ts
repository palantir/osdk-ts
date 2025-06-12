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
import type { GetSigningKeyResponse as _api_GetSigningKeyResponse } from "../__components.js";

/**
 * Returns the public key used for signing block set versions.
 *
 * The bearer token is not checked in this endpoint, but our infra requires providing something. Example curl:
 * ```
 * curl --location 'https://{STACK}/marketplace/api/block-set-transport/signing-key' \
 * --header "Authorization: Bearer THE_HEADER_IS_REQUIRED_BUT_THE_VALUE_IS_NOT_CHECKED"
 * ```
 */
export async function getSigningKey(
  ctx: ConjureContext,
): Promise<_api_GetSigningKeyResponse> {
  return conjureFetch(ctx, `/block-set-transport/signing-key`, "GET");
}
