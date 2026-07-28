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
  DraftGroup as _api_DraftGroup,
  DraftGroupRid as _api_DraftGroupRid,
} from "../__components.js";

/**
 * Get the metadata for a draft group.
 *
 * Requires the `marketplace:view-draft-group` operation on the given `draftGroupRid`. This is currently
 * inherited from the `marketplaceRid` that the group was created in.
 */
export async function getDraftGroup(
  ctx: ConjureContext,
  draftGroupRid: _api_DraftGroupRid
): Promise<_api_DraftGroup> {
  return conjureFetch(ctx, `/draft-groups/${draftGroupRid}`, "GET");
}
