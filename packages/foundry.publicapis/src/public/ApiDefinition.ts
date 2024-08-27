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

import type { PreviewMode } from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type { ApiDefinition, IrVersion } from "../_components.js";

//

const _getApiDefinition: $FoundryPlatformMethod<
  (
    apiDefinitionVersion: IrVersion,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<ApiDefinition>
> = [0, "/v2/publicApis/apiDefinitions/{0}", 2];

/**
 * Gets the public API specification for this API.
 *
 * @alpha
 *
 * Required Scopes: [public-api:view]
 * URL: /v2/publicApis/apiDefinitions/{apiDefinitionVersion}
 */
export function getApiDefinition(
  $ctx: $Client | $ClientContext,
  ...args: [
    apiDefinitionVersion: IrVersion,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<ApiDefinition> {
  return $foundryPlatformFetch($ctx, _getApiDefinition, ...args);
}
