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

import type { InterfaceTypeApiName } from "../InterfaceTypeApiName.js";
import type { InterfaceTypeDisplayMetadata } from "../InterfaceTypeDisplayMetadata.js";
import type { InterfaceTypeRidOrIdInRequest } from "../InterfaceTypeRidOrIdInRequest.js";
import type { InterfaceTypeStatus } from "../InterfaceTypeStatus.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "../SharedPropertyTypeRidOrIdInRequest.js";
import type { InterfaceLinkTypeModification } from "./InterfaceLinkTypeModification.js";
import type { InterfaceSharedPropertyTypeModification } from "./InterfaceSharedPropertyTypeModification.js";
export interface InterfaceTypeModification {
  displayMetadata: InterfaceTypeDisplayMetadata;
  apiName: InterfaceTypeApiName;
  status: InterfaceTypeStatus;
  properties: Array<SharedPropertyTypeRidOrIdInRequest>;
  propertiesV2: Array<InterfaceSharedPropertyTypeModification>;
  extendsInterfaces: Array<InterfaceTypeRidOrIdInRequest>;
  links: Array<InterfaceLinkTypeModification>;
}
