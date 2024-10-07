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
import type * as _AipAgents from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    agentRid: _AipAgents.AgentRid,
    $queryParams?: {
      version?: _AipAgents.AgentVersionString | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_AipAgents.Agent>
> = [0, "/v2/aipAgents/agents/{0}", 2];

/**
 * Get details for an AIP Agent.
 *
 * @alpha
 *
 * Required Scopes: [api:aip-agents-read]
 * URL: /v2/aipAgents/agents/{agentRid}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    agentRid: _AipAgents.AgentRid,

    $queryParams?: {
      version?: _AipAgents.AgentVersionString | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_AipAgents.Agent> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
