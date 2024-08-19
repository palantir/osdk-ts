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
import type { LinkWebsiteCodeRepositoryRequest } from "../LinkWebsiteCodeRepositoryRequest.js";

/**
 * Link a code repository to the application's website. This allows the code repository
 * to have permissions to upload and deploy website versions during CI.
 *
 * Only one code repository may be linked to the application's website at a time. If a
 * code repository is already linked it will be replaced by the code repository in the
 * request. An existing linked code repository may be unlinked by passing an empty code
 * repository rid in the request.
 *
 * Requires third-party-application:link-application-website-code-repository on the
 * application rid and third-party-application:view-code-repository on the code repository
 * rid if present in the request.
 */
export async function linkWebsiteCodeRepository(
  ctx: ConjureContext,
  applicationRid: ApplicationRid,
  request: LinkWebsiteCodeRepositoryRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/application-websites/${applicationRid}/link`,
    "PUT",
    request,
  );
}
