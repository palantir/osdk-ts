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
import type { CreateSdkRequest } from "../CreateSdkRequest.js";
import type { PackageName } from "../PackageName.js";
import type { Sdk } from "../Sdk.js";
import type { SdkVersion } from "../SdkVersion.js";

/**
 * Create a new SDK
 *
 * If an SDK for this repositoryRid, packageName and sdkVersion already exists,
 * SdkAlreadyExists will be thrown. All resources within the requested data scope
 * must either be in the same project as the repositoryRid or added as project
 * imports otherwise OntologyDataScopeProjectImportsRequired will be thrown.
 *
 * Requires third-party-application:create-standalone-sdk on the repository rid.
 */
export async function createSdk(
  ctx: ConjureContext,
  repositoryRid: ArtifactsRepositoryRid,
  packageName: PackageName,
  sdkVersion: SdkVersion,
  request: CreateSdkRequest,
): Promise<Sdk> {
  return conjureFetch(
    ctx,
    `/sdks/${repositoryRid}/${packageName}/${sdkVersion}`,
    "POST",
    request,
  );
}
