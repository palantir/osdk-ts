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

import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { ObjectTypeDisplayMetadata } from "./ObjectTypeDisplayMetadata.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { ObjectTypeStatus } from "./ObjectTypeStatus.js";
import type { ObjectTypeTraits } from "./ObjectTypeTraits.js";
import type { PropertyType } from "./PropertyType.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";

/**
 * An ObjectType is a model that represents a real world concept. For example, there could be
 * an Employees ObjectType to represent the employees in a business organization.
 */
export interface ObjectType {
  displayMetadata: ObjectTypeDisplayMetadata;
  id: ObjectTypeId;
  primaryKeys: Array<PropertyTypeRid>;
  propertyTypes: Record<PropertyTypeRid, PropertyType>;
  rid: ObjectTypeRid;
  titlePropertyTypeRid: PropertyTypeRid;
  traits: ObjectTypeTraits;
  apiName: ObjectTypeApiName | undefined;
  status: ObjectTypeStatus;
  redacted: boolean | undefined;
  implementsInterfaces: Array<InterfaceTypeRid>;
  typeGroups: Array<TypeGroupRid>;
}
