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
  ValidateProductsRequest as _api_ValidateProductsRequest,
  ValidateProductsResponse as _api_ValidateProductsResponse,
} from "../__components.js";

/**
 * Validates a product group. The requestor must have access to view all members of the group.
 *
 * Throws ProductGroupNotFound if the product group does not exist or the requestor does not have view access.
 * Throws ProductGroupVersionNotFound if {@code productGroupVersionRid} is provided and does not correspond
 * to a version of the specified product group.
 * Throws MemberSourcesNotResolvableDuringValidation if one or more member sources cannot be resolved
 * (e.g. no finalized version exists or the user lacks permission to view the source).
 */
export async function validateProducts(
  ctx: ConjureContext,
  request: _api_ValidateProductsRequest,
): Promise<_api_ValidateProductsResponse> {
  return conjureFetch(ctx, `/product-groups/validate`, "POST", request);
}
