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

import type { BasePropertyType } from "../../api/BasePropertyType.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";

/**
 * The derived property's base type has changed, either because the type it is deriving from has changed, or
 * because the derived property definition has changed. However the object type it belongs to is not part
 * of the modification, so this change is not allowed.
 *
 * The object type must be modified in the same request for it to accept the new derived property base type.
 * A no-op modification suffices.
 */
export interface DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError {
  objectTypeRid: ObjectTypeRid;
  propertyTypeRid: PropertyTypeRid;
  previousBaseType: BasePropertyType;
  newDerivedPropertyBaseType: BasePropertyType;
}
