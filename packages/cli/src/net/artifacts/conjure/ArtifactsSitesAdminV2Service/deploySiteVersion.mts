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

import { createFetch } from "../../../createFetch.mjs";
import { fetchWebsiteRepositoryRid } from "../../../third-party-application-service/fetchWebsiteRepositoryRid.mjs";
import type { ThirdPartyAppRid } from "../../../ThirdPartyAppRid.js";
import { getSitesAdminV2ServiceBaseUrl } from "./getSitesAdminV2ServiceBaseUrl.mjs";
import type { SiteVersion } from "./SiteVersion.mjs";

export interface SiteAssetVersions {
  versions: string[];
}

interface UpdateDeployedVersionRequest {
  siteVersion: SiteVersion;
}

// This is from conjure but the others are not. Interestingly
export async function deploySiteVersion(
  baseUrl: string,
  thirdPartyAppRid: ThirdPartyAppRid,
  version: string,
) {
  const repositoryRid = await fetchWebsiteRepositoryRid(
    baseUrl,
    thirdPartyAppRid,
  );
  const url = `${
    getSitesAdminV2ServiceBaseUrl(baseUrl)
  }/repository/${repositoryRid}/deployed-version`;
  const fetch = createFetch(() => process.env.FOUNDRY_SDK_AUTH_TOKEN as string);

  const result = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(
      {
        siteVersion: {
          version,
        },
      } satisfies UpdateDeployedVersionRequest,
    ),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (result.status >= 200 && result.status < 300) {
    return true;
  } else if (result.status === 400) {
    throw new Error("Invalid version");
  } else {
    throw new Error(
      `Unexpected response code ${result.status} (${result.statusText})`,
    );
  }
}
