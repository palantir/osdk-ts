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
  GetProductGroupResponse as _api_GetProductGroupResponse,
  ProductGroupRid as _api_ProductGroupRid,
} from "../__components.js";

/**
 * Gets the latest version of a product group with its members and resolved validation settings.
 */
export async function getProductGroup(
  ctx: ConjureContext,
  productGroupRid: _api_ProductGroupRid
): Promise<_api_GetProductGroupResponse> {
  return conjureFetch(ctx, `/product-groups/${productGroupRid}`, "GET");
}
