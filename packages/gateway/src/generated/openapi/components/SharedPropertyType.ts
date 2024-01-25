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

import type { DisplayName } from "./DisplayName.js";
import type { ObjectPropertyType } from "./ObjectPropertyType.js";
import type { SharedPropertyTypeApiName } from "./SharedPropertyTypeApiName.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";

/** A property type that can be shared across object types. */
export interface SharedPropertyType {
  rid: SharedPropertyTypeRid;
  apiName: SharedPropertyTypeApiName;
  displayName: DisplayName;
  /** A short text that describes the SharedPropertyType. */
  description?: string;
  dataType: ObjectPropertyType;
}
