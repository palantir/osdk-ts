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

import type { ActiveLinkTypeStatus } from "./ActiveLinkTypeStatus.js";
import type { ExampleLinkTypeStatus } from "./ExampleLinkTypeStatus.js";
import type { ExperimentalLinkTypeStatus } from "./ExperimentalLinkTypeStatus.js";
import type { OntologyIrDeprecatedLinkTypeStatus } from "./OntologyIrDeprecatedLinkTypeStatus.js";
export interface OntologyIrLinkTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalLinkTypeStatus;
}

export interface OntologyIrLinkTypeStatus_active {
  type: "active";
  active: ActiveLinkTypeStatus;
}

export interface OntologyIrLinkTypeStatus_deprecated {
  type: "deprecated";
  deprecated: OntologyIrDeprecatedLinkTypeStatus;
}

export interface OntologyIrLinkTypeStatus_example {
  type: "example";
  example: ExampleLinkTypeStatus;
}
/**
 * The status to indicate whether the LinkType is either Experimental, Active, Deprecated, or Example.
 */
export type OntologyIrLinkTypeStatus =
  | OntologyIrLinkTypeStatus_experimental
  | OntologyIrLinkTypeStatus_active
  | OntologyIrLinkTypeStatus_deprecated
  | OntologyIrLinkTypeStatus_example;
