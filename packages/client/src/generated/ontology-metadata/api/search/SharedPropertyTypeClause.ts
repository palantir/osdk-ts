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
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { FullTextStringPredicate } from "./FullTextStringPredicate.js";
import type { SharedPropertyTypeExternalMappingFilter } from "./SharedPropertyTypeExternalMappingFilter.js";
import type { SharedPropertyTypeVisibilityFilter } from "./SharedPropertyTypeVisibilityFilter.js";
import type { TypeClassPredicate } from "./TypeClassPredicate.js";
export interface SharedPropertyTypeClause_and {
  type: "and";
  and: Array<SharedPropertyTypeClause>;
}

export interface SharedPropertyTypeClause_or {
  type: "or";
  or: Array<SharedPropertyTypeClause>;
}

export interface SharedPropertyTypeClause_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}

export interface SharedPropertyTypeClause_apiName {
  type: "apiName";
  apiName: FullTextStringPredicate;
}

export interface SharedPropertyTypeClause_displayName {
  type: "displayName";
  displayName: FullTextStringPredicate;
}

export interface SharedPropertyTypeClause_description {
  type: "description";
  description: FullTextStringPredicate;
}

export interface SharedPropertyTypeClause_visibility {
  type: "visibility";
  visibility: SharedPropertyTypeVisibilityFilter;
}

export interface SharedPropertyTypeClause_isIndexedForSearch {
  type: "isIndexedForSearch";
  isIndexedForSearch: boolean;
}

export interface SharedPropertyTypeClause_propertyType {
  type: "propertyType";
  propertyType: DataType;
}

export interface SharedPropertyTypeClause_typeClasses {
  type: "typeClasses";
  typeClasses: TypeClassPredicate;
}

export interface SharedPropertyTypeClause_externalMapping {
  type: "externalMapping";
  externalMapping: SharedPropertyTypeExternalMappingFilter;
}
/**
 * Data structure to represent a search query for SharedPropertyTypes. Supports filters for various
 * SharedPropertyType features.
 */
export type SharedPropertyTypeClause =
  | SharedPropertyTypeClause_and
  | SharedPropertyTypeClause_or
  | SharedPropertyTypeClause_sharedPropertyTypeRid
  | SharedPropertyTypeClause_apiName
  | SharedPropertyTypeClause_displayName
  | SharedPropertyTypeClause_description
  | SharedPropertyTypeClause_visibility
  | SharedPropertyTypeClause_isIndexedForSearch
  | SharedPropertyTypeClause_propertyType
  | SharedPropertyTypeClause_typeClasses
  | SharedPropertyTypeClause_externalMapping;
