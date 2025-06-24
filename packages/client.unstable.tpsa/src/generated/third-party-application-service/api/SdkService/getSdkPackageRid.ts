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
  SdkPackageRid as _api_SdkPackageRid,
} from "../__components.js";

/**
 * Get the SDK package rid of an SDK package.
 *
 * Knowing an SDKs rid is needed i.e. when packaging it through Marketplace/DevOps.
 *
 * Will return empty if no SDK with the provided package name exists in the repository.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
export async function getSdkPackageRid(
  ctx: ConjureContext,
  repositoryRid: _api_ArtifactsRepositoryRid,
  packageName: _api_PackageName,
): Promise<_api_SdkPackageRid | null | undefined> {
  return conjureFetch(ctx, `/sdks/${repositoryRid}/${packageName}/rid`, "GET");
}
