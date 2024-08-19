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
import type { PackageName } from "../PackageName.js";
import type { ResourceBindings } from "../ResourceBindings.js";

/**
 * Get the resource bindings to use for an SDK.
 *
 * This endpoint will return the resource rids of the local stack which are bound to the
 * api names of the SDK for the newest sdk version with this repository rid and package name.
 * The bindings will allow the SDK to use the original bound api name while pointing to the local
 * resource.
 *
 * Requires third-party-application:view-standalone-sdk on the repository rid.
 */
export async function getResourceBindings(
  ctx: ConjureContext,
  repositoryRid: ArtifactsRepositoryRid,
  packageName: PackageName,
): Promise<ResourceBindings> {
  return conjureFetch(
    ctx,
    `/sdks/${repositoryRid}/${packageName}/bindings`,
    "GET",
  );
}
