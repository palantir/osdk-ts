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

import type { InterfaceTypeRidOrIdInRequest } from "../../api/InterfaceTypeRidOrIdInRequest.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
import type { ValueTypeReference } from "../../api/ValueTypeReference.js";
export interface InvalidValueTypeError {
  objectRid: ObjectTypeRid;
  objectId: ObjectTypeId | undefined;
  interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
  sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
  interfacePropertyValueType: ValueTypeReference | undefined;
  objectPropertyValueType: ValueTypeReference | undefined;
}
