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
  DataConstraint,
  ExampleValue,
  FailureMessage,
  ImportedTypes,
  InterfaceTypeStatus,
  InterfaceTypeStatus_active,
  InterfaceTypeStatus_deprecated,
  InterfaceTypeStatus_experimental,
  LinkTypeDisplayMetadata,
  LinkTypeMetadata,
  OntologyIrInterfaceType,
  OntologyIrLinkTypeStatus,
  OntologyIrObjectType,
  OntologyIrPropertyType,
  SharedPropertyTypeGothamMapping,
  StructFieldType,
  ValueTypeApiName,
  ValueTypeDataConstraint,
  ValueTypeDisplayMetadata,
  ValueTypeStatus,
  ValueTypeVersion,
  Visibility,
} from "@osdk/client.unstable";

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import type { BlueprintIcon } from "./iconNames.js";

export interface Ontology extends
  Omit<
    OntologyFullMetadata,
    "ontology" | "sharedPropertyTypes" | "interfaceTypes" | "objectTypes"
  >
{
  interfaceTypes: Record<string, InterfaceType>;
  sharedPropertyTypes: Record<string, SharedPropertyType>;
  objectTypes: Record<string, ObjectType>;
  valueTypes: Record<string, ValueTypeDefinitionVersion[]>;
  linkTypes: Record<string, LinkTypeDefinition>;
  importedTypes: ImportedTypes;
}
export type {
  InterfaceTypeStatus,
  InterfaceTypeStatus_active,
  InterfaceTypeStatus_deprecated,
  InterfaceTypeStatus_experimental,
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type OptionalFields<T, K extends keyof T> =
  & Pick<Partial<T>, K>
  & Omit<T, K>;

export interface ObjectTypeInner extends
  Omit<
    OntologyIrObjectType,
    | "titlePropertyTypeRid"
    | "propertyTypes"
    | "allImplementsInterfaces"
    | "implementsInterfaces2"
    | "displayMetadata"
  >
{
  properties: Array<ObjectPropertyType>;
  titlePropertyApiName: string;
  implementsInterfaces: Array<InterfaceImplementation>;
  description: string | undefined;
  icon: { locator: BlueprintIcon; color: string } | undefined;
  displayName: string;
  pluralDisplayName: string;
  visibility: Visibility;
  editsEnabled: boolean;
}

export type InterfaceImplementation = {
  implements: InterfaceType;
  propertyMapping: { interfaceProperty: string; mapsTo: string }[];
};

export type ObjectType =
  & RequiredFields<
    Partial<ObjectTypeInner>,
    | "apiName"
    | "primaryKeys"
    | "displayName"
    | "pluralDisplayName"
    | "titlePropertyApiName"
  >
  & {
    datasource?: ObjectTypeDatasourceDefinition;
  };

export interface ObjectPropertyTypeInner extends
  Omit<
    OntologyIrPropertyType,
    | "sharedPropertyTypeApiName"
    | "type"
    | "inlineAction"
    | "sharedPropertyTypeRid"
    | "valueType"
    | "ruleSetBinding"
    | "displayMetadata"
  >
{
  type: PropertyTypeType;
  array?: boolean;
  valueType: string | ValueTypeDefinitionVersion;
  sharedPropertyType: SharedPropertyType;
  description: string | undefined;
  displayName: string;
  visibility: Visibility;
}

export type ObjectPropertyType = RequiredFields<
  Partial<ObjectPropertyTypeInner>,
  "apiName" | "type" | "displayName"
>;

export interface InterfacePropertyType {
  sharedPropertyType: SharedPropertyType;
  required: boolean;
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
    | "propertiesV2"
    | "allPropertiesV2"
  >
{
  propertiesV2: Record<string, InterfacePropertyType>;
  status: InterfaceTypeStatus;
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
  nonNameSpacedApiName: string;
  gothamMapping?: SharedPropertyTypeGothamMapping;
}

export type PropertyTypeType =
  | PropertyTypeTypePrimitive
  | PropertyTypeTypeExotic;

export type PropertyTypeTypePrimitive =
  | "boolean"
  | "byte"
  | "date"
  | "decimal"
  | "double"
  | "float"
  | "integer"
  | "long"
  | "short"
  | "string"
  | "timestamp";

export type PropertyTypeTypeExotic =
  | "geopoint"
  | "geoshape"
  | "mediaReference"
  | "geotimeSeries"
  | PropertyTypeTypeMarking
  | PropertyTypeTypeStruct;

type PropertyTypeTypeMarking = {
  type: "marking";
  markingType: "MANDATORY" | "CBAC";
};

type PropertyTypeTypeStruct = {
  type: "struct";
  structDefinition: {
    [api_name: string]:
      | StructPropertyType
      | Exclude<PropertyTypeTypesWithoutStruct, PropertyTypeTypeMarking>;
  };
};

export type PropertyTypeTypesWithoutStruct = Exclude<
  PropertyTypeType,
  PropertyTypeTypeStruct
>;

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

export type ObjectTypePropertyApiName = string;
export type LinkTypeId = string;

export type LinkTypeDefinition =
  | OneToManyLinkTypeDefinition
  | ManyToManyLinkTypeDefinition;

export interface OneToManyLinkTypeDefinition {
  id: LinkTypeId;
  one: OneToManyObjectLinkReference;
  toMany: OneToManyObjectLinkReference;
  manyForeignKeyProperty: ObjectTypePropertyApiName;
  cardinality: "OneToMany" | "OneToOne" | undefined;
  editsEnabled?: boolean;
  status?: OntologyIrLinkTypeStatus;
  redacted?: boolean;
}

export interface OneToManyObjectLinkReference {
  object: ObjectType;
  metadata: LinkTypeMetadata;
}

export interface ManyToManyLinkTypeDefinition {
  id: LinkTypeId;
  many: ManyToManyObjectLinkReference;
  toMany: ManyToManyObjectLinkReference;
  editsEnabled?: boolean;
  status?: OntologyIrLinkTypeStatus;
  redacted?: boolean;
}

export interface ManyToManyObjectLinkReference {
  object: ObjectType;
  metadata: LinkTypeMetadata;
}

export type LinkSideMetadata = OptionalFields<
  RequiredFields<
    Omit<LinkTypeMetadata, "displayMetadata"> & LinkTypeDisplayMetadata,
    "apiName"
  >,
  "visibility" | "typeClasses"
>;
export interface ValueTypeType_array {
  constraints: {
    constraint: Extract<DataConstraint, { type: "array" }>["array"];
    failureMessage?: FailureMessage;
  }[];
  type: "array";
  value: {
    type: "array";
    elementType: ValueTypeType["value"];
  };
}

export interface ValueTypeType_boolean {
  constraints: {
    constraint: Extract<DataConstraint, { type: "boolean" }>["boolean"];
    failureMessage?: FailureMessage;
  }[];
  type: "boolean";
  value: "boolean";
}

export interface ValueTypeType_binary {
  constraints: {
    constraint: Extract<DataConstraint, { type: "binary" }>["binary"];
    failureMessage?: FailureMessage;
  }[];
  type: "binary";
  value: "binary";
}

export interface ValueTypeType_byte {
  constraints: {
    constraint: Extract<DataConstraint, { type: "byte" }>["byte"];
    failureMessage?: FailureMessage;
  }[];
  type: "byte";
  value: "byte";
}

export interface ValueTypeType_date {
  constraints: {
    constraint: Extract<DataConstraint, { type: "date" }>["date"];
    failureMessage?: FailureMessage;
  }[];
  type: "date";
  value: "date";
}

export interface ValueTypeType_decimal {
  constraints: {
    constraint: Extract<DataConstraint, { type: "decimal" }>["decimal"];
    failureMessage?: FailureMessage;
  }[];
  type: "decimal";
  value: "decimal";
}

export interface ValueTypeType_double {
  constraints: {
    constraint: Extract<DataConstraint, { type: "double" }>["double"];
    failureMessage?: FailureMessage;
  }[];
  type: "double";
  value: "double";
}

export interface ValueTypeType_float {
  constraints: {
    constraint: Extract<DataConstraint, { type: "float" }>["float"];
    failureMessage?: FailureMessage;
  }[];
  type: "float";
  value: "float";
}

export interface ValueTypeType_integer {
  constraints: {
    constraint: Extract<DataConstraint, { type: "integer" }>["integer"];
    failureMessage?: FailureMessage;
  }[];
  type: "integer";
  value: "integer";
}

export interface ValueTypeType_long {
  constraints: {
    constraint: Extract<DataConstraint, { type: "long" }>["long"];
    failureMessage?: FailureMessage;
  }[];
  type: "long";
  value: "long";
}

export interface ValueTypeType_map {
  constraints: {
    constraint: Extract<DataConstraint, { type: "map" }>["map"];
    failureMessage?: FailureMessage;
  }[];
  type: "map";
  value: {
    type: "map";
    keyType: ValueTypeType["value"];
    valueType: ValueTypeType["value"];
  };
}

export interface ValueTypeType_optional {
  constraints: {
    constraint: Extract<DataConstraint, { type: "optional" }>["optional"];
    failureMessage?: FailureMessage;
  }[];
  type: "optional";
  value: {
    type: "optional";
    wrappedType: ValueTypeType["value"];
  };
}

export interface ValueTypeType_short {
  constraints: {
    constraint: Extract<DataConstraint, { type: "short" }>["short"];
    failureMessage?: FailureMessage;
  }[];
  type: "short";
  value: "short";
}

export interface ValueTypeType_string {
  constraints: {
    constraint: Extract<DataConstraint, { type: "string" }>["string"];
    failureMessage?: FailureMessage;
  }[];
  type: "string";
  value: "string";
}

export interface ValueTypeType_structV2 {
  constraints: {
    constraint: Extract<DataConstraint, { type: "structV2" }>["structV2"];
    failureMessage?: FailureMessage;
  }[];
  type: "structV2";
  value: {
    type: "struct";
    fields: Array<{
      identifier: string;
      baseType: ValueTypeType["value"];
    }>;
  };
}
export interface ValueTypeType_timestamp {
  constraints: {
    constraint: Extract<DataConstraint, { type: "timestamp" }>["timestamp"];
    failureMessage?: FailureMessage;
  }[];
  type: "timestamp";
  value: "timestamp";
}

export type ValueTypeType =
  | ValueTypeType_array
  | ValueTypeType_boolean
  | ValueTypeType_binary
  | ValueTypeType_byte
  | ValueTypeType_date
  | ValueTypeType_decimal
  | ValueTypeType_double
  | ValueTypeType_float
  | ValueTypeType_integer
  | ValueTypeType_long
  | ValueTypeType_map
  | ValueTypeType_optional
  | ValueTypeType_short
  | ValueTypeType_string
  | ValueTypeType_structV2
  | ValueTypeType_timestamp;

export type ValueTypeDefinitionVersion = {
  apiName: ValueTypeApiName;
  displayMetadata: ValueTypeDisplayMetadata;
  status: ValueTypeStatus;
  version: ValueTypeVersion;
  baseType: BaseType;
  constraints: ValueTypeDataConstraint[];
  exampleValues: ExampleValue[];
};

export interface ObjectTypeDatasourceDefinition_dataset {
  type: "dataset";
}

export interface ObjectTypeDatasourceDefinition_stream {
  type: "stream";
  // Retention period must be in ISO 8601 duration format
  retentionPeriod?: string;
}

export type ObjectTypeDatasourceDefinition =
  | ObjectTypeDatasourceDefinition_stream
  | ObjectTypeDatasourceDefinition_dataset;
