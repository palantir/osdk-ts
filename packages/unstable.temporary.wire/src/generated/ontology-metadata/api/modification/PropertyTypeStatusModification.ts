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

import type { ActivePropertyTypeStatusModification } from "./ActivePropertyTypeStatusModification.js";
import type { DeprecatedPropertyTypeStatusModification } from "./DeprecatedPropertyTypeStatusModification.js";
import type { ExperimentalPropertyTypeStatusModification } from "./ExperimentalPropertyTypeStatusModification.js";
export interface PropertyTypeStatusModification_experimental {
  type: "experimental";
  experimental: ExperimentalPropertyTypeStatusModification;
}

export interface PropertyTypeStatusModification_active {
  type: "active";
  active: ActivePropertyTypeStatusModification;
}

export interface PropertyTypeStatusModification_deprecated {
  type: "deprecated";
  deprecated: DeprecatedPropertyTypeStatusModification;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active or Deprecated.
 */
export type PropertyTypeStatusModification =
  | PropertyTypeStatusModification_experimental
  | PropertyTypeStatusModification_active
  | PropertyTypeStatusModification_deprecated;
