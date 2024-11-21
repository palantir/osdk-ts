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

interface StringFilterOptions extends BaseFilterOptions<string> {
  "$startsWith": string;
  "$containsAllTermsInOrder": string;
  "$containsAnyTerm": string | { term: string; fuzzySearch?: boolean };
  "$containsAllTerms": string | { term: string; fuzzySearch?: boolean };
  "$in": ReadonlyArray<string>;
}

export namespace StringFilter {
  export interface $eq extends Just<"$eq", StringFilterOptions> {}
  export interface $ne extends Just<"$ne", StringFilterOptions> {}
  export interface $isNull extends Just<"$isNull", StringFilterOptions> {}
  export interface $startsWith
    extends Just<"$startsWith", StringFilterOptions>
  {
  }
  export interface $containsAllTermsInOrder
    extends Just<"$containsAllTermsInOrder", StringFilterOptions>
  {
  }
  export interface $containsAnyTerm
    extends Just<"$containsAnyTerm", StringFilterOptions>
  {
  }
  export interface $containsAllTerms
    extends Just<"$containsAllTerms", StringFilterOptions>
  {
  }
  export interface $in extends Just<"$in", StringFilterOptions> {}
}

export type StringFilter =
  | string
  | StringFilter.$eq
  | StringFilter.$ne
  | StringFilter.$isNull
  | StringFilter.$in
  | StringFilter.$startsWith
  | StringFilter.$containsAllTermsInOrder
  | StringFilter.$containsAnyTerm
  | StringFilter.$containsAllTerms;

/** @internal */
function _typeCheck() {
  const b: StringFilter = {} as CatchThemAll<StringFilterOptions>;
}
