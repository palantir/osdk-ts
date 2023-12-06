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

import type { ActionsObjectSet } from "./ActionsObjectSet.js";
import type { OtherValueAllowed } from "./OtherValueAllowed.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";

/**
 * Generates a set of allowed values from the specified property of the objects in the objectSet.
 * For example All the names from the `assignedTo` property of tickets in an objectSet.
 */
export interface ParameterObjectPropertyValue {
  objectSet: ActionsObjectSet;
  propertyTypeId: PropertyTypeId;
  otherValueAllowed: OtherValueAllowed | undefined;
}
