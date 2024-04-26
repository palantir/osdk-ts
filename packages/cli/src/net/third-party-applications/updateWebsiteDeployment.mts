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

import { createFetch } from "../createFetch.mjs";
import type { InternalClientContext } from "../internalClientContext.mjs";
import type { ThirdPartyAppRid } from "../ThirdPartyAppRid.js";
import type { UpdateWebsiteDeploymentRequest } from "./UpdateWebsiteDeploymentRequest.mjs";
import type { WebsiteDeployment } from "./WebsiteDeployment.mjs";

export async function updateWebsiteDeployment(
  ctx: InternalClientContext,
  thirdPartyAppRid: ThirdPartyAppRid,
  request: UpdateWebsiteDeploymentRequest,
): Promise<WebsiteDeployment> {
  const fetch = createFetch(ctx.tokenProvider);
  const url =
    `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/websiteDeployment?preview=true`;

  const result = await fetch(
    url,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.json();
}
