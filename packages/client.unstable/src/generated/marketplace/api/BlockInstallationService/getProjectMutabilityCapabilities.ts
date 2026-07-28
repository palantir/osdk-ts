/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  CompassProjectRid as _api_CompassProjectRid,
  ProjectMutabilityCapabilities as _api_ProjectMutabilityCapabilities,
} from "../__components.js";

/**
 * Returns the capabilities for changing the mutability of a project. This endpoint can be used to check
 * whether the user is allowed to call `setProjectImmutability` before attempting the operation.
 *
 * The check verifies that:
 * 1. The user has `marketplace:unlock-project` permission on the project
 * 2. The given RID is actually a project (not a folder)
 */
export async function getProjectMutabilityCapabilities(
  ctx: ConjureContext,
  projectRid: _api_CompassProjectRid
): Promise<_api_ProjectMutabilityCapabilities> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/projects/${projectRid}/mutability-capabilities`,
    "GET"
  );
}
