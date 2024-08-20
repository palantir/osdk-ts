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
import type { ApplicationSdkPageToken } from "../ApplicationSdkPageToken.js";
import type { ListApplicationSdksResponse } from "../ListApplicationSdksResponse.js";
import type { PageSize } from "../PageSize.js";

/**
 * Get all SDKs for an application ordered by version descending.
 *
 * Requires third-party-application:view-application on the application rid.
 */
export async function listSdks(
  ctx: ConjureContext,
  applicationRid: ApplicationRid,
  pageSize: PageSize | undefined,
  pageToken: ApplicationSdkPageToken | undefined,
): Promise<ListApplicationSdksResponse> {
  return conjureFetch(
    ctx,
    `/application-sdks/${applicationRid}`,
    "GET",
    undefined,
    { pageSize, pageToken },
  );
}
