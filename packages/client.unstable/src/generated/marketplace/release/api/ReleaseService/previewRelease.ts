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
  PreviewReleaseRequest as _release_api_PreviewReleaseRequest,
  PreviewReleaseResponse as _release_api_PreviewReleaseResponse,
} from "../__components.js";

/**
 * Get metadata needed to create a new release
 *
 * This endpoint will return the predicted settings for creating the next release of a compass project. The
 * build options returned will match that of the latest compass release. The next minor version number will be
 * returned. If there are no previous releases, a version number of 0.1.0 will be set.
 *
 * Requires marketplace:view-compass-release on compass project rid
 *
 * Throws:
 * Release:NoMavenProductIdOnCompassProject if no prior release exists and the compass project is missing
 * a maven product id.
 */
export async function previewRelease(
  ctx: ConjureContext,
  request: _release_api_PreviewReleaseRequest,
): Promise<_release_api_PreviewReleaseResponse> {
  return conjureFetch(ctx, `/releases/preview`, "POST", request);
}
