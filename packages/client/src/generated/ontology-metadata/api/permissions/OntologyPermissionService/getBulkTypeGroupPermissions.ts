/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import type { GetBulkTypeGroupPermissionsRequest } from "../GetBulkTypeGroupPermissionsRequest.js";
import type { GetBulkTypeGroupPermissionsResponse } from "../GetBulkTypeGroupPermissionsResponse.js";

/**
 * Returns which permissions the user has on the TypeGroups provided. Limited to at most 500 entries per
 * call.
 */
export async function getBulkTypeGroupPermissions(
  ctx: ConjureContext,
  request: GetBulkTypeGroupPermissionsRequest,
): Promise<GetBulkTypeGroupPermissionsResponse> {
  return conjureFetch(ctx, `/permissions/typeGroups`, "PUT", request);
}
