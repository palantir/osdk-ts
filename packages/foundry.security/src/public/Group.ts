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

import type { Group, PreviewMode, PrincipalId } from "@osdk/foundry.core";
import type { CreateGroupRequest } from "@osdk/foundry.security";
import type {
  FoundryPlatformMethod as $FoundryPlatformMethod,
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.net";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net";

//

const _createGroup: $FoundryPlatformMethod<
  (
    $body: CreateGroupRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Group>
> = [1, "/v2/security/groups", 3];

/**
 * Creates a new Group
 *
 * Required Scopes: [api:security-write]
 * URL: /v2/security/groups
 */
export function createGroup(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: CreateGroupRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Group> {
  return $foundryPlatformFetch($ctx, _createGroup, ...args);
}

const _deleteGroup: $FoundryPlatformMethod<
  (
    groupId: PrincipalId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/security/groups/{0}", 2];

/**
 * Deletes the given Group
 *
 * Required Scopes: [api:security-write]
 * URL: /v2/security/groups/{groupId}
 */
export function deleteGroup(
  $ctx: $Client | $ClientContext,
  ...args: [
    groupId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteGroup, ...args);
}

const _getGroup: $FoundryPlatformMethod<
  (
    groupId: PrincipalId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Group>
> = [0, "/v2/security/groups/{0}", 2];

/**
 * Get the Group
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/security/groups/{groupId}
 */
export function getGroup(
  $ctx: $Client | $ClientContext,
  ...args: [
    groupId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Group> {
  return $foundryPlatformFetch($ctx, _getGroup, ...args);
}
