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

import type { ActiveLinkTypeStatus } from "./ActiveLinkTypeStatus.js";
import type { DeprecatedLinkTypeStatus } from "./DeprecatedLinkTypeStatus.js";
import type { ExperimentalLinkTypeStatus } from "./ExperimentalLinkTypeStatus.js";
export interface LinkTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalLinkTypeStatus;
}

export interface LinkTypeStatus_active {
  type: "active";
  active: ActiveLinkTypeStatus;
}

export interface LinkTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedLinkTypeStatus;
}
/**
 * The status to indicate whether the LinkType is either Experimental, Active or Deprecated.
 */
export type LinkTypeStatus =
  | LinkTypeStatus_experimental
  | LinkTypeStatus_active
  | LinkTypeStatus_deprecated;
