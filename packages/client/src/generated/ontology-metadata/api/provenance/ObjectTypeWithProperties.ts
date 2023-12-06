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

import type { ObjectTypeIdWithPropertyTypeIds } from "./ObjectTypeIdWithPropertyTypeIds.js";
import type { ObjectTypeRidWithPropertyTypeRids } from "./ObjectTypeRidWithPropertyTypeRids.js";
export interface ObjectTypeWithProperties_objectTypeIdWithPropertyTypeIds {
  type: "objectTypeIdWithPropertyTypeIds";
  objectTypeIdWithPropertyTypeIds: ObjectTypeIdWithPropertyTypeIds;
}

export interface ObjectTypeWithProperties_objectTypeRidWithPropertyTypeRids {
  type: "objectTypeRidWithPropertyTypeRids";
  objectTypeRidWithPropertyTypeRids: ObjectTypeRidWithPropertyTypeRids;
}
/**
 * Represents an ObjectType with a selected set of properties.
 */
export type ObjectTypeWithProperties =
  | ObjectTypeWithProperties_objectTypeIdWithPropertyTypeIds
  | ObjectTypeWithProperties_objectTypeRidWithPropertyTypeRids;
