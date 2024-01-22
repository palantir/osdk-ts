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
import type { TypeGroupSetOrganizationsRequest } from "../TypeGroupSetOrganizationsRequest.js";

/**
 * Endpoint to batch set organization markings on TypeGroups. The requesting user
 * should have permissions to modify the specified TypeGroupRid(s) and have
 * relevant permissions to apply the specified organizations' markings. At most 50 TypeGroups can be set in the
 * same request.
 */
export async function setOrganizationsForTypeGroups(
  ctx: ConjureContext,
  request: TypeGroupSetOrganizationsRequest,
): Promise<void> {
  return conjureFetch(ctx, `/type-groups/orgs`, "PUT", request);
}
