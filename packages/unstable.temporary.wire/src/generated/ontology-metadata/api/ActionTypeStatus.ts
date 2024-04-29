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

import type { ActiveActionTypeStatus } from "./ActiveActionTypeStatus.js";
import type { DeprecatedActionTypeStatus } from "./DeprecatedActionTypeStatus.js";
import type { ExperimentalActionTypeStatus } from "./ExperimentalActionTypeStatus.js";
export interface ActionTypeStatus_experimental {
  type: "experimental";
  experimental: ExperimentalActionTypeStatus;
}

export interface ActionTypeStatus_active {
  type: "active";
  active: ActiveActionTypeStatus;
}

export interface ActionTypeStatus_deprecated {
  type: "deprecated";
  deprecated: DeprecatedActionTypeStatus;
}
/**
 * The status to indicate whether the ActionType is either Experimental, Active or Deprecated.
 */
export type ActionTypeStatus =
  | ActionTypeStatus_experimental
  | ActionTypeStatus_active
  | ActionTypeStatus_deprecated;
