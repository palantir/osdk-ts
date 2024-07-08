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
  SearchUsersResponse,
  User,
} from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type { ListUsersResponse, SearchUsersRequest } from "../_components.js";

//

const _deleteUser: $FoundryPlatformMethod<
  (
    userId: PrincipalId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/security/users/{0}", 2];

/**
 * Deletes the given User
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/security/users/{userId}
 */
export function deleteUser(
  $ctx: $Client | $ClientContext,
  ...args: [
    userId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteUser, ...args);
}

const _listUsers: $FoundryPlatformMethod<
  ($queryParams?: {
    pageSize?: PageSize | undefined;
    pageToken?: PageToken | undefined;
    preview?: PreviewMode | undefined;
  }) => Promise<ListUsersResponse>
> = [0, "/v2/security/users", 2];

/**
 * Lists all Users
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/security/users
 */
export function listUsers(
  $ctx: $Client | $ClientContext,
  ...args: [
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListUsersResponse> {
  return $foundryPlatformFetch($ctx, _listUsers, ...args);
}

const _getUser: $FoundryPlatformMethod<
  (
    userId: PrincipalId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<User>
> = [0, "/v2/security/users/{0}", 2];

/**
 * Get the User
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/security/users/{userId}
 */
export function getUser(
  $ctx: $Client | $ClientContext,
  ...args: [
    userId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<User> {
  return $foundryPlatformFetch($ctx, _getUser, ...args);
}

const _getCurrentUser: $FoundryPlatformMethod<
  ($queryParams?: { preview?: PreviewMode | undefined }) => Promise<User>
> = [0, "/v2/security/users/getCurrent", 2];

/**
 * Required Scopes: []
 * URL: /v2/security/users/getCurrent
 */
export function getCurrentUser(
  $ctx: $Client | $ClientContext,
  ...args: [$queryParams?: { preview?: PreviewMode | undefined }]
): Promise<User> {
  return $foundryPlatformFetch($ctx, _getCurrentUser, ...args);
}

const _profilePictureUser: $FoundryPlatformMethod<
  (
    userId: PrincipalId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Blob>
> = [
  0,
  "/v2/security/users/{0}/profilePicture",
  2,
  ,
  "application/octet-stream",
];

/**
 * Required Scopes: []
 * URL: /v2/security/users/{userId}/profilePicture
 */
export function profilePictureUser(
  $ctx: $Client | $ClientContext,
  ...args: [
    userId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _profilePictureUser, ...args);
}

const _searchUsers: $FoundryPlatformMethod<
  (
    $body: SearchUsersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<SearchUsersResponse>
> = [1, "/v2/security/users/search", 3];

/**
 * Required Scopes: []
 * URL: /v2/security/users/search
 */
export function searchUsers(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: SearchUsersRequest,
    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<SearchUsersResponse> {
  return $foundryPlatformFetch($ctx, _searchUsers, ...args);
}
