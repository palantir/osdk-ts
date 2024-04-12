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
import type { WebsiteVersion } from "./WebsiteVersion.mjs";

export async function uploadWebsiteVersion(
  ctx: InternalClientContext,
  thirdPartyAppRid: ThirdPartyAppRid,
  version: string,
  zipFile: ReadableStream | Blob | BufferSource,
): Promise<WebsiteVersion> {
  const fetch = createFetch(ctx.tokenProvider);
  const url =
    `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/websiteVersions/upload?version=${version}&preview=true`;

  const result = await fetch(
    url,
    {
      method: "POST",
      body: zipFile,
      headers: {
        "Content-Type": "application/octet-stream",
      },
      duplex: "half", // Node hates me
    } satisfies RequestInit & { duplex: "half" } as any,
  );
  return result.json();
}
