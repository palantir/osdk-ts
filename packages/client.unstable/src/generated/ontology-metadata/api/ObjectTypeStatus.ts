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

import type { ActiveObjectTypeStatus } from "./ActiveObjectTypeStatus.js";
import type { DeprecatedObjectTypeStatus } from "./DeprecatedObjectTypeStatus.js";
import type { ExperimentalObjectTypeStatus } from "./ExperimentalObjectTypeStatus.js";
export interface ObjectTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalObjectTypeStatus;
}

export interface ObjectTypeStatus_active {
  type: "active";
  active: ActiveObjectTypeStatus;
}

export interface ObjectTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedObjectTypeStatus;
}
/**
 * The status to indicate whether the ObjectType is either Experimental, Active or Deprecated.
 */
export type ObjectTypeStatus =
  | ObjectTypeStatus_experimental
  | ObjectTypeStatus_active
  | ObjectTypeStatus_deprecated;
