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
  ArtifactsRepositoryRid as _api_ArtifactsRepositoryRid,
  PackageName as _api_PackageName,
  Sdk as _api_Sdk,
  SdkStatus as _api_SdkStatus,
  SdkType as _api_SdkType,
} from "../__components.js";

/**
 * Get the latest SDK version for a package that matches the requested SDK type and SDK generation status.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
export async function getLatestSdk(
  ctx: ConjureContext,
  repositoryRid: _api_ArtifactsRepositoryRid,
  packageName: _api_PackageName,
  sdkType: _api_SdkType,
  sdkStatus: _api_SdkStatus,
): Promise<_api_Sdk | null | undefined> {
  return conjureFetch(
    ctx,
    `/sdks/${repositoryRid}/${packageName}/latest`,
    "GET",
    undefined,
    { sdkType, sdkStatus },
  );
}
