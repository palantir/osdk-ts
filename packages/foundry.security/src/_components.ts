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
  AttributeName,
  AttributeValues,
  Group,
  GroupMember,
  GroupMembership,
  GroupMembershipExpiration,
  GroupName,
  GroupSearchFilter,
  OrganizationRid,
  PageSize,
  PageToken,
  PrincipalId,
  User,
  UserSearchFilter,
} from "@osdk/foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: SAFE
 */
export interface AddGroupMembersRequest {
  principalIds: Array<PrincipalId>;
  expiration?: GroupMembershipExpiration;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateGroupRequest {
  name: GroupName;
  organizations: Array<OrganizationRid>;
  description?: string;
  attributes: Record<AttributeName, AttributeValues>;
}

/**
 * Log Safety: SAFE
 */
export interface ListGroupMembersResponse {
  data: Array<GroupMember>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: SAFE
 */
export interface ListGroupMembershipsResponse {
  data: Array<GroupMembership>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListGroupsResponse {
  data: Array<Group>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListUsersResponse {
  data: Array<User>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: SAFE
 */
export interface RemoveGroupMembersRequest {
  principalIds: Array<PrincipalId>;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchGroupsRequest {
  where: GroupSearchFilter;
  pageSize?: PageSize;
  pageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchUsersRequest {
  where: UserSearchFilter;
  pageSize?: PageSize;
  pageToken?: PageToken;
}
