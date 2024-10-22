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

import type { BaseFilter } from "./BaseFilter.js";
import type { Just } from "./Just.js";

interface BooleanFilterOptions extends BaseFilter<boolean> {}

export namespace BooleanFilter {
  export interface $eq extends Just<"$eq", BooleanFilterOptions> {}
  export interface $ne extends Just<"$ne", BooleanFilterOptions> {}
  export interface $isNull extends Just<"$isNull", BooleanFilterOptions> {}
  export interface $in extends Just<"$in", BooleanFilterOptions> {}
}
export type BooleanFilter =
  | boolean
  | BooleanFilter.$eq
  | BooleanFilter.$ne
  | BooleanFilter.$in
  | BooleanFilter.$isNull;
