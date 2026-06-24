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
  CreateSnapshotRequest as _api_CreateSnapshotRequest,
  CreateSnapshotResponse as _api_CreateSnapshotResponse,
  ProductGroupRid as _api_ProductGroupRid,
} from "../__components.js";

/**
 * Triggers a new snapshot of a product group.
 *
 * Throws ProductGroupNotFound if the product group does not exist or the requestor does not have view access.
 * Throws CreateProductGroupSnapshotPermissionDenied if the requestor does not have the
 * 'marketplace:edit-product-group' operation on the product group.
 * Throws MemberSourcesNotResolvableDuringValidation if the target is a product group and one or more member
 * sources cannot be resolved (e.g. no finalized version exists or the user lacks permission to view the source).
 */
export async function createSnapshot(
  ctx: ConjureContext,
  productGroupRid: _api_ProductGroupRid,
  request: _api_CreateSnapshotRequest,
): Promise<_api_CreateSnapshotResponse> {
  return conjureFetch(
    ctx,
    `/product-groups/${productGroupRid}/snapshots`,
    "POST",
    request,
  );
}
