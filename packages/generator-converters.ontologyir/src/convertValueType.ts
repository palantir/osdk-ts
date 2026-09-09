/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  BaseType,
  DataConstraint,
  DecimalTypeDataConstraints,
  DoubleTypeDataConstraints,
  FloatTypeDataConstraints,
  IntegerTypeDataConstraints,
  LongTypeDataConstraints,
  ShortTypeDataConstraints,
  ValueTypeApiName,
  ValueTypeDataConstraint,
  ValueTypeDisplayMetadata,
  ValueTypeRid,
  ValueTypeStatus,
  ValueTypeVersion,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

export interface ResolvedValueType {
  rid: ValueTypeRid;
  apiName: ValueTypeApiName;
  displayMetadata: ValueTypeDisplayMetadata;
  status: ValueTypeStatus;
  version: ValueTypeVersion;
  baseType: BaseType;
  constraints: ValueTypeDataConstraint[];
}

export function convertValueType(
  valueType: ResolvedValueType,
): Ontologies.OntologyValueType {
  return {
    apiName: valueType.apiName,
    rid: valueType.rid,
    version: valueType.version,
    displayName: valueType.displayMetadata.displayName,
    description: valueType.displayMetadata.description,
    status: valueType.status.type === "active" ? "ACTIVE" : "DEPRECATED",
    fieldType: convertFieldType(valueType.baseType),
    constraints: valueType.constraints
      .map(({ constraint }) => convertConstraint(constraint.constraint))
      .filter(constraint => constraint.type !== "unsupported"),
  };
}

function convertFieldType(baseType: BaseType): Ontologies.ValueTypeFieldType {
  switch (baseType.type) {
    case "array":
      return {
        type: "array",
        subType: convertFieldType(baseType.array.elementType),
      };
    case "map":
      return {
        type: "map",
        keyType: convertFieldType(baseType.map.keyType),
        valueType: convertFieldType(baseType.map.valueType),
      };
    case "optional":
      return {
        type: "optional",
        wrappedType: convertFieldType(baseType.optional.wrappedType),
      };
    case "union":
      return {
        type: "union",
        memberTypes: baseType.union.memberTypes.map(convertFieldType),
      };
    case "referenced":
      return { type: "reference" };
    case "struct":
      return {
        type: "struct",
        fields: baseType.struct.fields.map(field => ({
          name: field.name,
          fieldType: convertFieldType(field.type),
        })),
      };
    case "structV2":
      return {
        type: "struct",
        fields: baseType.structV2.fields.map(field => ({
          name: field.identifier,
          fieldType: convertFieldType(field.baseType),
        })),
      };
    default:
      return { type: baseType.type };
  }
}

function convertConstraint(
  constraint: DataConstraint,
): Ontologies.ValueTypeConstraint {
  switch (constraint.type) {
    case "string": {
      const value = constraint.string;
      switch (value.type) {
        case "oneOf":
          return { type: "enum", options: value.oneOf.values };
        case "regex":
          return {
            type: "regex",
            pattern: value.regex.regexPattern,
            partialMatch: value.regex.usePartialMatch ?? false,
          };
        case "length":
          return {
            type: "length",
            minimumLength: value.length.minSize,
            maximumLength: value.length.maxSize,
          };
        case "isRid":
          return { type: "rid" };
        case "isUuid":
          return { type: "uuid" };
      }
      break;
    }
    case "boolean":
      return {
        type: "enum",
        options: constraint.boolean.allowedValues.map(value =>
          ({ TRUE_VALUE: true, FALSE_VALUE: false, NULL_VALUE: null })[value]
        ),
      };
    case "integer":
      return convertNumericConstraint(constraint.integer);
    case "short":
      return convertNumericConstraint(constraint.short);
    case "long":
      return constraint.long.type === "oneOf"
        ? { type: "enum", options: constraint.long.oneOf.values.map(String) }
        : convertNumericConstraint(constraint.long);
    case "float":
      return convertNumericConstraint(constraint.float);
    case "double":
      return convertNumericConstraint(constraint.double);
    case "decimal":
      return convertNumericConstraint(constraint.decimal);
    case "binary":
      return {
        type: "range",
        minimumValue: constraint.binary.size.minSize,
        maximumValue: constraint.binary.size.maxSize,
      };
    case "date":
      return {
        type: "range",
        minimumValue: constraint.date.range.min,
        maximumValue: constraint.date.range.max,
      };
    case "timestamp":
      return {
        type: "range",
        minimumValue: constraint.timestamp.range.min,
        maximumValue: constraint.timestamp.range.max,
      };
    case "array":
      return {
        type: "array",
        minimumSize: constraint.array.size?.minSize,
        maximumSize: constraint.array.size?.maxSize,
        uniqueValues: constraint.array.elementsUnique ?? false,
        valueConstraint: constraint.array.elementsConstraint
          && convertConstraint(constraint.array.elementsConstraint),
      };
    default:
      return {
        type: "unsupported",
        unsupportedType: constraint.type,
        params: {},
      };
  }
  return { type: "unsupported", unsupportedType: constraint.type, params: {} };
}

function convertNumericConstraint(
  value:
    | IntegerTypeDataConstraints
    | ShortTypeDataConstraints
    | LongTypeDataConstraints
    | FloatTypeDataConstraints
    | DoubleTypeDataConstraints
    | DecimalTypeDataConstraints,
): Ontologies.ValueTypeConstraint {
  return value.type === "oneOf"
    ? { type: "enum", options: value.oneOf.values }
    : {
      type: "range",
      minimumValue: value.range.min,
      maximumValue: value.range.max,
    };
}
