/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

/**
 * All property types in each object type must be mapped to a datasource or explicitly labeled as edit-only (if the object type backing datasource supports edit-only).
 */
export interface NotAllPropertyTypesAreMappedToDatasourceWithinObjectType {
  objectTypeRid: ObjectTypeRid;
  propertyTypesInObjectType: Array<PropertyTypeId>;
  propertyTypesInDatasource: Array<PropertyTypeId>;
}
