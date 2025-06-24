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
  BulkGetEntitySdkVersionsRequest as _api_BulkGetEntitySdkVersionsRequest,
  BulkGetEntitySdkVersionsResponse as _api_BulkGetEntitySdkVersionsResponse,
} from "../__components.js";

/**
 * Bulk load oldest and latest SDK versions that entities appear in for a given application.
 *
 * Requires third-party-application:view-application on the application rid.
 */
export async function bulkGetEntitySdkVersions(
  ctx: ConjureContext,
  applicationRid: _api_ApplicationRid,
  request: _api_BulkGetEntitySdkVersionsRequest,
): Promise<_api_BulkGetEntitySdkVersionsResponse> {
  return conjureFetch(
    ctx,
    `/application-sdks/${applicationRid}/entity-sdk-versions`,
    "PUT",
    request,
  );
}
