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

import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { InterfaceTypeDisplayMetadata } from "./InterfaceTypeDisplayMetadata.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { InterfaceTypeStatus } from "./InterfaceTypeStatus.js";
import type { SharedPropertyType } from "./SharedPropertyType.js";

/**
 * Represents a collection of properties that object types can implement. If an object type implements an
 * interface, it is guaranteed to have the conform to the interface shape.
 */
export interface InterfaceType {
  rid: InterfaceTypeRid;
  apiName: InterfaceTypeApiName;
  displayMetadata: InterfaceTypeDisplayMetadata;
  status: InterfaceTypeStatus;
  properties: Array<SharedPropertyType>;
  allProperties: Array<SharedPropertyType>;
  extendsInterfaces: Array<InterfaceTypeRid>;
}
