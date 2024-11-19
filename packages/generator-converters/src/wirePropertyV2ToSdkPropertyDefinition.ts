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

import type { ObjectMetadata, WirePropertyTypes } from "@osdk/api";
import type {
  ObjectPropertyType,
  PropertyV2,
  SharedPropertyType,
} from "@osdk/internal.foundry.core";

export function wirePropertyV2ToSdkPropertyDefinition(
  input: (PropertyV2 | SharedPropertyType) & { nullable?: boolean },
  isNullable: boolean = true,
): ObjectMetadata.Property {
  switch (input.dataType.type) {
    case "integer":
    case "string":
    case "byte":
    case "decimal":
    case "double":
    case "float":
    case "long":
    case "short":
    case "boolean":
    case "date":
    case "attachment":
    case "geopoint":
    case "geoshape":
    case "timestamp":
    case "timeseries":
    case "marking":
    case "geotimeSeriesReference":
      return {
        displayName: input.displayName,
        multiplicity: false,
        description: input.description,
        type: objectPropertyTypeToSdkPropertyDefinition(input.dataType),
        nullable: input.nullable == null ? isNullable : input.nullable,
      };
    case "array": {
      return {
        displayName: input.displayName,
        multiplicity: true,
        description: input.description,
        type: objectPropertyTypeToSdkPropertyDefinition(input.dataType),
        nullable: true,
      };
    }
    case "mediaReference": {
      throw new Error(
        `Media references not supported yet`,
      );
    }
    default:
      const _: never = input.dataType;
      throw new Error(
        `Unexpected data type ${JSON.stringify(input.dataType)}`,
      );
  }
}

function objectPropertyTypeToSdkPropertyDefinition(
  propertyType: ObjectPropertyType,
): WirePropertyTypes {
  switch (propertyType.type) {
    case "integer":
    case "string":
    case "byte":
    case "decimal":
    case "double":
    case "float":
    case "long":
    case "short":
    case "boolean":
    case "attachment":
    case "geopoint":
    case "geoshape":
    case "timestamp":
    case "marking":
    case "geotimeSeriesReference":
      return propertyType.type;
    case "date":
      return "datetime";
    case "array":
      return objectPropertyTypeToSdkPropertyDefinition(propertyType.subType);
    case "timeseries":
      if (propertyType.itemType?.type === "string") {
        return "stringTimeseries";
      }
      return "numericTimeseries";
    case "mediaReference": {
      throw new Error(
        `Media references not supported yet`,
      );
    }
    default:
      const _: never = propertyType;
      throw new Error(`Unexpected data type ${JSON.stringify(propertyType)}`);
  }
}
