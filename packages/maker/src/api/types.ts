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
  ActionTypeApiName,
  ActionTypeStatus_deprecated,
  ApiNameValueTypeReference,
  BaseType,
  DataConstraint,
  ExampleValue,
  FailureMessage,
  InterfaceTypeApiName,
  InterfaceTypeStatus,
  LinkTypeDisplayMetadata,
  LinkTypeMetadata,
  OntologyIrActionTypeEntities,
  OntologyIrBaseParameterType_decimal,
  OntologyIrBaseParameterType_decimalList,
  OntologyIrBaseParameterType_interfaceReference,
  OntologyIrBaseParameterType_interfaceReferenceList,
  OntologyIrBaseParameterType_objectReference,
  OntologyIrBaseParameterType_objectReferenceList,
  OntologyIrBaseParameterType_objectSetRid,
  OntologyIrBaseParameterType_objectTypeReference,
  OntologyIrBaseParameterType_struct,
  OntologyIrBaseParameterType_structList,
  OntologyIrBaseParameterType_timestamp,
  OntologyIrBaseParameterType_timestampList,
  OntologyIrCondition,
  OntologyIrConditionValue,
  OntologyIrFormContent,
  OntologyIrLabelledValue,
  OntologyIrLinkTypeStatus,
  OntologyIrLogicRule,
  OntologyIrMarketplaceInterfaceType,
  OntologyIrObjectType,
  OntologyIrParameterDateRangeValue,
  OntologyIrPropertyType,
  OntologyIrValidationRule,
  ParameterId,
  SectionId,
  SharedPropertyTypeGothamMapping,
  StructFieldType,
  ValidationRuleDisplayMetadata,
  ValueTypeApiName,
  ValueTypeDataConstraint,
  ValueTypeDisplayMetadata,
  ValueTypeStatus,
  ValueTypeVersion,
  Visibility,
} from "@osdk/client.unstable";

import type { BlueprintIcon } from "./iconNames.js";

export interface OntologyEntityBase {
  __type: OntologyEntityTypeEnum;
  apiName: string;
}

