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

import type { RuleSetBindingModification } from "../formatting/RuleSetBindingModification.mjs";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.mjs";
import type { PropertyTypeId } from "../PropertyTypeId.mjs";
import type { SharedPropertyTypeRidOrIdInRequest } from "../SharedPropertyTypeRidOrIdInRequest.mjs";
import type { TypeClass } from "../TypeClass.mjs";
import type { InlineActionTypeModification } from "./InlineActionTypeModification.mjs";
import type { PropertyTypeStatusModification } from "./PropertyTypeStatusModification.mjs";

export interface PartialPropertyTypeModification {
  propertyTypeId: PropertyTypeId;
  sharedPropertyTypeId: SharedPropertyTypeRidOrIdInRequest;
  typeClasses: Array<TypeClass>;
  apiName: ObjectTypeFieldApiName | undefined;
  ruleSetBinding: RuleSetBindingModification | undefined;
  status: PropertyTypeStatusModification | undefined;
  inlineAction: InlineActionTypeModification | undefined;
}
