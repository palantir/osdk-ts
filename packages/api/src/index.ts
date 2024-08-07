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
} from "./ontology/ActionDefinition.js";
export type {
  InterfaceDefinition,
  InterfaceDefinitionFrom,
  InterfaceKeysFrom,
  InterfacePropertyDefinitionFrom,
  InterfacePropertyDefinitionsFrom,
  InterfacePropertyKeysFrom,
  InterfacePropertyKeysFrom2,
} from "./ontology/InterfaceDefinition.js";
export type {
  ObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  ObjectOrInterfacePropertyKeysFrom,
  ObjectOrInterfacePropertyKeysFrom2,
} from "./ontology/ObjectOrInterface.js";
export type {
  BrandedApiName,
  ObjectTypeDefinition,
  ObjectTypeDefinitionFrom,
  ObjectTypeKeysFrom,
  ObjectTypeLinkDefinition,
  ObjectTypeLinkDefinitionFrom,
  ObjectTypeLinkKeysFrom,
  ObjectTypeLinkKeysFrom2,
  ObjectTypeLinkTargetTypeFrom,
  ObjectTypePropertyDefinition,
  ObjectTypePropertyDefinitionFrom,
  ObjectTypePropertyDefinitionFrom2,
  ObjectTypePropertyDefinitionsFrom,
  ObjectTypePropertyKeysFrom,
  PropertyDef,
  VersionBound,
} from "./ontology/ObjectTypeDefinition.js";
export type { OntologyDefinition } from "./ontology/OntologyDefinition.js";
export type { OntologyMetadata } from "./ontology/OntologyMetadata.js";
export type { PrimaryKeyTypes } from "./ontology/PrimaryKeyTypes.js";
export type {
  AggregationKeyDataType,
  ObjectQueryDataType,
  ObjectSetQueryDataType,
  PrimitiveDataType,
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
} from "./ontology/QueryDefinition.js";
export type { WirePropertyTypes } from "./ontology/WirePropertyTypes.js";
export type { OsdkMetadata } from "./OsdkMetadata.js";

export {};
