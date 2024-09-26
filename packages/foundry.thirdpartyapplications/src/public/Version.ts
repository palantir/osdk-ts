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

import type * as _Core from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _ThirdPartyApplications from "../_components.js";

//

const _deleteVersion: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    versionVersion: _ThirdPartyApplications.VersionVersion,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/thirdPartyApplications/{0}/website/versions/{1}", 2];

/**
 * Delete the Version with the specified version.
 *
 * @beta
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions/{versionVersion}
 */
export function deleteVersion(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    versionVersion: _ThirdPartyApplications.VersionVersion,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteVersion, ...args);
}

const _listVersions: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_ThirdPartyApplications.ListVersionsResponse>
> = [0, "/v2/thirdPartyApplications/{0}/website/versions", 2];

/**
 * Lists all Versions.
 *
 * This is a paged endpoint. Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are more results available, the `nextPageToken` field will be populated. To get the next page, make the same request again, but set the value of the `pageToken` query parameter to be value of the `nextPageToken` value of the previous response. If there is no `nextPageToken` field in the response, you are on the last page.
 *
 * @beta
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions
 */
export function listVersions(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_ThirdPartyApplications.ListVersionsResponse> {
  return $foundryPlatformFetch($ctx, _listVersions, ...args);
}

const _getVersion: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    versionVersion: _ThirdPartyApplications.VersionVersion,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_ThirdPartyApplications.Version>
> = [0, "/v2/thirdPartyApplications/{0}/website/versions/{1}", 2];

/**
 * Get the Version with the specified version.
 *
 * @beta
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions/{versionVersion}
 */
export function getVersion(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    versionVersion: _ThirdPartyApplications.VersionVersion,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_ThirdPartyApplications.Version> {
  return $foundryPlatformFetch($ctx, _getVersion, ...args);
}

const _uploadVersion: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    $body: Blob,
    $queryParams: {
      version: _ThirdPartyApplications.VersionVersion;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_ThirdPartyApplications.Version>
> = [
  1,
  "/v2/thirdPartyApplications/{0}/website/versions/upload",
  3,
  "application/octet-stream",
];

/**
 * Upload a new version of the Website.
 *
 * @beta
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions/upload
 */
export function uploadVersion(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    $body: Blob,
    $queryParams: {
      version: _ThirdPartyApplications.VersionVersion;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_ThirdPartyApplications.Version> {
  return $foundryPlatformFetch($ctx, _uploadVersion, ...args);
}
