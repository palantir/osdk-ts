/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { SecurityGroupGroupIdsUserProperty } from "./SecurityGroupGroupIdsUserProperty.js";
import type { SecurityGroupGroupNamesUserProperty } from "./SecurityGroupGroupNamesUserProperty.js";
import type { SecurityGroupUserAttributesUserProperty } from "./SecurityGroupUserAttributesUserProperty.js";
import type { SecurityGroupUserIdUserProperty } from "./SecurityGroupUserIdUserProperty.js";
import type { SecurityGroupUsernameUserProperty } from "./SecurityGroupUsernameUserProperty.js";
export interface SecurityGroupComparisonUserProperty_userId {
  type: "userId";
  userId: SecurityGroupUserIdUserProperty;
}

export interface SecurityGroupComparisonUserProperty_username {
  type: "username";
  username: SecurityGroupUsernameUserProperty;
}

export interface SecurityGroupComparisonUserProperty_groupIds {
  type: "groupIds";
  groupIds: SecurityGroupGroupIdsUserProperty;
}

export interface SecurityGroupComparisonUserProperty_groupNames {
  type: "groupNames";
  groupNames: SecurityGroupGroupNamesUserProperty;
}

export interface SecurityGroupComparisonUserProperty_userAttributes {
  type: "userAttributes";
  userAttributes: SecurityGroupUserAttributesUserProperty;
}
/**
 * A value represented by a property of a user.
 */
export type SecurityGroupComparisonUserProperty =
  | SecurityGroupComparisonUserProperty_userId
  | SecurityGroupComparisonUserProperty_username
  | SecurityGroupComparisonUserProperty_groupIds
  | SecurityGroupComparisonUserProperty_groupNames
  | SecurityGroupComparisonUserProperty_userAttributes;
