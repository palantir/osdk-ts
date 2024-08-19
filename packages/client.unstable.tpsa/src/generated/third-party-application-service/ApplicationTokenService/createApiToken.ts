/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { ApplicationRid } from "../ApplicationRid.js";
import type { CreateApiTokenRequest } from "../CreateApiTokenRequest.js";

/**
 * Creates a user generated token with a scope determined by the requested capabilities.
 * The user can subsequently disable or revoke the token themselves through Multipass.
 *
 * Requires third-party-application:create-api-token on the application rid.
 */
export async function createApiToken(
  ctx: ConjureContext,
  applicationRid: ApplicationRid,
  request: CreateApiTokenRequest,
): Promise<string> {
  return conjureFetch(
    ctx,
    `/application-tokens/${applicationRid}`,
    "POST",
    request,
  );
}
