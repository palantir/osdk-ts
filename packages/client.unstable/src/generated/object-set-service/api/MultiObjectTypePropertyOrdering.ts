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

import type { PropertyId } from "./PropertyId.js";
import type { SortOrder } from "./SortOrder.js";

/**
 * Ordering based on values of a property with a specified property id which can be present on multiple object
 * types. May also reference derived properties.
 * Sorting is not allowed on any ARRAY or GEOHASH properties as defined in the Ontology.
 * Sorting on string properties is only allowed as long as the property is marked as supporting exact matching
 * in the Ontology.
 * Do note that in case of multi-object-type object sets, the property has to exist on all involved object types
 * and has to be of the same type.
 */
export interface MultiObjectTypePropertyOrdering {
  propertyId: PropertyId;
  order: SortOrder;
}
