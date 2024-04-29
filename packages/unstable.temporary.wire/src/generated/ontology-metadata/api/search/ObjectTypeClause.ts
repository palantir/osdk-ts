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

import type { DataType } from "../DataType.js";
import type { Visibility } from "../Visibility.js";
import type { FullTextStringPredicate } from "./FullTextStringPredicate.js";
import type { ObjectTypeExternalMappingFilter } from "./ObjectTypeExternalMappingFilter.js";
import type { ObjectTypeStatusFilter } from "./ObjectTypeStatusFilter.js";
import type { TypeClassPredicate } from "./TypeClassPredicate.js";
export interface ObjectTypeClause_and {
  type: "and";
  and: Array<ObjectTypeClause>;
}

export interface ObjectTypeClause_or {
  type: "or";
  or: Array<ObjectTypeClause>;
}

export interface ObjectTypeClause_propertyTypeTypeClasses {
  type: "propertyTypeTypeClasses";
  propertyTypeTypeClasses: TypeClassPredicate;
}

export interface ObjectTypeClause_propertyTypeType {
  type: "propertyTypeType";
  propertyTypeType: DataType;
}

export interface ObjectTypeClause_hasEventMetadata {
  type: "hasEventMetadata";
  hasEventMetadata: boolean;
}

export interface ObjectTypeClause_hasTimeSeriesMetadata {
  type: "hasTimeSeriesMetadata";
  hasTimeSeriesMetadata: boolean;
}

export interface ObjectTypeClause_propertyTypeId {
  type: "propertyTypeId";
  propertyTypeId: FullTextStringPredicate;
}

export interface ObjectTypeClause_propertyTypeDescription {
  type: "propertyTypeDescription";
  propertyTypeDescription: FullTextStringPredicate;
}

export interface ObjectTypeClause_propertyTypeDisplayName {
  type: "propertyTypeDisplayName";
  propertyTypeDisplayName: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypeId {
  type: "objectTypeId";
  objectTypeId: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypeDisplayName {
  type: "objectTypeDisplayName";
  objectTypeDisplayName: FullTextStringPredicate;
}

export interface ObjectTypeClause_objectTypeDescription {
  type: "objectTypeDescription";
  objectTypeDescription: FullTextStringPredicate;
}

export interface ObjectTypeClause_visibility {
  type: "visibility";
  visibility: Visibility;
}

export interface ObjectTypeClause_status {
  type: "status";
  status: ObjectTypeStatusFilter;
}

export interface ObjectTypeClause_objectTypeExternalMapping {
  type: "objectTypeExternalMapping";
  objectTypeExternalMapping: ObjectTypeExternalMappingFilter;
}
/**
 * Data structure to represent search query for ObjectTypes. Supports filters for various ObjectType features.
 */
export type ObjectTypeClause =
  | ObjectTypeClause_and
  | ObjectTypeClause_or
  | ObjectTypeClause_propertyTypeTypeClasses
  | ObjectTypeClause_propertyTypeType
  | ObjectTypeClause_hasEventMetadata
  | ObjectTypeClause_hasTimeSeriesMetadata
  | ObjectTypeClause_propertyTypeId
  | ObjectTypeClause_propertyTypeDescription
  | ObjectTypeClause_propertyTypeDisplayName
  | ObjectTypeClause_objectTypeId
  | ObjectTypeClause_objectTypeDisplayName
  | ObjectTypeClause_objectTypeDescription
  | ObjectTypeClause_visibility
  | ObjectTypeClause_status
  | ObjectTypeClause_objectTypeExternalMapping;
