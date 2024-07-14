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

import type { MultiObjectTypePropertyOrdering } from "./MultiObjectTypePropertyOrdering.js";
import type { SingleObjectTypePropertyOrdering } from "./SingleObjectTypePropertyOrdering.js";
export interface PropertyOrdering_multiObjectTypeProperty {
  type: "multiObjectTypeProperty";
  multiObjectTypeProperty: MultiObjectTypePropertyOrdering;
}

export interface PropertyOrdering_singleObjectTypeProperty {
  type: "singleObjectTypeProperty";
  singleObjectTypeProperty: SingleObjectTypePropertyOrdering;
}
/**
 * Ordering which causes objects to be returned in a specific order on the basis of the values of a property.
 */
export type PropertyOrdering =
  | PropertyOrdering_multiObjectTypeProperty
  | PropertyOrdering_singleObjectTypeProperty;
