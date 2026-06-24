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
  ListDraftGroupsPageToken as _api_ListDraftGroupsPageToken,
  ListDraftGroupsResponse as _api_ListDraftGroupsResponse,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Lists draft groups. Only returns draft groups that were created by the user making the request. Ordered by
 * last updated time descending.
 *
 * Does not return draft groups with `finalized` status.
 *
 * Requires the `marketplace:list-draft-groups` operation on the given `marketplaceRid`. Only returns drafts
 * where the user has `marketplace:view-draft-group`. This is currently inherited from the `marketplaceRid` that
 * the group was created in.
 */
export async function listDraftGroupsForUser(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  pageToken: _api_ListDraftGroupsPageToken | null | undefined,
  limit: number | null | undefined,
): Promise<_api_ListDraftGroupsResponse> {
  return conjureFetch(ctx, `/draft-groups`, "GET", undefined, {
    marketplaceRid,
    pageToken,
    limit,
  });
}
