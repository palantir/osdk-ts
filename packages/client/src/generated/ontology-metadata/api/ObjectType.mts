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

import type { InterfaceTypeRid } from "./InterfaceTypeRid.mjs";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.mjs";
import type { ObjectTypeDisplayMetadata } from "./ObjectTypeDisplayMetadata.mjs";
import type { ObjectTypeId } from "./ObjectTypeId.mjs";
import type { ObjectTypeRid } from "./ObjectTypeRid.mjs";
import type { ObjectTypeStatus } from "./ObjectTypeStatus.mjs";
import type { ObjectTypeTraits } from "./ObjectTypeTraits.mjs";
import type { PropertyType } from "./PropertyType.mjs";
import type { PropertyTypeRid } from "./PropertyTypeRid.mjs";
import type { TypeGroupRid } from "./TypeGroupRid.mjs";

export interface ObjectType {
  displayMetadata: ObjectTypeDisplayMetadata;
  id: ObjectTypeId;
  primaryKeys: Array<PropertyTypeRid>;
  propertyTypes: Map<PropertyTypeRid, PropertyType>;
  rid: ObjectTypeRid;
  titlePropertyTypeRid: PropertyTypeRid;
  traits: ObjectTypeTraits;
  apiName: ObjectTypeApiName | undefined;
  status: ObjectTypeStatus;
  redacted: boolean | undefined;
  implementsInterfaces: Array<InterfaceTypeRid>;
  typeGroups: Array<TypeGroupRid>;
}
