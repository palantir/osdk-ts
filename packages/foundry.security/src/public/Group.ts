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

import type { Group, PreviewMode, PrincipalId } from "@osdk/foundry.common";
import type { CreateGroupRequest } from "@osdk/foundry.security";
import type {
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";

//

const _createGroup: $OmniMethod<
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
  $ctx: $ClientContext<any>,
  ...args: [
    $body: CreateGroupRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Group> {
  return $omniFetch($ctx, _createGroup, ...args);
}

const _deleteGroup: $OmniMethod<
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
  $ctx: $ClientContext<any>,
  ...args: [
    groupId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $omniFetch($ctx, _deleteGroup, ...args);
}

const _getGroup: $OmniMethod<
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
  $ctx: $ClientContext<any>,
  ...args: [
    groupId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Group> {
  return $omniFetch($ctx, _getGroup, ...args);
}
