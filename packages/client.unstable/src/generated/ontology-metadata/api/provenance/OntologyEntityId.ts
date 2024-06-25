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

import type { LinkTypeId } from "../LinkTypeId.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { PropertyTypeIdWithObjectTypeId } from "./PropertyTypeIdWithObjectTypeId.js";
export interface OntologyEntityId_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeIdWithObjectTypeId;
}

export interface OntologyEntityId_objectType {
  type: "objectType";
  objectType: ObjectTypeId;
}

export interface OntologyEntityId_linkType {
  type: "linkType";
  linkType: LinkTypeId;
}
/**
 * The id representation of an entity.
 */
export type OntologyEntityId =
  | OntologyEntityId_propertyType
  | OntologyEntityId_objectType
  | OntologyEntityId_linkType;
