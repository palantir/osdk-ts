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

import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";

/**
 * An error representing when an object type datasource has columns that do not map to a property on the
 * corresponding object type.
 */
export interface ObjectTypeDatasourceColumnMappingMismatchError {
  objectType: ObjectTypeRid;
  propertyTypesOnObject: Array<PropertyTypeRid>;
  existingPropertyTypesMappedOnDatasources: Array<PropertyTypeRid>;
  nonexistentPropertyTypesMappedOnDatasources: Array<PropertyTypeId>;
}
