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
  ApplicationVersionPageToken as _api_ApplicationVersionPageToken,
  ListApplicationVersionsResponse as _api_ListApplicationVersionsResponse,
  PageSize as _api_PageSize,
} from "../__components.js";

/**
 * Get metadata of all versions of a third-party application ordered by latest first.
 *
 * Requires third-party-application:view-application on the application rid.
 */
export async function listApplicationVersions(
  ctx: ConjureContext,
  applicationRid: _api_ApplicationRid,
  pageSize: _api_PageSize | null | undefined,
  pageToken: _api_ApplicationVersionPageToken | null | undefined,
): Promise<_api_ListApplicationVersionsResponse> {
  return conjureFetch(
    ctx,
    `/applications/${applicationRid}/versions`,
    "GET",
    undefined,
    { pageSize, pageToken },
  );
}
