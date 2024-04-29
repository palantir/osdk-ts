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
import type { GetOrgSettingsByUserRequest } from "../GetOrgSettingsByUserRequest.js";
import type { GetOrgSettingsByUserResponse } from "../GetOrgSettingsByUserResponse.js";

/**
 * Endpoint to load organization-wide Ontology settings for the user sending the request based on the
 * user's membership of an organization.
 * Endpoint will throw if the user is not part of an organization or the user's organization cannot be loaded.
 */
export async function getOrgSettingsByUser(
  ctx: ConjureContext,
  request: GetOrgSettingsByUserRequest,
): Promise<GetOrgSettingsByUserResponse> {
  return conjureFetch(ctx, `/organization/getSettings/user`, "POST", request);
}
