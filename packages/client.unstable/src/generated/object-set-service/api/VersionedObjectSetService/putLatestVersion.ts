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
  LatestVersionResponse as _api_LatestVersionResponse,
  UpdateLatestVersionRequest as _api_UpdateLatestVersionRequest,
  VersionedObjectSetRid as _api_VersionedObjectSetRid,
} from "../__components.js";

/**
 * Updates the latest version of this versioned object set to be the supplied object set.
 */
export async function putLatestVersion(
  ctx: ConjureContext,
  versionedObjectSetRid: _api_VersionedObjectSetRid,
  request: _api_UpdateLatestVersionRequest,
): Promise<_api_LatestVersionResponse> {
  return conjureFetch(
    ctx,
    `/versionedObjectSets/${versionedObjectSetRid}/latestVersion`,
    "PUT",
    request,
  );
}
