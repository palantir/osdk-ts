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

import type { BaseFilter } from "./BaseFilter";
import type { Just } from "./Just";

export interface StringFilterMap extends BaseFilter<string> {
  "$startsWith": string;
  "$containsAllTermsInOrder": string;
  "$containsAnyTerm": string;
  "$containsAllTerms": string;
}

export namespace StringFilter {
  export interface $eq extends Just<"$eq", StringFilterMap> {}
  export interface $ne extends Just<"$ne", StringFilterMap> {}
  export interface $isNull extends Just<"$isNull", StringFilterMap> {}
  export interface $startsWith extends Just<"$startsWith", StringFilterMap> {
  }
  export interface $containsAllTermsInOrder
    extends Just<"$containsAllTermsInOrder", StringFilterMap>
  {
  }
  export interface $containsAnyTerm
    extends Just<"$containsAnyTerm", StringFilterMap>
  {
  }
  export interface $containsAllTerms
    extends Just<"$containsAllTerms", StringFilterMap>
  {
  }
}

export type StringFilter =
  | string
  | StringFilter.$eq
  | StringFilter.$ne
  | StringFilter.$isNull
  | StringFilter.$startsWith
  | StringFilter.$containsAllTermsInOrder
  | StringFilter.$containsAnyTerm
  | StringFilter.$containsAllTerms;
