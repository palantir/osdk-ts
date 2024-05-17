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

import type {
  PageSize,
  PageToken,
  PreviewMode,
  ThirdPartyApplicationRid,
  Version,
  VersionVersion,
} from "@osdk/foundry.core";
import type {
  FoundryPlatformMethod as $FoundryPlatformMethod,
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.net";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net";
import type { ListVersionsResponse } from "../_components.js";

//

const _deleteVersion: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    versionVersion: VersionVersion,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/thirdPartyApplications/{0}/website/versions/{1}", 2];

/**
 * Deletes the given Version
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions/{versionVersion}
 */
export function deleteVersion(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    versionVersion: VersionVersion,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteVersion, ...args);
}

const _listVersions: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<ListVersionsResponse>
> = [0, "/v2/thirdPartyApplications/{0}/website/versions", 2];

/**
 * Lists all Versions
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions
 */
export function listVersions(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,

    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListVersionsResponse> {
  return $foundryPlatformFetch($ctx, _listVersions, ...args);
}

const _getVersion: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    versionVersion: VersionVersion,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Version>
> = [0, "/v2/thirdPartyApplications/{0}/website/versions/{1}", 2];

/**
 * Get the Version
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions/{versionVersion}
 */
export function getVersion(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    versionVersion: VersionVersion,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Version> {
  return $foundryPlatformFetch($ctx, _getVersion, ...args);
}

const _uploadVersion: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    $queryParams: {
      version: VersionVersion;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<Version>
> = [
  1,
  "/v2/thirdPartyApplications/{0}/website/versions/upload",
  2,
  "application/octet-stream",
];

/**
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/versions/upload
 */
export function uploadVersion(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,

    $queryParams: {
      version: VersionVersion;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<Version> {
  return $foundryPlatformFetch($ctx, _uploadVersion, ...args);
}
