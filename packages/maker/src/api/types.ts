/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ApiNameValueTypeReference,
  BaseType,
  ExampleValue,
  ImportedTypes,
  OntologyIrInterfaceType,
  SharedPropertyTypeGothamMapping,
  StructFieldType,
  Type,
  ValueTypeApiName,
  ValueTypeDataConstraint,
  ValueTypeDisplayMetadata,
  ValueTypeStatus,
  ValueTypeVersion,
} from "@osdk/client.unstable";

import type { OntologyFullMetadata } from "@osdk/internal.foundry.core";

export interface Ontology extends
  Omit<
    OntologyFullMetadata,
    "ontology" | "sharedPropertyTypes" | "interfaceTypes"
  >
{
  interfaceTypes: Record<string, InterfaceType>;
  sharedPropertyTypes: Record<string, SharedPropertyType>;
  valueTypes: Record<string, ValueTypeDefinitionVersion[]>;
  importedTypes: ImportedTypes;
}

export interface InterfaceType extends
  Omit<
    OntologyIrInterfaceType,
    // we want our simplified representation
    | "properties"
    // these things don't need to exist as the system works fine without them (I'm told)
    | "allProperties"
    | "allLinks"
    | "allExtendsInterfaces"
  >
{
  properties: Record<string, SharedPropertyType>;
}

export interface PropertyType {
  type: PropertyTypeType;
  array?: boolean;
  description?: string;
  displayName?: string;
  valueType?: ApiNameValueTypeReference;
  typeClasses?: TypeClass[];
}

type TypeClass = { kind: string; name: string };

export interface SharedPropertyType extends PropertyType {
  apiName: string;
  gothamMapping?: SharedPropertyTypeGothamMapping;
}

export type PropertyTypeType =
  | PropertyTypeTypesWithoutStruct
  | {
    type: "struct";
    structDefinition: {
      [api_name: string]:
        | StructPropertyType
        | Exclude<PropertyTypeTypesWithoutStruct, MarkingPropertyType>;
    };
  };

export type PropertyTypeTypesWithoutStruct =
  | "boolean"
  | "byte"
  | "date"
  | "decimal"
  | "double"
  | "float"
  | "geopoint"
  | "geoshape"
  | "integer"
  | "long"
  | MarkingPropertyType
  | "short"
  | "string"
  | "timestamp"
  | "mediaReference";

type MarkingPropertyType = {
  type: "marking";
  markingType: "MANDATORY" | "CBAC";
};

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface StructPropertyType extends
  Optional<
    Omit<
      StructFieldType,
      "fieldType" | "structFieldRid" | "apiName"
    >,
    "typeClasses" | "aliases"
  >
{
  fieldType: PropertyTypeTypesWithoutStruct;
}

export type ValueTypeDefinitionVersion = {
  apiName: ValueTypeApiName;
  displayMetadata: ValueTypeDisplayMetadata;
  status: ValueTypeStatus;
  version: ValueTypeVersion;
  baseType: BaseType;
  constraints: ValueTypeDataConstraint[];
  exampleValues: ExampleValue[];
};
