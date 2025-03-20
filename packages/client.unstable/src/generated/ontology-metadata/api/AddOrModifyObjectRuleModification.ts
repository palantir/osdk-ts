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

import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldLogicRuleValueMappingModification } from "./StructFieldLogicRuleValueMappingModification.js";
import type { StructFieldLogicRuleValueModification } from "./StructFieldLogicRuleValueModification.js";
export interface AddOrModifyObjectRuleModification {
  objectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, LogicRuleValueModification>;
  structFieldValues: Record<
    PropertyTypeId,
    Record<ObjectTypeFieldApiName, StructFieldLogicRuleValueModification>
  >;
  structFieldValuesV2: Record<
    PropertyTypeId,
    Array<StructFieldLogicRuleValueMappingModification>
  >;
}
