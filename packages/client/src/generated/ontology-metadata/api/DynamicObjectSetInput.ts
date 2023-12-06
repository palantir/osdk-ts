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

import type { DynamicObjectSetInputBase } from "./DynamicObjectSetInputBase.js";
import type { DynamicObjectSetInputParameter } from "./DynamicObjectSetInputParameter.js";
import type { DynamicObjectSetInputUnioned } from "./DynamicObjectSetInputUnioned.js";
export interface DynamicObjectSetInput_base {
  type: "base";
  base: DynamicObjectSetInputBase;
}

export interface DynamicObjectSetInput_parameter {
  type: "parameter";
  parameter: DynamicObjectSetInputParameter;
}

export interface DynamicObjectSetInput_unioned {
  type: "unioned";
  unioned: DynamicObjectSetInputUnioned;
}
/**
 * A wrapper used to reference an ObjectSet
 */
export type DynamicObjectSetInput =
  | DynamicObjectSetInput_base
  | DynamicObjectSetInput_parameter
  | DynamicObjectSetInput_unioned;
