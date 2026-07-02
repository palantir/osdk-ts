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
  ListSnapshotsForProductGroupRequest as _api_ListSnapshotsForProductGroupRequest,
  ListSnapshotsForProductGroupResponse as _api_ListSnapshotsForProductGroupResponse,
  ProductGroupRid as _api_ProductGroupRid,
} from "../__components.js";

/**
 * Lists snapshots for a product group, ordered by timestamp descending.
 *
 * Throws ProductGroupNotFound if the product group does not exist or the requestor does not have view access.
 */
export async function listSnapshotsForProductGroup(
  ctx: ConjureContext,
  productGroupRid: _api_ProductGroupRid,
  request: _api_ListSnapshotsForProductGroupRequest
): Promise<_api_ListSnapshotsForProductGroupResponse> {
  return conjureFetch(
    ctx,
    `/product-groups/${productGroupRid}/snapshots/list`,
    "POST",
    request
  );
}
