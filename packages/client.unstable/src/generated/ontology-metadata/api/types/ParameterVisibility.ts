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

import type { ParameterDisabled } from "./ParameterDisabled.js";
import type { ParameterEditable } from "./ParameterEditable.js";
import type { ParameterHidden } from "./ParameterHidden.js";
export interface ParameterVisibility_editable {
  type: "editable";
  editable: ParameterEditable;
}

export interface ParameterVisibility_disabled {
  type: "disabled";
  disabled: ParameterDisabled;
}

export interface ParameterVisibility_hidden {
  type: "hidden";
  hidden: ParameterHidden;
}
export type ParameterVisibility =
  | ParameterVisibility_editable
  | ParameterVisibility_disabled
  | ParameterVisibility_hidden;
