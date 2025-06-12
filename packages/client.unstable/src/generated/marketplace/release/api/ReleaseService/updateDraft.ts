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
  CompassProjectRid as _api_CompassProjectRid,
  ReleaseRid as _api_ReleaseRid,
} from "../../../api/__components.js";
import type {
  UpdateDraftRequest as _release_api_UpdateDraftRequest,
  UpdateDraftResponse as _release_api_UpdateDraftResponse,
} from "../__components.js";

/**
 * Update a release with target state draft.
 *
 * This can be used to:
 * * move releases from draft state to finished state, by setting the target state accordingly
 * * re-trigger generation of the release artifacts
 * * update the description of the release
 *
 * Throws:
 * Release:ReleaseIsNotInDraftState if current state is Finished and requested state is Draft
 */
export async function updateDraft(
  ctx: ConjureContext,
  releaseRid: _api_ReleaseRid,
  compassProject: _api_CompassProjectRid,
  request: _release_api_UpdateDraftRequest,
): Promise<_release_api_UpdateDraftResponse> {
  return conjureFetch(
    ctx,
    `/releases/update/${releaseRid}/update-draft`,
    "POST",
    request,
    { compassProject },
  );
}
