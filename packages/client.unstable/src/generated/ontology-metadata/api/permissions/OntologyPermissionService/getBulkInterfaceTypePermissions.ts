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
import type { GetBulkInterfaceTypePermissionsRequest } from "../GetBulkInterfaceTypePermissionsRequest.js";
import type { GetBulkInterfaceTypePermissionsResponse } from "../GetBulkInterfaceTypePermissionsResponse.js";

/**
 * Returns which permissions the user has on the InterfaceTypes provided. Limited to at most 500 entries per
 * call.
 */
export async function getBulkInterfaceTypePermissions(
  ctx: ConjureContext,
  request: GetBulkInterfaceTypePermissionsRequest,
): Promise<GetBulkInterfaceTypePermissionsResponse> {
  return conjureFetch(ctx, `/permissions/interfaceTypes`, "PUT", request);
}