export enum OntologyEntityTypeEnum {
  OBJECT_TYPE = "OBJECT_TYPE",
  LINK_TYPE = "LINK_TYPE",
  INTERFACE_TYPE = "INTERFACE_TYPE",
  SHARED_PROPERTY_TYPE = "SHARED_PROPERTY_TYPE",
  ACTION_TYPE = "ACTION_TYPE",
  VALUE_TYPE = "VALUE_TYPE",
}
export interface OntologyEntityTypeMapping {
  [OntologyEntityTypeEnum.OBJECT_TYPE]: ObjectType;
  [OntologyEntityTypeEnum.ACTION_TYPE]: ActionType;
  [OntologyEntityTypeEnum.LINK_TYPE]: LinkType;
  [OntologyEntityTypeEnum.INTERFACE_TYPE]: InterfaceType;
  [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: SharedPropertyType;
  [OntologyEntityTypeEnum.VALUE_TYPE]: ValueTypeDefinitionVersion;
}

export type OntologyDefinition =
  & {
    [K in Exclude<OntologyEntityTypeEnum, "VALUE_TYPE">]: Record<
      string,
      OntologyEntityTypeMapping[K]
    >;
  }
  & {
    VALUE_TYPE: Record<string, ValueTypeDefinitionVersion[]>;
  };

export type OntologyEntityType =
  OntologyEntityTypeMapping[keyof OntologyEntityTypeMapping];

export type ActionType =
  & OntologyEntityBase
  & RequiredFields<
    Partial<ActionTypeInner>,
    "apiName" | "displayName" | "rules" | "status"
  >
  & {
    __type: OntologyEntityTypeEnum.ACTION_TYPE;
  };

export type ActionTypeDefinition = Omit<ActionType, "__type">;

export interface ActionParameter {
  id: ParameterId;
  displayName: string;
  type: ActionParameterType;
  validation: ActionParameterValidation;
  description?: string;
  typeClasses?: Array<TypeClass>;
}

export interface ActionParameterValidation {
  allowedValues: ActionParameterAllowedValues;
  required: ActionParameterRequirementConstraint;
  defaultVisibility?: "editable" | "disabled" | "hidden";
  conditionalOverrides?: Array<ActionParameterConditionalOverride>;
}

// TODO(ethana): add more commonly used conditions - parameter matching, organizations, etc.
export type ConditionDefinition =
  | UnionCondition
  | OntologyIrCondition
  | GroupValidationRule
  | ParameterValidationRule;

export type UnionCondition = {
  type: "and" | "or";
  conditions: Array<ConditionDefinition>;
};

export type ActionParameterConditionalOverride =
  | VisibilityOverride
  | DisabledOverride
  | RequiredOverride;

export type VisibilityOverride = {
  type: "visibility";
  condition: ConditionDefinition;
};

export type DisabledOverride = {
  type: "disabled";
  condition: ConditionDefinition;
};

export type RequiredOverride = {
  type: "required";
  condition: ConditionDefinition;
};

export type ActionParameterRequirementConstraint =
  | boolean
  | { listLength: { min?: number; max?: number } };

// TODO(dpaquin): cleanup? or does "type: foo" actually make sense here
export type ActionParameterAllowedValues =
  | {
    type: "oneOf";
    oneOf: Array<OntologyIrLabelledValue>;
  }
  | {
    type: "range";
    min?: OntologyIrConditionValue;
    max?: OntologyIrConditionValue;
  }
  | { type: "text"; minLength?: number; maxLength?: number; regex?: string }
  | {
    type: "datetime";
    maximum?: OntologyIrParameterDateRangeValue;
    minimum?: OntologyIrParameterDateRangeValue;
  }
  | { type: "objectTypeReference"; interfaceTypes: Array<InterfaceTypeApiName> }
  | { type: "objectQuery" }
  | { type: "attachment" }
  | { type: "boolean" }
  | { type: "objectSetRid" }
  | { type: "cbacMarking" }
  | { type: "mandatoryMarking" }
  | { type: "objectList" }
  | { type: "mediaReference" }
  | { type: "timeSeriesReference" }
  | { type: "geohash" }
  | { type: "geoshape" }
  | { type: "geotimeSeriesReference" }
  | { type: "interfaceObjectQuery" }
  | { type: "redacted" };

export interface ActionTypeInner {
  apiName: ActionTypeApiName;
  displayName: string;
  description: string;
  icon: { locator: BlueprintIcon; color: string };
  parameters: Array<ActionParameter>;
  rules: Array<OntologyIrLogicRule>;
  sections: Record<SectionId, Array<ParameterId>>;
  status: ActionStatus;
  entities: OntologyIrActionTypeEntities;
  formContentOrdering: Array<OntologyIrFormContent>;
  validation: Array<OntologyIrValidationRule>;
  typeClasses: Array<TypeClass>;
}

export type ActionValidationRule = OntologyIrValidationRule;

export type ActionLevelValidationDefinition = {
  condition: ConditionDefinition;
  displayMetadata?: ValidationRuleDisplayMetadata;
};

export type GroupValidationRule = {
  type: "group";
  name: string;
};

export type ParameterValidationRule = {
  type: "parameter";
  parameterId: string;
  matches: OntologyIrConditionValue;
};

export type ActionStatus =
  | "active"
  | "experimental"
  | "example"
  | ActionTypeStatus_deprecated;

export type { InterfaceTypeStatus };

export type ObjectTypeStatus =
  | "active"
  | "experimental"
  | {
    type: "deprecated";
    message: string;
    deadline: string;
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
    | "primaryKeys"
    | "status"
  >
{
  primaryKeyPropertyApiName: string;
  properties: Array<ObjectPropertyType>;
  titlePropertyApiName: string;
  implementsInterfaces: Array<InterfaceImplementation>;
  description: string | undefined;
  icon: { locator: BlueprintIcon; color: string } | undefined;
  displayName: string;
  pluralDisplayName: string;
  visibility: Visibility;
  editsEnabled: boolean;
  status?: ObjectTypeStatus;
}

export type InterfaceImplementation = {
  implements: InterfaceType;
  propertyMapping: { interfaceProperty: string; mapsTo: string }[];
};

export type ObjectType =
  & OntologyEntityBase
  & RequiredFields<
    Partial<ObjectTypeInner>,
    | "apiName"
    | "primaryKeyPropertyApiName"
    | "displayName"
    | "pluralDisplayName"
    | "titlePropertyApiName"
  >
  & {
    datasource?: ObjectTypeDatasourceDefinition;
    __type: OntologyEntityTypeEnum.OBJECT_TYPE;
  };

export type ObjectTypeDefinition = {
  apiName: string;
  primaryKeyPropertyApiName: string;
  displayName: string;
  pluralDisplayName: string;
  titlePropertyApiName: string;
  properties?: { [key: string]: ObjectPropertyTypeUserDefinition };
  implementsInterfaces?: Array<InterfaceImplementation>;
  description?: string;
  icon?: { locator: BlueprintIcon; color: string };
  visibility?: Visibility;
  editsEnabled?: boolean;
  status?: ObjectTypeStatus;
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
    | "dataConstraints"
    | "status"
  >
{
  type: PropertyTypeType;
  array?: boolean;
  valueType: ValueTypeDefinitionVersion;
  sharedPropertyType: SharedPropertyType;
  description: string | undefined;
  displayName: string;
  visibility: Visibility;
  nullability?: Nullability;
  status?: ObjectTypeStatus;
  editOnly?: boolean;
}

export type ObjectPropertyType = RequiredFields<
  Partial<ObjectPropertyTypeInner>,
  "apiName" | "type" | "displayName"
>;

export type ObjectPropertyTypeUserDefinition = RequiredFields<
  Partial<ObjectPropertyTypeInner>,
  "type"
>;

export interface InterfacePropertyType {
  sharedPropertyType: SharedPropertyType;
  required: boolean;
}
export interface InterfaceType extends
  OntologyEntityBase,
  Omit<
    OntologyIrMarketplaceInterfaceType,
    // we want our simplified representation
    | "properties"
    // these things don't need to exist as the system works fine without them (I'm told)
    | "propertiesV2"
    | "propertiesV3"
    | "extendsInterfaces"
  >
{
  propertiesV2: Record<string, InterfacePropertyType>;
  extendsInterfaces: Array<InterfaceType>;
  status: InterfaceTypeStatus;
  __type: OntologyEntityTypeEnum.INTERFACE_TYPE;
}

export interface PropertyType {
  type: PropertyTypeType;
  array?: boolean;
  description?: string;
  displayName?: string;
  valueType?: ApiNameValueTypeReference;
  visibility?: Visibility;
  typeClasses?: TypeClass[];
  nullability?: Nullability;
}

export interface Nullability {
  noEmptyCollections: boolean;
  noNulls: boolean;
}

export type TypeClass = { kind: string; name: string };

export interface SharedPropertyType extends OntologyEntityBase, PropertyType {
  apiName: string;
  nonNameSpacedApiName: string;
  gothamMapping?: SharedPropertyTypeGothamMapping;
  __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE;
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
  | PropertyTypeTypeStruct
  | PropertyTypeTypeString;

type PropertyTypeTypeMarking = {
  type: "marking";
  markingType: "MANDATORY" | "CBAC";
};

export type PropertyTypeTypeStruct = {
  type: "struct";
  structDefinition: {
    [api_name: string]:
      | StructPropertyType
      | Exclude<PropertyTypeTypesWithoutStruct, PropertyTypeTypeMarking>;
  };
};

type PropertyTypeTypeString = {
  type: "string";
  isLongText: boolean;
  supportsEfficientLeadingWildcard: boolean;
  supportsExactMatching: boolean;
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

export type LinkType =
  | (OntologyEntityBase & OneToManyLinkTypeDefinition & {
    __type: OntologyEntityTypeEnum.LINK_TYPE;
  })
  | (OntologyEntityBase & ManyToManyLinkTypeDefinition & {
    __type: OntologyEntityTypeEnum.LINK_TYPE;
  });

export type LinkTypeDefinition =
  | Omit<
    OntologyEntityBase & OneToManyLinkTypeUserDefinition & {
      __type: OntologyEntityTypeEnum.LINK_TYPE;
    },
    "__type"
  >
  | Omit<
    OntologyEntityBase & ManyToManyLinkTypeUserDefinition & {
      __type: OntologyEntityTypeEnum.LINK_TYPE;
    },
    "__type"
  >;

export interface OneToManyLinkTypeDefinition {
  apiName: LinkTypeId;
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

export interface OneToManyLinkTypeUserDefinition {
  apiName: LinkTypeId;
  one: OneToManyObjectLinkReferenceUserDefinition;
  toMany: OneToManyObjectLinkReferenceUserDefinition;
  manyForeignKeyProperty: ObjectTypePropertyApiName;
  cardinality: "OneToMany" | "OneToOne" | undefined;
}

export interface OneToManyObjectLinkReferenceUserDefinition {
  object: ObjectType;
  metadata: LinkTypeMetadataUserDefinition;
}

export interface ManyToManyLinkTypeDefinition {
  apiName: LinkTypeId;
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

export interface ManyToManyLinkTypeUserDefinition {
  apiName: LinkTypeId;
  many: ManyToManyObjectLinkReferenceUserDefinition;
  toMany: ManyToManyObjectLinkReferenceUserDefinition;
}

export interface ManyToManyObjectLinkReferenceUserDefinition {
  object: ObjectType;
  metadata: LinkTypeMetadataUserDefinition;
}

export interface LinkTypeMetadataUserDefinition {
  apiName: string;
  displayName?: string;
  pluralDisplayName?: string;
  visibility?: Visibility;
  groupDisplayName?: string;
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

export type ValueTypeDefinitionVersion = OntologyEntityBase & {
  apiName: ValueTypeApiName;
  displayMetadata: ValueTypeDisplayMetadata;
  status: ValueTypeStatus;
  version: ValueTypeVersion;
  baseType: BaseType;
  constraints: ValueTypeDataConstraint[];
  exampleValues: ExampleValue[];
  __type: OntologyEntityTypeEnum.VALUE_TYPE;
};

export interface ObjectTypeDatasourceDefinition_dataset {
  type: "dataset";
}

export interface ObjectTypeDatasourceDefinition_stream {
  type: "stream";
  // Retention period must be in ISO 8601 duration format
  retentionPeriod?: string;
}

export interface ObjectTypeDatasourceDefinition_restrictedView {
  type: "restrictedView";
}

export type ObjectTypeDatasourceDefinition =
  | ObjectTypeDatasourceDefinition_stream
  | ObjectTypeDatasourceDefinition_dataset
  | ObjectTypeDatasourceDefinition_restrictedView;

export type ActionParameterTypePrimitive =
  | "boolean"
  | "booleanList"
  | "integer"
  | "integerList"
  | "long"
  | "longList"
  | "double"
  | "doubleList"
  | "string"
  | "stringList"
  | "decimal"
  | "decimalList"
  | "timestamp"
  | "timestampList"
  | "geohash"
  | "geohashList"
  | "geoshape"
  | "geoshapeList"
  | "timeSeriesReference"
  | "date"
  | "dateList"
  | "objectTypeReference"
  | "objectReference"
  | "attachment"
  | "attachmentList"
  | "marking"
  | "markingList"
  | "mediaReference"
  | "mediaReferenceList"
  | "geotimeSeriesReference"
  | "geotimeSeriesReferenceList";

export type ActionParameterTypeComplex =
  | OntologyIrBaseParameterType_decimal
  | OntologyIrBaseParameterType_decimalList
  | OntologyIrBaseParameterType_timestamp
  | OntologyIrBaseParameterType_timestampList
  | OntologyIrBaseParameterType_objectReference
  | OntologyIrBaseParameterType_objectReferenceList
  | OntologyIrBaseParameterType_objectSetRid
  | OntologyIrBaseParameterType_objectTypeReference
  | OntologyIrBaseParameterType_objectReference
  | OntologyIrBaseParameterType_interfaceReference
  | OntologyIrBaseParameterType_interfaceReferenceList
  | OntologyIrBaseParameterType_struct
  | OntologyIrBaseParameterType_structList;

export type ActionParameterType =
  | ActionParameterTypePrimitive
  | ActionParameterTypeComplex;
