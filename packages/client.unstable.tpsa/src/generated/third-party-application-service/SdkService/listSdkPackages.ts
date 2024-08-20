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
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
import type { ListSdkPackagesResponse } from "../ListSdkPackagesResponse.js";
import type { PageSize } from "../PageSize.js";
import type { SdkPackagePageToken } from "../SdkPackagePageToken.js";

/**
 * Get all known SDK packages for a repository.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
export async function listSdkPackages(
  ctx: ConjureContext,
  repositoryRid: ArtifactsRepositoryRid,
  pageSize: PageSize | undefined,
  pageToken: SdkPackagePageToken | undefined,
): Promise<ListSdkPackagesResponse> {
  return conjureFetch(ctx, `/sdks/${repositoryRid}`, "GET", undefined, {
    pageSize,
    pageToken,
  });
}
