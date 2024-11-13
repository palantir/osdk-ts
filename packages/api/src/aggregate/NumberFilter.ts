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

import type { BaseFilterOptions, CatchThemAll } from "./BaseFilter.js";
import type { Just } from "./Just.js";

interface NumberFilterOptions extends BaseFilterOptions<number> {
  "$gt": number;
  "$gte": number;
  "$lt": number;
  "$lte": number;
}

export namespace NumberFilter {
  export interface $eq extends Just<"$eq", NumberFilterOptions> {}
  export interface $ne extends Just<"$ne", NumberFilterOptions> {}
  export interface $isNull extends Just<"$isNull", NumberFilterOptions> {}
  export interface $gt extends Just<"$gt", NumberFilterOptions> {}
  export interface $gte extends Just<"$gte", NumberFilterOptions> {}
  export interface $lt extends Just<"$lt", NumberFilterOptions> {}
  export interface $lte extends Just<"$lte", NumberFilterOptions> {}
  export interface $in extends Just<"$in", NumberFilterOptions> {}
}
export type NumberFilter =
  | number
  | NumberFilter.$eq
  | NumberFilter.$ne
  | NumberFilter.$isNull
  | NumberFilter.$in
  | NumberFilter.$gt
  | NumberFilter.$gte
  | NumberFilter.$lt
  | NumberFilter.$lte;

/** @internal */
function _typeCheck() {
  const b: NumberFilter = {} as CatchThemAll<NumberFilterOptions>;
}
