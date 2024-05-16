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

import type { ObjectSetBaseType } from "./ObjectSetBaseType.js";
import type { ObjectSetFilterType } from "./ObjectSetFilterType.js";
import type { ObjectSetIntersectionType } from "./ObjectSetIntersectionType.js";
import type { ObjectSetReferenceType } from "./ObjectSetReferenceType.js";
import type { ObjectSetSearchAroundType } from "./ObjectSetSearchAroundType.js";
import type { ObjectSetStaticType } from "./ObjectSetStaticType.js";
import type { ObjectSetSubtractType } from "./ObjectSetSubtractType.js";
import type { ObjectSetUnionType } from "./ObjectSetUnionType.js";

export interface ObjectSet_Base extends ObjectSetBaseType {
  type: "base";
}

export interface ObjectSet_Static extends ObjectSetStaticType {
  type: "static";
}

export interface ObjectSet_Reference extends ObjectSetReferenceType {
  type: "reference";
}

export interface ObjectSet_Filter extends ObjectSetFilterType {
  type: "filter";
}

export interface ObjectSet_Union extends ObjectSetUnionType {
  type: "union";
}

export interface ObjectSet_Intersect extends ObjectSetIntersectionType {
  type: "intersect";
}

export interface ObjectSet_Subtract extends ObjectSetSubtractType {
  type: "subtract";
}

export interface ObjectSet_SearchAround extends ObjectSetSearchAroundType {
  type: "searchAround";
}

export type ObjectSet =
  | ObjectSet_Base
  | ObjectSet_Static
  | ObjectSet_Reference
  | ObjectSet_Filter
  | ObjectSet_Union
  | ObjectSet_Intersect
  | ObjectSet_Subtract
  | ObjectSet_SearchAround;
