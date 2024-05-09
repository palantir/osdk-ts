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
  ThirdPartyApplication,
  ThirdPartyApplicationRid,
} from "@osdk/foundry.core";
import type {
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";

//

const _getThirdPartyApplication: $OmniMethod<
  (
    thirdPartyApplicationRid: ThirdPartyApplicationRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<ThirdPartyApplication>
> = [0, "/v2/thirdPartyApplications/{0}", 2];

/**
 * Get the ThirdPartyApplication
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}
 */
export function getThirdPartyApplication(
  $ctx: $ClientContext<any>,
  ...args: [
    thirdPartyApplicationRid: ThirdPartyApplicationRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<ThirdPartyApplication> {
  return $omniFetch($ctx, _getThirdPartyApplication, ...args);
}
