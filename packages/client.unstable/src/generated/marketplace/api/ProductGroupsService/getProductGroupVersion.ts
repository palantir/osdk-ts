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
  GetProductGroupVersionResponse as _api_GetProductGroupVersionResponse,
  ProductGroupRid as _api_ProductGroupRid,
  ProductGroupVersionRid as _api_ProductGroupVersionRid,
} from "../__components.js";

/**
 * Gets the specified version of a product group's definition with its members and resolved
 * validation settings.
 *
 * Throws ProductGroupNotFound if the product group does not exist or the requestor does not
 * have view access.
 * Throws ProductGroupVersionNotFound if the given version rid does not correspond to a version
 * of the specified product group.
 */
export async function getProductGroupVersion(
  ctx: ConjureContext,
  productGroupRid: _api_ProductGroupRid,
  productGroupVersionRid: _api_ProductGroupVersionRid
): Promise<_api_GetProductGroupVersionResponse> {
  return conjureFetch(
    ctx,
    `/product-groups/${productGroupRid}/version/${productGroupVersionRid}`,
    "GET"
  );
}
