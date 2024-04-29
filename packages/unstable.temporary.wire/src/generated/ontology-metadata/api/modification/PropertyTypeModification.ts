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

import type { BaseFormatter } from "../BaseFormatter.js";
import type { RuleSetBindingModification } from "../formatting/RuleSetBindingModification.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { PropertyTypeDisplayMetadata } from "../PropertyTypeDisplayMetadata.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { Type } from "../Type.js";
import type { TypeClass } from "../TypeClass.js";
import type { DataConstraintsModification } from "./DataConstraintsModification.js";
import type { InlineActionTypeModification } from "./InlineActionTypeModification.js";
import type { PropertyTypeStatusModification } from "./PropertyTypeStatusModification.js";
import type { ValueTypeReferenceModification } from "./ValueTypeReferenceModification.js";
export interface PropertyTypeModification {
  displayMetadata: PropertyTypeDisplayMetadata;
  id: PropertyTypeId;
  ruleSetBinding: RuleSetBindingModification | undefined;
  baseFormatter: BaseFormatter | undefined;
  type: Type;
  typeClasses: Array<TypeClass>;
  indexedForSearch: boolean;
  apiName: ObjectTypeFieldApiName | undefined;
  status: PropertyTypeStatusModification | undefined;
  inlineAction: InlineActionTypeModification | undefined;
  dataConstraints: DataConstraintsModification | undefined;
  valueType: ValueTypeReferenceModification | undefined;
}
