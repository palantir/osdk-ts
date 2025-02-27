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
import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { OntologyIrBlockPermissionInformation } from "./OntologyIrBlockPermissionInformation.js";
import type { OntologyIrInterfaceTypeBlockDataV2 } from "./OntologyIrInterfaceTypeBlockDataV2.js";
import type { OntologyIrObjectTypeBlockDataV2 } from "./OntologyIrObjectTypeBlockDataV2.js";
import type { OntologyIrSharedPropertyTypeBlockDataV2 } from "./OntologyIrSharedPropertyTypeBlockDataV2.js";
export interface OntologyIrOntologyBlockDataV2 {
  objectTypes: Record<ObjectTypeApiName, OntologyIrObjectTypeBlockDataV2>;
  sharedPropertyTypes: Record<
    ObjectTypeFieldApiName,
    OntologyIrSharedPropertyTypeBlockDataV2
  >;
  interfaceTypes: Record<
    InterfaceTypeApiName,
    OntologyIrInterfaceTypeBlockDataV2
  >;
  blockPermissionInformation: OntologyIrBlockPermissionInformation | undefined;
}
