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

import type { ActivePropertyTypeStatus } from "./ActivePropertyTypeStatus.js";
import type { DeprecatedPropertyTypeStatus } from "./DeprecatedPropertyTypeStatus.js";
import type { ExperimentalPropertyTypeStatus } from "./ExperimentalPropertyTypeStatus.js";
export interface PropertyTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalPropertyTypeStatus;
}

export interface PropertyTypeStatus_active {
  type: "active";
  active: ActivePropertyTypeStatus;
}

export interface PropertyTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedPropertyTypeStatus;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active or Deprecated.
 */
export type PropertyTypeStatus =
  | PropertyTypeStatus_experimental
  | PropertyTypeStatus_active
  | PropertyTypeStatus_deprecated;
