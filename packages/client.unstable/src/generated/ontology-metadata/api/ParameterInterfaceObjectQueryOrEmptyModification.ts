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

import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterInterfaceObjectQueryModification } from "./ParameterInterfaceObjectQueryModification.js";
export interface ParameterInterfaceObjectQueryOrEmptyModification_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterInterfaceObjectQueryOrEmptyModification_interfaceObjectQuery {
  type: "interfaceObjectQuery";
  interfaceObjectQuery: ParameterInterfaceObjectQueryModification;
}
/**
 * [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
 * values.
 */
export type ParameterInterfaceObjectQueryOrEmptyModification =
  | ParameterInterfaceObjectQueryOrEmptyModification_empty
  | ParameterInterfaceObjectQueryOrEmptyModification_interfaceObjectQuery;
