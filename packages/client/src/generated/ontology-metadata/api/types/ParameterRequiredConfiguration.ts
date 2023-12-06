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

import type { ListLengthValidation } from "./ListLengthValidation.js";
import type { ParameterNotRequired } from "./ParameterNotRequired.js";
import type { ParameterRequired } from "./ParameterRequired.js";
export interface ParameterRequiredConfiguration_required {
  type: "required";
  required: ParameterRequired;
}

export interface ParameterRequiredConfiguration_notRequired {
  type: "notRequired";
  notRequired: ParameterNotRequired;
}

export interface ParameterRequiredConfiguration_listLengthValidation {
  type: "listLengthValidation";
  listLengthValidation: ListLengthValidation;
}
/**
 * Specifies the number of values that are valid for a given parameter.
 */
export type ParameterRequiredConfiguration =
  | ParameterRequiredConfiguration_required
  | ParameterRequiredConfiguration_notRequired
  | ParameterRequiredConfiguration_listLengthValidation;
