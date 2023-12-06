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

import type { ActiveInterfaceTypeStatus } from "./ActiveInterfaceTypeStatus.js";
import type { DeprecatedInterfaceTypeStatus } from "./DeprecatedInterfaceTypeStatus.js";
import type { ExperimentalInterfaceTypeStatus } from "./ExperimentalInterfaceTypeStatus.js";
export interface InterfaceTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalInterfaceTypeStatus;
}

export interface InterfaceTypeStatus_active {
  type: "active";
  active: ActiveInterfaceTypeStatus;
}

export interface InterfaceTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedInterfaceTypeStatus;
}
export type InterfaceTypeStatus =
  | InterfaceTypeStatus_experimental
  | InterfaceTypeStatus_active
  | InterfaceTypeStatus_deprecated;
