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
  PrincipalId,
} from "@osdk/foundry.common";
import type {
  AddGroupMembersRequest,
  ListGroupMembersResponse,
  RemoveGroupMembersRequest,
} from "@osdk/foundry.security";
import type {
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";

//

const _listGroupMembers: $OmniMethod<
  (
    groupId: PrincipalId,
    $queryParams?: {
      transitive?: boolean | undefined;
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<ListGroupMembersResponse>
> = [0, "/v2/security/groups/{0}/groupMembers", 2];

/**
 * Lists all GroupMembers
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/security/groups/{groupId}/groupMembers
 */
export function listGroupMembers(
  $ctx: $ClientContext<any>,
  ...args: [
    groupId: PrincipalId,

    $queryParams?: {
      transitive?: boolean | undefined;
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListGroupMembersResponse> {
  return $omniFetch($ctx, _listGroupMembers, ...args);
}

const _addGroupMembers: $OmniMethod<
  (
    groupId: PrincipalId,
    $body: AddGroupMembersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/security/groups/{0}/groupMembers/add", 3];

/**
 * Required Scopes: [api:security-write]
 * URL: /v2/security/groups/{groupId}/groupMembers/add
 */
export function addGroupMembers(
  $ctx: $ClientContext<any>,
  ...args: [
    groupId: PrincipalId,
    $body: AddGroupMembersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $omniFetch($ctx, _addGroupMembers, ...args);
}

const _removeGroupMembers: $OmniMethod<
  (
    groupId: PrincipalId,
    $body: RemoveGroupMembersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/security/groups/{0}/groupMembers/remove", 3];

/**
 * Required Scopes: [api:security-write]
 * URL: /v2/security/groups/{groupId}/groupMembers/remove
 */
export function removeGroupMembers(
  $ctx: $ClientContext<any>,
  ...args: [
    groupId: PrincipalId,
    $body: RemoveGroupMembersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $omniFetch($ctx, _removeGroupMembers, ...args);
}
