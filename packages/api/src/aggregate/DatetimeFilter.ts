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

export interface DatetimeFilterOptions extends BaseFilterOptions<string> {
  "$gt": string;
  "$gte": string;
  "$lt": string;
  "$lte": string;
}

export namespace DatetimeFilter {
  export interface $eq extends Just<"$eq", DatetimeFilterOptions> {}
  export interface $ne extends Just<"$ne", DatetimeFilterOptions> {}
  export interface $isNull extends Just<"$isNull", DatetimeFilterOptions> {}
  export interface $gt extends Just<"$gt", DatetimeFilterOptions> {}
  export interface $gte extends Just<"$gte", DatetimeFilterOptions> {}
  export interface $lt extends Just<"$lt", DatetimeFilterOptions> {}
  export interface $lte extends Just<"$lte", DatetimeFilterOptions> {}
  export interface $in extends Just<"$in", DatetimeFilterOptions> {}
}
export type DatetimeFilter =
  | string
  | DatetimeFilter.$eq
  | DatetimeFilter.$ne
  | DatetimeFilter.$isNull
  | DatetimeFilter.$in
  | DatetimeFilter.$gt
  | DatetimeFilter.$gte
  | DatetimeFilter.$lt
  | DatetimeFilter.$lte;

/** @internal */
function _typeCheck() {
  const b: DatetimeFilter = {} as CatchThemAll<DatetimeFilterOptions>;
}
