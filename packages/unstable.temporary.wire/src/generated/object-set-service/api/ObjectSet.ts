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

import type { BaseObjectSet } from "./BaseObjectSet.js";
import type { FilteredObjectSet } from "./FilteredObjectSet.js";
import type { IntersectedObjectSet } from "./IntersectedObjectSet.js";
import type { KnnObjectSet } from "./KnnObjectSet.js";
import type { KnnObjectSetV2 } from "./KnnObjectSetV2.js";
import type { ReferencedObjectSet } from "./ReferencedObjectSet.js";
import type { SearchAroundObjectSet } from "./SearchAroundObjectSet.js";
import type { SoftLinkSearchAroundObjectSet } from "./SoftLinkSearchAroundObjectSet.js";
import type { StaticObjectSet } from "./StaticObjectSet.js";
import type { SubtractedObjectSet } from "./SubtractedObjectSet.js";
import type { UnionedObjectSet } from "./UnionedObjectSet.js";
export interface ObjectSet_base {
  type: "base";
  base: BaseObjectSet;
}

export interface ObjectSet_static {
  type: "static";
  static: StaticObjectSet;
}

export interface ObjectSet_referenced {
  type: "referenced";
  referenced: ReferencedObjectSet;
}

export interface ObjectSet_filtered {
  type: "filtered";
  filtered: FilteredObjectSet;
}

export interface ObjectSet_intersected {
  type: "intersected";
  intersected: IntersectedObjectSet;
}

export interface ObjectSet_subtracted {
  type: "subtracted";
  subtracted: SubtractedObjectSet;
}

export interface ObjectSet_unioned {
  type: "unioned";
  unioned: UnionedObjectSet;
}

export interface ObjectSet_searchAround {
  type: "searchAround";
  searchAround: SearchAroundObjectSet;
}

export interface ObjectSet_softLinkSearchAround {
  type: "softLinkSearchAround";
  softLinkSearchAround: SoftLinkSearchAroundObjectSet;
}

export interface ObjectSet_knn {
  type: "knn";
  knn: KnnObjectSet;
}

export interface ObjectSet_knnV2 {
  type: "knnV2";
  knnV2: KnnObjectSetV2;
}
/**
 * Supported Object Sets and Object Set operations. Refer to documentation of a particular Object Set for details.
 */
export type ObjectSet =
  | ObjectSet_base
  | ObjectSet_static
  | ObjectSet_referenced
  | ObjectSet_filtered
  | ObjectSet_intersected
  | ObjectSet_subtracted
  | ObjectSet_unioned
  | ObjectSet_searchAround
  | ObjectSet_softLinkSearchAround
  | ObjectSet_knn
  | ObjectSet_knnV2;
