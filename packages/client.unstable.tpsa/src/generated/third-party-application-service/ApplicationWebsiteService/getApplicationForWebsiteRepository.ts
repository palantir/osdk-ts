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
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";

/**
 * Get the application for a website repository. Returns empty if the repository rid
 * is not a website repository for an application.
 *
 * Requires third-party-application:view-repository on the repository rid.
 */
export async function getApplicationForWebsiteRepository(
  ctx: ConjureContext,
  repositoryRid: ArtifactsRepositoryRid,
): Promise<ApplicationRid | undefined> {
  return conjureFetch(
    ctx,
    `/application-websites/for-repository/${repositoryRid}`,
    "GET",
  );
}
