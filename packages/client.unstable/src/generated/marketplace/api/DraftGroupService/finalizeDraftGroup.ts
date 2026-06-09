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
  DraftGroupRid as _api_DraftGroupRid,
  FinalizeDraftGroupRequest as _api_FinalizeDraftGroupRequest,
  FinalizeDraftGroupResponse as _api_FinalizeDraftGroupResponse,
} from "../__components.js";

/**
 * Finalize all pending block set versions in the draft group. Versions are finalized sequentially
 * in topological order based on their external recommendation dependencies. Any already finalized
 * versions within the group will be ignored. Updates to the individual versions are blocked while the
 * group is finalizing.
 *
 * No-op if the group is already finalizing or finalized.
 *
 * Requires the `marketplace:finalize-draft-group` operation on the given `draftGroupRid`. This is
 * currently inherited from the `marketplaceRid` that the group was created in, but only by the user
 * that created the draft group.
 */
export async function finalizeDraftGroup(
  ctx: ConjureContext,
  draftGroupRid: _api_DraftGroupRid,
  request: _api_FinalizeDraftGroupRequest,
): Promise<_api_FinalizeDraftGroupResponse> {
  return conjureFetch(
    ctx,
    `/draft-groups/${draftGroupRid}/finalize`,
    "POST",
    request,
  );
}
