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
} from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type {
  AddGroupMembersRequest,
  ListGroupMembersResponse,
  RemoveGroupMembersRequest,
} from "../_components.js";

//

const _listGroupMembers: $FoundryPlatformMethod<
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
  $ctx: $Client | $ClientContext,
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
  return $foundryPlatformFetch($ctx, _listGroupMembers, ...args);
}

const _addGroupMembers: $FoundryPlatformMethod<
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
  $ctx: $Client | $ClientContext,
  ...args: [
    groupId: PrincipalId,
    $body: AddGroupMembersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _addGroupMembers, ...args);
}

const _removeGroupMembers: $FoundryPlatformMethod<
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
  $ctx: $Client | $ClientContext,
  ...args: [
    groupId: PrincipalId,
    $body: RemoveGroupMembersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _removeGroupMembers, ...args);
}
