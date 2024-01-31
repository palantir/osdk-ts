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

import { createFetch } from "../../createFetch.mjs";
import { fetchWebsiteRepositoryRid } from "../../third-party-application-service/fetchWebsiteRepositoryRid.mjs";
import type { ThirdPartyAppRid } from "../../ThirdPartyAppRid.js";
import { getSiteAssetBaseUrl } from "./getSiteAssetBaseUrl.mjs";
import type { SiteAssetVersions } from "./SiteAssetVersions.mjs";

export async function fetchSiteVersions(
  baseUrl: string,
  thirdPartyAppRid: ThirdPartyAppRid,
  token: string,
) {
  const repositoryRid = await fetchWebsiteRepositoryRid(
    baseUrl,
    thirdPartyAppRid,
    token,
  );

  const url = `${getSiteAssetBaseUrl(baseUrl, repositoryRid)}/versions`;
  const fetch = createFetch(() => token);

  const result = await fetch(url);
  if (result.status === 200) {
    const response: SiteAssetVersions = await result.json();
    return response.versions;
  } else {
    throw new Error(
      `Unexpected response code ${result.status} (${result.statusText})`,
    );
  }
}
