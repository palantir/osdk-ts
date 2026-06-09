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
  EditProductGroupRequest as _api_EditProductGroupRequest,
  EditProductGroupResponse as _api_EditProductGroupResponse,
  ProductGroupRid as _api_ProductGroupRid,
} from "../__components.js";

/**
 * Edits a product group. The requestor must have view access to all members listed in the product group.
 */
export async function editProductGroup(
  ctx: ConjureContext,
  productGroupRid: _api_ProductGroupRid,
  request: _api_EditProductGroupRequest,
): Promise<_api_EditProductGroupResponse> {
  return conjureFetch(
    ctx,
    `/product-groups/${productGroupRid}`,
    "PUT",
    request,
  );
}
