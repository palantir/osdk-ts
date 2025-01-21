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

import type { BaseFormatter } from "./BaseFormatter.js";
import type { DataConstraints } from "./DataConstraints.js";
import type { InlineActionType } from "./InlineActionType.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrPropertyTypeStatus } from "./OntologyIrPropertyTypeStatus.js";
import type { OntologyIrRuleSetBinding } from "./OntologyIrRuleSetBinding.js";
import type { OntologyIrType } from "./OntologyIrType.js";
import type { PropertyTypeDisplayMetadata } from "./PropertyTypeDisplayMetadata.js";
import type { TypeClass } from "./TypeClass.js";
import type { ValueTypeApiNameReference } from "./ValueTypeApiNameReference.js";

/**
 * A PropertyType is a typed attribute of an ObjectType.
 */
export interface OntologyIrPropertyType {
  apiName: ObjectTypeFieldApiName | undefined;
  sharedPropertyTypeApiName: ObjectTypeFieldApiName | undefined;
  displayMetadata: PropertyTypeDisplayMetadata;
  indexedForSearch: boolean;
  ruleSetBinding: OntologyIrRuleSetBinding | undefined;
  baseFormatter: BaseFormatter | undefined;
  type: OntologyIrType;
  typeClasses: Array<TypeClass>;
  status: OntologyIrPropertyTypeStatus;
  inlineAction: InlineActionType | undefined;
  dataConstraints: DataConstraints | undefined;
  sharedPropertyTypeRid: ObjectTypeFieldApiName | undefined;
  valueType: ValueTypeApiNameReference | undefined;
}
