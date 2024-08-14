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
  CreateGroupRequest,
  GetGroupsBatchRequestElement,
  GetGroupsBatchResponse,
  Group,
  ListGroupsResponse,
  SearchGroupsRequest,
  SearchGroupsResponse,
} from "../_components.js";

//

const _createGroup: $FoundryPlatformMethod<
  (
    $body: CreateGroupRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Group>
> = [1, "/v2/admin/groups", 3];

/**
 * Creates a new Group
 *
 * @beta
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/groups
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
> = [3, "/v2/admin/groups/{0}", 2];

/**
 * Deletes the given Group
 *
 * @beta
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/groups/{groupId}
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

const _listGroups: $FoundryPlatformMethod<
  ($queryParams?: {
    pageSize?: PageSize | undefined;
    pageToken?: PageToken | undefined;
    preview?: PreviewMode | undefined;
  }) => Promise<ListGroupsResponse>
> = [0, "/v2/admin/groups", 2];

/**
 * Lists all Groups
 *
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/groups
 */
export function listGroups(
  $ctx: $Client | $ClientContext,
  ...args: [
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListGroupsResponse> {
  return $foundryPlatformFetch($ctx, _listGroups, ...args);
}

const _getGroup: $FoundryPlatformMethod<
  (
    groupId: PrincipalId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Group>
> = [0, "/v2/admin/groups/{0}", 2];

/**
 * Get the Group
 *
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/groups/{groupId}
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

const _getGroupsBatch: $FoundryPlatformMethod<
  (
    $body: Array<GetGroupsBatchRequestElement>,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<GetGroupsBatchResponse>
> = [1, "/v2/admin/groups/getBatch", 3];

/**
 * Execute multiple get requests on Group.
 *
 * The maximum batch size for this endpoint is 500.
 *
 * @alpha
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/groups/getBatch
 */
export function getGroupsBatch(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: Array<GetGroupsBatchRequestElement>,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<GetGroupsBatchResponse> {
  return $foundryPlatformFetch($ctx, _getGroupsBatch, ...args);
}

const _searchGroups: $FoundryPlatformMethod<
  (
    $body: SearchGroupsRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<SearchGroupsResponse>
> = [1, "/v2/admin/groups/search", 3];

/**
 * @beta
 *
 * Required Scopes: []
 * URL: /v2/admin/groups/search
 */
export function searchGroups(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: SearchGroupsRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<SearchGroupsResponse> {
  return $foundryPlatformFetch($ctx, _searchGroups, ...args);
}
