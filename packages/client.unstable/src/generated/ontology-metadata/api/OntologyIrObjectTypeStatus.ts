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

import type { ActiveObjectTypeStatus } from "./ActiveObjectTypeStatus.js";
import type { ExampleObjectTypeStatus } from "./ExampleObjectTypeStatus.js";
import type { ExperimentalObjectTypeStatus } from "./ExperimentalObjectTypeStatus.js";
import type { OntologyIrDeprecatedObjectTypeStatus } from "./OntologyIrDeprecatedObjectTypeStatus.js";
export interface OntologyIrObjectTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalObjectTypeStatus;
}

export interface OntologyIrObjectTypeStatus_active {
  type: "active";
  active: ActiveObjectTypeStatus;
}

export interface OntologyIrObjectTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrDeprecatedObjectTypeStatus;
}

export interface OntologyIrObjectTypeStatus_example {
  type: "example";
  example: ExampleObjectTypeStatus;
}
/**
 * The status to indicate whether the ObjectType is either Experimental, Active, Deprecated, or Example.
 */
export type OntologyIrObjectTypeStatus =
  | OntologyIrObjectTypeStatus_experimental
  | OntologyIrObjectTypeStatus_active
  | OntologyIrObjectTypeStatus_deprecated
  | OntologyIrObjectTypeStatus_example;
