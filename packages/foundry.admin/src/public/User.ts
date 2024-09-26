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

const _deleteUser: $FoundryPlatformMethod<
  (
    userId: _Core.PrincipalId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/admin/users/{0}", 2];

/**
 * Delete the User with the specified id.
 *
 * @beta
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/users/{userId}
 */
export function deleteUser(
  $ctx: $Client | $ClientContext,
  ...args: [
    userId: _Core.PrincipalId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteUser, ...args);
}

const _listUsers: $FoundryPlatformMethod<
  ($queryParams?: {
    pageSize?: _Core.PageSize | undefined;
    pageToken?: _Core.PageToken | undefined;
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Admin.ListUsersResponse>
> = [0, "/v2/admin/users", 2];

/**
 * Lists all Users.
 *
 * This is a paged endpoint. Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are more results available, the `nextPageToken` field will be populated. To get the next page, make the same request again, but set the value of the `pageToken` query parameter to be value of the `nextPageToken` value of the previous response. If there is no `nextPageToken` field in the response, you are on the last page.
 *
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/users
 */
export function listUsers(
  $ctx: $Client | $ClientContext,
  ...args: [
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Admin.ListUsersResponse> {
  return $foundryPlatformFetch($ctx, _listUsers, ...args);
}

const _getUser: $FoundryPlatformMethod<
  (
    userId: _Core.PrincipalId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.User>
> = [0, "/v2/admin/users/{0}", 2];

/**
 * Get the User with the specified id.
 *
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/users/{userId}
 */
export function getUser(
  $ctx: $Client | $ClientContext,
  ...args: [
    userId: _Core.PrincipalId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.User> {
  return $foundryPlatformFetch($ctx, _getUser, ...args);
}

const _getUsersBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Admin.GetUsersBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.GetUsersBatchResponse>
> = [1, "/v2/admin/users/getBatch", 3];

/**
 * Execute multiple get requests on User.
 *
 * The maximum batch size for this endpoint is 500.
 *
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/users/getBatch
 */
export function getUsersBatch(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: Array<_Admin.GetUsersBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.GetUsersBatchResponse> {
  return $foundryPlatformFetch($ctx, _getUsersBatch, ...args);
}

const _getCurrentUser: $FoundryPlatformMethod<
  ($queryParams?: {
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Admin.User>
> = [0, "/v2/admin/users/getCurrent", 2];

/**
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/users/getCurrent
 */
export function getCurrentUser(
  $ctx: $Client | $ClientContext,
  ...args: [$queryParams?: { preview?: _Core.PreviewMode | undefined }]
): Promise<_Admin.User> {
  return $foundryPlatformFetch($ctx, _getCurrentUser, ...args);
}

const _getMarkingsUser: $FoundryPlatformMethod<
  (
    userId: _Core.PrincipalId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.GetUserMarkingsResponse>
> = [0, "/v2/admin/users/{0}/getMarkings", 2];

/**
 * Retrieve Markings that the user is currently a member of.
 *
 * @alpha
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/admin/users/{userId}/getMarkings
 */
export function getMarkingsUser(
  $ctx: $Client | $ClientContext,
  ...args: [
    userId: _Core.PrincipalId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.GetUserMarkingsResponse> {
  return $foundryPlatformFetch($ctx, _getMarkingsUser, ...args);
}

const _getProfilePictureOfUser: $FoundryPlatformMethod<
  (
    userId: _Core.PrincipalId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<Blob>
> = [0, "/v2/admin/users/{0}/profilePicture", 2, , "application/octet-stream"];

/**
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/users/{userId}/profilePicture
 */
export function getProfilePictureOfUser(
  $ctx: $Client | $ClientContext,
  ...args: [
    userId: _Core.PrincipalId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _getProfilePictureOfUser, ...args);
}

const _searchUsers: $FoundryPlatformMethod<
  (
    $body: _Admin.SearchUsersRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.SearchUsersResponse>
> = [1, "/v2/admin/users/search", 3];

/**
 * @beta
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/users/search
 */
export function searchUsers(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Admin.SearchUsersRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.SearchUsersResponse> {
  return $foundryPlatformFetch($ctx, _searchUsers, ...args);
}
