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
  CreateAccessRequestRequest as _api_accessrequest_CreateAccessRequestRequest,
  CreateAccessRequestResponse as _api_accessrequest_CreateAccessRequestResponse,
} from "../__components.js";

/**
 * Throws:
 * - InvalidAccessRequest if:
 * - If for a InternalRealmGroupAdditionSubRequest:
 * - The group requested does not have roles on the ontology entity
 * - The group is deleted
 * - The requesting principal is a group and the requesting user is not a member of the group the user is
 * requesting access on behalf of
 * - The expiration is not in the future or doesn't satisfy the group's expiration settings
 * - If for a RoleGrantSubRequest:
 * - The request principal is a group the requesting user isn't a member of
 * - The role is invalid.
 * - NotFound if the ontology entity doesn't exist
 */
export async function createAccessRequest(
  ctx: ConjureContext,
  request: _api_accessrequest_CreateAccessRequestRequest,
): Promise<_api_accessrequest_CreateAccessRequestResponse> {
  return conjureFetch(ctx, `/ontology/access-request/request`, "POST", request);
}
