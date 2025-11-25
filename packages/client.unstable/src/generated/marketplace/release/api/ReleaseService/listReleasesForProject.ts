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
import type { CompassProjectRid as _api_CompassProjectRid } from "../../../api/__components.js";
import type {
  ListReleasesPageToken as _release_api_ListReleasesPageToken,
  ListReleasesResponse as _release_api_ListReleasesResponse,
} from "../__components.js";

/**
 * Get a page of releases for a compass project, ordered by version descending.
 *
 * Requires marketplace:view-compass-release on compass project rid
 */
export async function listReleasesForProject(
  ctx: ConjureContext,
  pageToken: _release_api_ListReleasesPageToken | null | undefined,
  limit: number | null | undefined,
  compassProject: _api_CompassProjectRid,
): Promise<_release_api_ListReleasesResponse> {
  return conjureFetch(
    ctx,
    `/releases/releases-for-project/${compassProject}`,
    "POST",
    pageToken,
    { limit },
  );
}
