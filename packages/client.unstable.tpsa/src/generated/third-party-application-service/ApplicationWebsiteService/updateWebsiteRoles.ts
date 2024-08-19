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
import type { ApplicationRid } from "../ApplicationRid.js";
import type { UpdateWebsiteRolesRequest } from "../UpdateWebsiteRolesRequest.js";

/**
 * Update the role grants on a third party application's website repository.
 *
 * Currently only viewer patches are allowed to be added on the repository which
 * controls which end users have access to load the website. The permissions of the
 * overall third party application are also inherited by the repository meaning
 * that developers who can view the third party application automatically have
 * access to load the website.
 *
 * Requires third-party-application:manage-application-website-roles on the application rid.
 */
export async function updateWebsiteRoles(
  ctx: ConjureContext,
  applicationRid: ApplicationRid,
  request: UpdateWebsiteRolesRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/application-websites/${applicationRid}/roles`,
    "PUT",
    request,
  );
}
