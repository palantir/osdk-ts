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
  CancelFinalizeDraftGroupRequest as _api_CancelFinalizeDraftGroupRequest,
  CancelFinalizeDraftGroupResponse as _api_CancelFinalizeDraftGroupResponse,
  DraftGroupRid as _api_DraftGroupRid,
} from "../__components.js";

/**
 * Cancel a draft group finalization that is in progress. Versions that have already been finalized remain
 * finalized. The currently-finalizing version is allowed to complete. Subsequent versions in the queue are
 * not attempted. After cancellation completes, the group returns to `idle` with a
 * `DraftGroupFinalizationCancelled` error attached so callers can observe that the previous attempt was
 * cancelled.
 *
 * No-op if the group is not currently finalizing.
 *
 * Requires the `marketplace:finalize-draft-group` operation on the given `draftGroupRid`. This is
 * currently inherited from the `marketplaceRid` that the group was created in, but only by the user
 * that created the draft group.
 */
export async function cancelFinalizeDraftGroup(
  ctx: ConjureContext,
  draftGroupRid: _api_DraftGroupRid,
  request: _api_CancelFinalizeDraftGroupRequest,
): Promise<_api_CancelFinalizeDraftGroupResponse> {
  return conjureFetch(
    ctx,
    `/draft-groups/${draftGroupRid}/finalize/cancel`,
    "POST",
    request,
  );
}
