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

import type { InterfaceTypeRidOrIdInRequest } from "../InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ObjectTypeDisplayMetadata } from "../ObjectTypeDisplayMetadata.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectTypeStatus } from "../ObjectTypeStatus.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { TypeGroupRidOrIdInRequest } from "../TypeGroupRidOrIdInRequest.js";
import type { ObjectTypeTraitsModification } from "./ObjectTypeTraitsModification.js";
import type { PartialPropertyTypeModification } from "./PartialPropertyTypeModification.js";
import type { PropertyTypeModification } from "./PropertyTypeModification.js";
export interface ObjectTypeModification {
  displayMetadata: ObjectTypeDisplayMetadata;
  id: ObjectTypeId;
  primaryKeys: Array<PropertyTypeId>;
  propertyTypes: Record<PropertyTypeId, PropertyTypeModification>;
  sharedPropertyTypes: Record<PropertyTypeId, PartialPropertyTypeModification>;
  titlePropertyTypeId: PropertyTypeId;
  traits: ObjectTypeTraitsModification;
  apiName: ObjectTypeApiName | undefined;
  status: ObjectTypeStatus | undefined;
  implementsInterfaces: Array<InterfaceTypeRidOrIdInRequest>;
  typeGroups: Array<TypeGroupRidOrIdInRequest>;
}
