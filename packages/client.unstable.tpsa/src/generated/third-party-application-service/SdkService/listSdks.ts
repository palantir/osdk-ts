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
import type { ListSdksResponse } from "../ListSdksResponse.js";
import type { PackageName } from "../PackageName.js";
import type { PageSize } from "../PageSize.js";
import type { SdkPageToken } from "../SdkPageToken.js";

/**
 * Get all SDKs for a package, ordered by version descending.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
export async function listSdks(
  ctx: ConjureContext,
  repositoryRid: ArtifactsRepositoryRid,
  packageName: PackageName,
  pageSize: PageSize | undefined,
  pageToken: SdkPageToken | undefined,
): Promise<ListSdksResponse> {
  return conjureFetch(
    ctx,
    `/sdks/${repositoryRid}/${packageName}`,
    "GET",
    undefined,
    { pageSize, pageToken },
  );
}
