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

import type { ObjectSetFilter } from "./objectset/ObjectSetFilter.mjs";
import type { ObjectSetSearchAround } from "./ObjectSetSearchAround.mjs";
export interface ObjectSetTransform_propertyFilter {
  type: "propertyFilter";
  propertyFilter: ObjectSetFilter;
}

export interface ObjectSetTransform_searchAround {
  type: "searchAround";
  searchAround: ObjectSetSearchAround;
}

export type ObjectSetTransform =
  | ObjectSetTransform_propertyFilter
  | ObjectSetTransform_searchAround;
