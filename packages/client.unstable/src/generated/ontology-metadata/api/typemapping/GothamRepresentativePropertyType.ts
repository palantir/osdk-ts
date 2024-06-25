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

import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { GothamPropertyTypeAvailable } from "./GothamPropertyTypeAvailable.js";
export interface GothamRepresentativePropertyType_sharedPropertyTypeToCreate {
  type: "sharedPropertyTypeToCreate";
  sharedPropertyTypeToCreate: GothamPropertyTypeAvailable;
}

export interface GothamRepresentativePropertyType_existingSharedPropertyType {
  type: "existingSharedPropertyType";
  existingSharedPropertyType: SharedPropertyTypeRid;
}
/**
 * A SharedPropertyTypeModification if the Gotham property type doesn't already exist in the requested
 * Foundry ontology. Otherwise, the SharedPropertyTypeRid of the corresponding SharedPropertyType in the
 * requested ontology.
 */
export type GothamRepresentativePropertyType =
  | GothamRepresentativePropertyType_sharedPropertyTypeToCreate
  | GothamRepresentativePropertyType_existingSharedPropertyType;
