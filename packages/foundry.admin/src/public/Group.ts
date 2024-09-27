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
import type * as _Admin from "../_components.js";

//

const _createGroup: $FoundryPlatformMethod<
  (
    $body: _Admin.CreateGroupRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.Group>
> = [1, "/v2/admin/groups", 3];

/**
 * Creates a new Group.
 *
 * @beta
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/groups
 */
export function createGroup(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Admin.CreateGroupRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.Group> {
  return $foundryPlatformFetch($ctx, _createGroup, ...args);
}

const _deleteGroup: $FoundryPlatformMethod<
  (
    groupId: _Core.PrincipalId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/admin/groups/{0}", 2];

/**
 * Delete the Group with the specified id.
 *
 * @beta
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/groups/{groupId}
 */
export function deleteGroup(
  $ctx: $Client | $ClientContext,
  ...args: [
    groupId: _Core.PrincipalId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteGroup, ...args);
}

const _listGroups: $FoundryPlatformMethod<
  ($queryParams?: {
    pageSize?: _Core.PageSize | undefined;
    pageToken?: _Core.PageToken | undefined;
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Admin.ListGroupsResponse>
> = [0, "/v2/admin/groups", 2];

/**
 * Lists all Groups.
 *
 * This is a paged endpoint. Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are more results available, the `nextPageToken` field will be populated. To get the next page, make the same request again, but set the value of the `pageToken` query parameter to be value of the `nextPageToken` value of the previous response. If there is no `nextPageToken` field in the response, you are on the last page.
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
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Admin.ListGroupsResponse> {
  return $foundryPlatformFetch($ctx, _listGroups, ...args);
}

const _getGroup: $FoundryPlatformMethod<
  (
    groupId: _Core.PrincipalId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.Group>
> = [0, "/v2/admin/groups/{0}", 2];

/**
 * Get the Group with the specified id.
 *
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/groups/{groupId}
 */
export function getGroup(
  $ctx: $Client | $ClientContext,
  ...args: [
    groupId: _Core.PrincipalId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.Group> {
  return $foundryPlatformFetch($ctx, _getGroup, ...args);
}

const _getGroupsBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Admin.GetGroupsBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.GetGroupsBatchResponse>
> = [1, "/v2/admin/groups/getBatch", 3];

/**
 * Execute multiple get requests on Group.
 *
 * The maximum batch size for this endpoint is 500.
 *
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/groups/getBatch
 */
export function getGroupsBatch(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: Array<_Admin.GetGroupsBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.GetGroupsBatchResponse> {
  return $foundryPlatformFetch($ctx, _getGroupsBatch, ...args);
}

const _searchGroups: $FoundryPlatformMethod<
  (
    $body: _Admin.SearchGroupsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.SearchGroupsResponse>
> = [1, "/v2/admin/groups/search", 3];

/**
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/groups/search
 */
export function searchGroups(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Admin.SearchGroupsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.SearchGroupsResponse> {
  return $foundryPlatformFetch($ctx, _searchGroups, ...args);
}
