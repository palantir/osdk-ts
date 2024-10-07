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

const _list: $FoundryPlatformMethod<
  (
    agentRid: _AipAgents.AgentRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_AipAgents.ListAgentVersionsResponse>
> = [0, "/v2/aipAgents/agents/{0}/agentVersions", 2];

/**
 * List all versions for an AIP Agent.
 * Versions are returned in descending order, by most recent versions first.
 *
 * @alpha
 *
 * Required Scopes: [api:aip-agents-read]
 * URL: /v2/aipAgents/agents/{agentRid}/agentVersions
 */
export function list(
  $ctx: $Client | $ClientContext,
  ...args: [
    agentRid: _AipAgents.AgentRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_AipAgents.ListAgentVersionsResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    agentRid: _AipAgents.AgentRid,
    agentVersionString: _AipAgents.AgentVersionString,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_AipAgents.AgentVersion>
> = [0, "/v2/aipAgents/agents/{0}/agentVersions/{1}", 2];

/**
 * Get version details for an AIP Agent.
 *
 * @alpha
 *
 * Required Scopes: [api:aip-agents-read]
 * URL: /v2/aipAgents/agents/{agentRid}/agentVersions/{agentVersionString}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    agentRid: _AipAgents.AgentRid,
    agentVersionString: _AipAgents.AgentVersionString,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_AipAgents.AgentVersion> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
