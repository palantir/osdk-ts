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

export type {
  ActionDefinition,
  ActionModifiedEntity,
  ActionParameterDefinition,
  ObjectActionDataType,
  ObjectSetActionDataType,
  ValidActionParameterTypes,
  ValidBaseActionParameterTypes,
} from "./ActionDefinition.js";
export type {
  InterfaceDefinition,
  InterfaceDefinitionFrom,
  InterfaceKeysFrom,
  InterfacePropertyDefinitionFrom,
  InterfacePropertyDefinitionsFrom,
  InterfacePropertyKeysFrom,
  InterfacePropertyKeysFrom2,
} from "./InterfaceDefinition.js";
export type {
  ObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  ObjectOrInterfacePropertyKeysFrom,
} from "./ObjectOrInterface.js";
export type {
  ObjectTypeDefinition,
  ObjectTypeDefinitionFrom,
  ObjectTypeKeysFrom as ObjectTypeKeysFrom,
  ObjectTypeLinkDefinition,
  ObjectTypeLinkDefinitionFrom,
  ObjectTypeLinkKeysFrom,
  ObjectTypeLinkTargetTypeFrom,
  ObjectTypePropertyDefinition,
  ObjectTypePropertyDefinitionFrom,
  ObjectTypePropertyDefinitionsFrom,
  ObjectTypePropertyKeysFrom,
} from "./ObjectTypeDefinition.js";
export type { OntologyDefinition } from "./OntologyDefinition.js";
export type { OntologyMetadata } from "./OntologyMetadata.js";
export type {
  AggregationKeyDataType,
  ObjectQueryDataType,
  ObjectSetQueryDataType,
  QueryDataTypeDefinition,
  QueryDefinition,
  QueryParameterDefinition,
  RangeAggregationKeyDataType,
  SetQueryDataType,
  SimpleAggregationKeyDataType,
  StructQueryDataType,
  ThreeDimensionalAggregationDataType,
  ThreeDimensionalQueryAggregationDefinition,
  TwoDimensionalAggregationDataType,
  TwoDimensionalQueryAggregationDefinition,
  UnionQueryDataType,
} from "./QueryDefinition.js";
