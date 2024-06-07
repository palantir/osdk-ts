/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { CheckBulkOperationPermissionsRequest } from "../CheckBulkOperationPermissionsRequest.js";
import type { CheckBulkOperationPermissionsResponse } from "../CheckBulkOperationPermissionsResponse.js";

/**
 * Returns whether the user has permission to perform the operation on the requested versioned object sets.
 */
export async function checkBulkOperationPermissions(
  ctx: ConjureContext,
  request: CheckBulkOperationPermissionsRequest,
): Promise<CheckBulkOperationPermissionsResponse> {
  return conjureFetch(
    ctx,
    `/bulk/versionedObjectSets/permissionCheck`,
    "PUT",
    request,
  );
}
