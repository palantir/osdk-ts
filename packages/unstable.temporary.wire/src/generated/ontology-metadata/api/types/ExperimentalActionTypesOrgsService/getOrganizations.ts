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
import type { ActionTypeGetOrganizationsRequest } from "../../ActionTypeGetOrganizationsRequest.js";
import type { ActionTypeGetOrganizationsResponse } from "../../ActionTypeGetOrganizationsResponse.js";

/**
 * This is an experimental endpoint and does not have any backwards-compatibility guarantees.
 * Please contact the Ontology team if you wish to use it.
 * Endpoint to batch load organization rids per ActionType. The response will only contain entries for
 * ActionTypeRid(s) paired with Organizations that are visible to the user.
 */
export async function getOrganizations(
  ctx: ConjureContext,
  request: ActionTypeGetOrganizationsRequest,
): Promise<ActionTypeGetOrganizationsResponse> {
  return conjureFetch(ctx, `/actions/orgs/get/v2`, "POST", request);
}
