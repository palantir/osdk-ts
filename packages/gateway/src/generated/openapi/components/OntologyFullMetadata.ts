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

import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeV2 } from "./ActionTypeV2.js";
import type { InterfaceType } from "./InterfaceType.js";
import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { ObjectTypeWithLink } from "./ObjectTypeWithLink.js";
import type { OntologyV2 } from "./OntologyV2.js";
import type { QueryApiName } from "./QueryApiName.js";
import type { QueryTypeV2 } from "./QueryTypeV2.js";
import type { SharedPropertyType } from "./SharedPropertyType.js";
import type { SharedPropertyTypeApiName } from "./SharedPropertyTypeApiName.js";

export interface OntologyFullMetadata {
  ontology: OntologyV2;
  objectTypes: Record<ObjectTypeApiName, ObjectTypeWithLink>;
  actionTypes: Record<ActionTypeApiName, ActionTypeV2>;
  queryTypes: Record<QueryApiName, QueryTypeV2>;
  interfaceTypes: Record<InterfaceTypeApiName, InterfaceType>;
  sharedPropertyTypes: Record<SharedPropertyTypeApiName, SharedPropertyType>;
}
