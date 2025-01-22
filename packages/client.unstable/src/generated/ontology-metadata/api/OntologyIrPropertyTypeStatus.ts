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

import type { ActivePropertyTypeStatus } from "./ActivePropertyTypeStatus.js";
import type { ExamplePropertyTypeStatus } from "./ExamplePropertyTypeStatus.js";
import type { ExperimentalPropertyTypeStatus } from "./ExperimentalPropertyTypeStatus.js";
import type { OntologyIrDeprecatedPropertyTypeStatus } from "./OntologyIrDeprecatedPropertyTypeStatus.js";
export interface OntologyIrPropertyTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalPropertyTypeStatus;
}

export interface OntologyIrPropertyTypeStatus_active {
  type: "active";
  active: ActivePropertyTypeStatus;
}

export interface OntologyIrPropertyTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrDeprecatedPropertyTypeStatus;
}

export interface OntologyIrPropertyTypeStatus_example {
  type: "example";
  example: ExamplePropertyTypeStatus;
}
/**
 * The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
 */
export type OntologyIrPropertyTypeStatus =
  | OntologyIrPropertyTypeStatus_experimental
  | OntologyIrPropertyTypeStatus_active
  | OntologyIrPropertyTypeStatus_deprecated
  | OntologyIrPropertyTypeStatus_example;
