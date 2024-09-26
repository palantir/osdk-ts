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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: SAFE
 */
export interface AddGroupMembersRequest {
  principalIds: Array<_Core.PrincipalId>;
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
  organizations: Array<_Core.OrganizationRid>;
  description?: string;
  attributes: Record<AttributeName, AttributeValues>;
}

/**
 * Log Safety: SAFE
 */
export interface GetGroupsBatchRequestElement {
  groupId: _Core.PrincipalId;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetGroupsBatchResponse {
  data: Record<_Core.PrincipalId, Group>;
}

/**
 * Log Safety: SAFE
 */
export interface GetMarkingsBatchRequestElement {
  markingId: _Core.MarkingId;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetMarkingsBatchResponse {
  data: Record<_Core.MarkingId, Marking>;
}

/**
 * Log Safety: SAFE
 */
export interface GetUserMarkingsResponse {
  view: Array<_Core.MarkingId>;
}

/**
 * Log Safety: SAFE
 */
export interface GetUsersBatchRequestElement {
  userId: _Core.PrincipalId;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetUsersBatchResponse {
  data: Record<_Core.PrincipalId, User>;
}

/**
 * Log Safety: UNSAFE
 */
export interface Group {
  id: _Core.PrincipalId;
  name: GroupName;
  description?: string;
  realm: _Core.Realm;
  organizations: Array<_Core.OrganizationRid>;
  attributes: Record<AttributeName, AttributeValues>;
}

/**
 * Log Safety: SAFE
 */
export interface GroupMember {
  principalType: _Core.PrincipalType;
  principalId: _Core.PrincipalId;
}

/**
 * Log Safety: SAFE
 */
export interface GroupMembership {
  groupId: _Core.PrincipalId;
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
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListGroupMembershipsResponse {
  data: Array<GroupMembership>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListGroupsResponse {
  data: Array<Group>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListMarkingCategoriesResponse {
  data: Array<MarkingCategory>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListMarkingsResponse {
  data: Array<Marking>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListUsersResponse {
  data: Array<User>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface Marking {
  id: _Core.MarkingId;
  categoryId: MarkingCategoryId;
  displayName: MarkingDisplayName;
  description?: string;
  organizationRid?: _Core.OrganizationRid;
  createdTime: _Core.CreatedTime;
  createdBy?: _Core.CreatedBy;
}

/**
 * Log Safety: UNSAFE
 */
export interface MarkingCategory {
  id: MarkingCategoryId;
  displayName: MarkingCategoryDisplayName;
  description?: string;
  categoryType: MarkingCategoryType;
  markingType: MarkingType;
  markings: Array<_Core.MarkingId>;
  createdTime: _Core.CreatedTime;
  createdBy?: _Core.CreatedBy;
}

/**
 * Log Safety: UNSAFE
 */
export type MarkingCategoryDisplayName = LooselyBrandedString<
  "MarkingCategoryDisplayName"
>;

/**
   * The ID of a marking category. For user-created categories, this will be a UUID. Markings associated with
Organizations are placed in a category with ID "Organization".
   *
   * Log Safety: SAFE
   */
export type MarkingCategoryId = LooselyBrandedString<"MarkingCategoryId">;

/**
 * Log Safety: SAFE
 */
export type MarkingCategoryType = "CONJUNCTIVE" | "DISJUNCTIVE";

/**
 * Log Safety: UNSAFE
 */
export type MarkingDisplayName = LooselyBrandedString<"MarkingDisplayName">;

/**
 * Log Safety: SAFE
 */
export type MarkingType = "MANDATORY" | "CBAC";

/**
 * Log Safety: SAFE
 */
export type PrincipalFilterType = "queryString";

/**
 * Log Safety: SAFE
 */
export interface RemoveGroupMembersRequest {
  principalIds: Array<_Core.PrincipalId>;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchGroupsRequest {
  where: GroupSearchFilter;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchGroupsResponse {
  data: Array<Group>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchUsersRequest {
  where: UserSearchFilter;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchUsersResponse {
  data: Array<User>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface User {
  id: _Core.PrincipalId;
  username: UserUsername;
  givenName?: string;
  familyName?: string;
  email?: string;
  realm: _Core.Realm;
  organization?: _Core.OrganizationRid;
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
