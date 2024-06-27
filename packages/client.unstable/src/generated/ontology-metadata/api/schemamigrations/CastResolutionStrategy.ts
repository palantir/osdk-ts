/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { DropInvalidValuesStrategy } from "./DropInvalidValuesStrategy.js";
import type { FailOnInvalidValuesStrategy } from "./FailOnInvalidValuesStrategy.js";
export interface CastResolutionStrategy_fail {
  type: "fail";
  fail: FailOnInvalidValuesStrategy;
}

export interface CastResolutionStrategy_drop {
  type: "drop";
  drop: DropInvalidValuesStrategy;
}
/**
 * The strategy to use when casting invalid values.
 */
export type CastResolutionStrategy =
  | CastResolutionStrategy_fail
  | CastResolutionStrategy_drop;
