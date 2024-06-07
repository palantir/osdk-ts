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
  PreviewMode,
  ThirdPartyApplicationRid,
  Website,
} from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type { DeployWebsiteRequest } from "../_components.js";

//

const _getWebsite: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Website>
> = [0, "/v2/thirdPartyApplications/{0}/website", 2];

/**
 * Get the Website
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website
 */
export function getWebsite(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Website> {
  return $foundryPlatformFetch($ctx, _getWebsite, ...args);
}

const _deployWebsite: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    $body: DeployWebsiteRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Website>
> = [1, "/v2/thirdPartyApplications/{0}/website/deploy", 3];

/**
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/deploy
 */
export function deployWebsite(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    $body: DeployWebsiteRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Website> {
  return $foundryPlatformFetch($ctx, _deployWebsite, ...args);
}

const _undeployWebsite: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Website>
> = [1, "/v2/thirdPartyApplications/{0}/website/undeploy", 2];

/**
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}/website/undeploy
 */
export function undeployWebsite(
  $ctx: $Client | $ClientContext,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Website> {
  return $foundryPlatformFetch($ctx, _undeployWebsite, ...args);
}
