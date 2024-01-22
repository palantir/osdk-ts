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
import type { TypeGroupGetOrganizationsRequest } from "../TypeGroupGetOrganizationsRequest.js";
import type { TypeGroupGetOrganizationsResponse } from "../TypeGroupGetOrganizationsResponse.js";

/**
 * Endpoint to batch load organization rids per TypeGroup. The response will only contain entries for
 * TypeGroupRid(s) paired with Organizations that are visible to the user. At most 500 TypeGroupRids can be
 * requested in the same request.
 */
export async function getOrganizationsForTypeGroups(
  ctx: ConjureContext,
  request: TypeGroupGetOrganizationsRequest,
): Promise<TypeGroupGetOrganizationsResponse> {
  return conjureFetch(ctx, `/type-groups/orgs/get`, "PUT", request);
}
