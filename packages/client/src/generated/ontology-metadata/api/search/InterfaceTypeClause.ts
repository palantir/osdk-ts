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

import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { FullTextStringPredicate } from "./FullTextStringPredicate.js";
import type { InterfaceTypeExternalMappingFilter } from "./InterfaceTypeExternalMappingFilter.js";
import type { InterfaceTypeStatusFilter } from "./InterfaceTypeStatusFilter.js";
export interface InterfaceTypeClause_and {
  type: "and";
  and: Array<InterfaceTypeClause>;
}

export interface InterfaceTypeClause_or {
  type: "or";
  or: Array<InterfaceTypeClause>;
}

export interface InterfaceTypeClause_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: InterfaceTypeRid;
}

export interface InterfaceTypeClause_apiName {
  type: "apiName";
  apiName: FullTextStringPredicate;
}

export interface InterfaceTypeClause_displayName {
  type: "displayName";
  displayName: FullTextStringPredicate;
}

export interface InterfaceTypeClause_description {
  type: "description";
  description: FullTextStringPredicate;
}

export interface InterfaceTypeClause_status {
  type: "status";
  status: InterfaceTypeStatusFilter;
}

export interface InterfaceTypeClause_property {
  type: "property";
  property: SharedPropertyTypeRid;
}

export interface InterfaceTypeClause_allProperty {
  type: "allProperty";
  allProperty: SharedPropertyTypeRid;
}

export interface InterfaceTypeClause_extendsInterface {
  type: "extendsInterface";
  extendsInterface: InterfaceTypeRid;
}

export interface InterfaceTypeClause_allExtendsInterface {
  type: "allExtendsInterface";
  allExtendsInterface: InterfaceTypeRid;
}

export interface InterfaceTypeClause_externalMapping {
  type: "externalMapping";
  externalMapping: InterfaceTypeExternalMappingFilter;
}
/**
 * Data structure to represent a search query for InterfaceTypes. Supports filters for various
 * InterfaceType features.
 */
export type InterfaceTypeClause =
  | InterfaceTypeClause_and
  | InterfaceTypeClause_or
  | InterfaceTypeClause_interfaceTypeRid
  | InterfaceTypeClause_apiName
  | InterfaceTypeClause_displayName
  | InterfaceTypeClause_description
  | InterfaceTypeClause_status
  | InterfaceTypeClause_property
  | InterfaceTypeClause_allProperty
  | InterfaceTypeClause_extendsInterface
  | InterfaceTypeClause_allExtendsInterface
  | InterfaceTypeClause_externalMapping;
