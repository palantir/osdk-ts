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

import type { PreviewMode, PrincipalId, User } from "@osdk/foundry.common";
import type {
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";

//

const _deleteUser: $OmniMethod<
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
  $ctx: $ClientContext<any>,
  ...args: [
    userId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<void> {
  return $omniFetch($ctx, _deleteUser, ...args);
}

const _getUser: $OmniMethod<
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
  $ctx: $ClientContext<any>,
  ...args: [
    userId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<User> {
  return $omniFetch($ctx, _getUser, ...args);
}

const _meUsers: $OmniMethod<
  ($queryParams?: { preview?: PreviewMode | undefined }) => Promise<User>
> = [0, "/v2/security/users/me", 2];

/**
 * Required Scopes: []
 * URL: /v2/security/users/me
 */
export function meUsers(
  $ctx: $ClientContext<any>,
  ...args: [$queryParams?: { preview?: PreviewMode | undefined }]
): Promise<User> {
  return $omniFetch($ctx, _meUsers, ...args);
}

const _profilePictureUser: $OmniMethod<
  (
    userId: PrincipalId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<unknown>
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
  $ctx: $ClientContext<any>,
  ...args: [
    userId: PrincipalId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<unknown> {
  return $omniFetch($ctx, _profilePictureUser, ...args);
}
