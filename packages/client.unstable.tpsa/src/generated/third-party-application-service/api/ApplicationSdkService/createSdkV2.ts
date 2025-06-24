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
  ApplicationRid as _api_ApplicationRid,
  ApplicationSdk as _api_ApplicationSdk,
  CreateApplicationSdkRequestV2 as _api_CreateApplicationSdkRequestV2,
} from "../__components.js";

/**
 * Create a new SDK for an application.
 *
 * Requires third-party-application:create-sdk on the application rid.
 */
export async function createSdkV2(
  ctx: ConjureContext,
  applicationRid: _api_ApplicationRid,
  request: _api_CreateApplicationSdkRequestV2,
): Promise<_api_ApplicationSdk> {
  return conjureFetch(
    ctx,
    `/application-sdks/v2/${applicationRid}`,
    "POST",
    request,
  );
}
