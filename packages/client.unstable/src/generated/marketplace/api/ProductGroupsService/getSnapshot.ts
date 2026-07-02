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
  GetProductGroupSnapshotResponse as _api_GetProductGroupSnapshotResponse,
  ProductGroupRid as _api_ProductGroupRid,
  ProductGroupSnapshotRid as _api_ProductGroupSnapshotRid,
} from "../__components.js";

/**
 * Returns the full details of a specific snapshot.
 *
 * Throws ProductGroupNotFound if the product group does not exist or the requestor does not have view access.
 * Throws ProductGroupSnapshotNotFound if the snapshot does not exist or the requestor does not have view access
 * for all product group members included in the snapshot.
 */
export async function getSnapshot(
  ctx: ConjureContext,
  productGroupRid: _api_ProductGroupRid,
  snapshotRid: _api_ProductGroupSnapshotRid
): Promise<_api_GetProductGroupSnapshotResponse> {
  return conjureFetch(
    ctx,
    `/product-groups/${productGroupRid}/snapshots/${snapshotRid}`,
    "GET"
  );
}
