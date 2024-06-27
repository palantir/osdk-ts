/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { Empty } from "./Empty.js";
import type { UserAttributes } from "./UserAttributes.js";
export interface UserPropertyValue_userId {
  type: "userId";
  userId: Empty;
}

export interface UserPropertyValue_groupIds {
  type: "groupIds";
  groupIds: Empty;
}

export interface UserPropertyValue_userName {
  type: "userName";
  userName: Empty;
}

export interface UserPropertyValue_groupNames {
  type: "groupNames";
  groupNames: Empty;
}

export interface UserPropertyValue_userAttributes {
  type: "userAttributes";
  userAttributes: UserAttributes;
}

export interface UserPropertyValue_organizationMarkingIds {
  type: "organizationMarkingIds";
  organizationMarkingIds: Empty;
}
export type UserPropertyValue =
  | UserPropertyValue_userId
  | UserPropertyValue_groupIds
  | UserPropertyValue_userName
  | UserPropertyValue_groupNames
  | UserPropertyValue_userAttributes
  | UserPropertyValue_organizationMarkingIds;
