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
  DeleteDraftRequest as _release_api_DeleteDraftRequest,
  DeleteDraftResponse as _release_api_DeleteDraftResponse,
} from "../__components.js";

/**
 * Delete a draft release associated with a given project rid.
 *
 * This aborts the release's pendingBlockSetVersion, and deletes the release object.
 *
 * Throws:
 * Release:ReleaseIsNotInDraftState if current state is Finished
 * Release:ReleaseNotFound if the release does not exist or does not belong to the project provided
 */
export async function deleteDraft(
  ctx: ConjureContext,
  releaseRid: _api_ReleaseRid,
  compassProjectRid: _api_CompassProjectRid,
  request: _release_api_DeleteDraftRequest,
): Promise<_release_api_DeleteDraftResponse> {
  return conjureFetch(
    ctx,
    `/releases/delete/${releaseRid}`,
    "DELETE",
    request,
    { compassProjectRid },
  );
}
