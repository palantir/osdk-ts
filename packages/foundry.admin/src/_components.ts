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
  OrganizationRid,
  PageSize,
  PageToken,
  PrincipalId,
  PrincipalType,
  Realm,
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
export type AttributeName = LooselyBrandedString<"AttributeName">;

/**
 * Log Safety: UNSAFE
 */
export type AttributeValue = LooselyBrandedString<"AttributeValue">;

/**
 * Log Safety: UNSAFE
 */
export type AttributeValues = Array<AttributeValue>;

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
export interface GetGroupsBatchRequestElement {
  groupId: PrincipalId;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetGroupsBatchResponse {
  data: Record<PrincipalId, Group>;
}

/**
 * Log Safety: SAFE
 */
export interface GetUsersBatchRequestElement {
  userId: PrincipalId;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetUsersBatchResponse {
  data: Record<PrincipalId, User>;
}

/**
 * Log Safety: UNSAFE
 */
export interface Group {
  id: PrincipalId;
  name: GroupName;
  description?: string;
  realm: Realm;
  organizations: Array<OrganizationRid>;
  attributes: Record<AttributeName, AttributeValues>;
}

/**
 * Log Safety: SAFE
 */
export interface GroupMember {
  principalType: PrincipalType;
  principalId: PrincipalId;
}

/**
 * Log Safety: SAFE
 */
export interface GroupMembership {
  groupId: PrincipalId;
}

/**
 * Log Safety: SAFE
 */
export type GroupMembershipExpiration = string;

/**
 * The name of the Group.
 *
 * Log Safety: UNSAFE
 */
export type GroupName = LooselyBrandedString<"GroupName">;

/**
 * Log Safety: UNSAFE
 */
export interface GroupSearchFilter {
  type: PrincipalFilterType;
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListGroupMembersResponse {
  data: Array<GroupMember>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
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
export type PrincipalFilterType = "queryString";

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
export interface SearchGroupsResponse {
  data: Array<Group>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchUsersRequest {
  where: UserSearchFilter;
  pageSize?: PageSize;
  pageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchUsersResponse {
  data: Array<User>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface User {
  id: PrincipalId;
  username: UserUsername;
  givenName?: string;
  familyName?: string;
  email?: string;
  realm: Realm;
  organization?: OrganizationRid;
  attributes: Record<AttributeName, AttributeValues>;
}

/**
 * Log Safety: UNSAFE
 */
export interface UserSearchFilter {
  type: PrincipalFilterType;
  value: string;
}

/**
 * The Foundry username of the User. This is unique within the realm.
 *
 * Log Safety: UNSAFE
 */
export type UserUsername = LooselyBrandedString<"UserUsername">;
