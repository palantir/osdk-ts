/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { StructFieldType } from "@osdk/client.unstable";

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
  | "timestamp"
  | "attachment";

export type PropertyTypeTypeExotic =
  | "geopoint"
  | "geoshape"
  | "mediaReference"
  | "geotimeSeries"
  | PropertyTypeTypeMarking
  | PropertyTypeTypeStruct
  | PropertyTypeTypeString
  | PropertyTypeTypeDecimal;

type PropertyTypeTypeMarking = {
  type: "marking";
  markingType: "MANDATORY" | "CBAC";
  markingInputGroupName: string;
};

export type PropertyTypeTypeStruct = {
  type: "struct";
  structDefinition: {
    [api_name: string]:
      | StructPropertyType
      | Exclude<PropertyTypeTypesWithoutStruct, PropertyTypeTypeMarking>;
  };
  mainValue?: {
    fields: string | Array<string>;
    // TODO(ethana): we can infer this type from fields
    type: PropertyTypeType;
  };
};

type PropertyTypeTypeString = {
  type: "string";
  isLongText?: boolean;
  supportsEfficientLeadingWildcard?: boolean;
  supportsExactMatching?: boolean;
  supportsFullTextRegex?: boolean;
  enableAsciiFolding?: boolean;
};

type PropertyTypeTypeDecimal = {
  type: "decimal";
  precision?: number;
  scale?: number;
};

export type PropertyTypeTypesWithoutStruct = Exclude<
  PropertyTypeType,
  PropertyTypeTypeStruct
>;
export function isPropertyTypeType(
  v: PropertyTypeType,
): v is PropertyTypeType {
  return v === "boolean" || v === "byte"
    || v === "date" || v === "decimal" || v === "double"
    || v === "float" || v === "geopoint" || v === "geoshape"
    || v === "integer" || v === "long"
    || (typeof v === "object" && v.type === "marking")
    || v === "short" || v === "string"
    || v === "timestamp";
}
export function isExotic(
  type: PropertyTypeType | undefined,
): type is PropertyTypeTypeExotic {
  if (type === undefined) {
    return false;
  }
  if (typeof type === "string") {
    return ["geopoint", "geoshape", "mediaReference", "geotimeSeries"].includes(
      type,
    );
  } else if (typeof type === "object" && type != null) {
    return type.type === "marking" || type.type === "struct"
      || type.type === "string"
      || type.type === "decimal";
  }
  return false;
}
export function isStruct(
  type: PropertyTypeType,
): type is PropertyTypeTypeStruct {
  return typeof type === "object" && type.type === "struct";
}

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
  requireImplementation?: boolean;
}
