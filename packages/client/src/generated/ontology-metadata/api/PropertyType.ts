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

import type { BaseFormatter } from "./BaseFormatter.js";
import type { DataConstraints } from "./DataConstraints.js";
import type { InlineActionType } from "./InlineActionType.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { PropertyTypeDisplayMetadata } from "./PropertyTypeDisplayMetadata.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { PropertyTypeStatus } from "./PropertyTypeStatus.js";
import type { RuleSetBinding } from "./RuleSetBinding.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
import type { Type } from "./Type.js";
import type { TypeClass } from "./TypeClass.js";
import type { ValueTypeReference } from "./ValueTypeReference.js";

/**
 * A PropertyType is a typed attribute of an ObjectType.
 */
export interface PropertyType {
  rid: PropertyTypeRid;
  id: PropertyTypeId;
  apiName: ObjectTypeFieldApiName | undefined;
  sharedPropertyTypeApiName: ObjectTypeFieldApiName | undefined;
  displayMetadata: PropertyTypeDisplayMetadata;
  indexedForSearch: boolean;
  ruleSetBinding: RuleSetBinding | undefined;
  baseFormatter: BaseFormatter | undefined;
  type: Type;
  typeClasses: Array<TypeClass>;
  status: PropertyTypeStatus;
  inlineAction: InlineActionType | undefined;
  dataConstraints: DataConstraints | undefined;
  sharedPropertyTypeRid: SharedPropertyTypeRid | undefined;
  valueType: ValueTypeReference | undefined;
}
